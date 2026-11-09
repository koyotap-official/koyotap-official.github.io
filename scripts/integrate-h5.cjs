#!/usr/bin/env node
'use strict';

// Integrate the exact published entries; never rebuild a game from newer source.
// The manifest is also a lock: a second run verifies bytes and changes nothing.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const cp = require('node:child_process');

const root = path.resolve(__dirname, '..');
const manifestPath = path.join(root, 'docs', 'h5-game-entries.json');
const version = 'h5-20261109-1';
const gameIds = [
  'glowline-pipes', 'block-crush', 'cube-merge-shot', 'tall-tales',
  'idiom-lab', 'craft-studio', 'cake-lettering', 'color-sculptures',
  'little-fish-trios',
];
const sha256 = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const read = relative => fs.readFileSync(path.join(root, relative));
const check = (condition, message) => { if (!condition) throw new Error(message); };
const git = (args, input) => cp.execFileSync('git', ['-c', 'safe.directory=' + root.replaceAll('\\', '/'), ...args], {
  cwd: root, input, maxBuffer: 16 * 1024 * 1024, windowsHide: true,
});
const sourceRevision = git(['rev-parse', 'be3fb74^{commit}']).toString('utf8').trim();
const objectHashAlgorithm = git(['rev-parse', '--show-object-format']).toString('utf8').trim();
const readSource = relative => git(['show', sourceRevision + ':' + relative]);
const blobId = bytes => crypto.createHash(objectHashAlgorithm)
  .update(Buffer.from('blob ' + bytes.length + '\0')).update(bytes).digest('hex');

// GitHub Pages serves Git blobs, while a Windows checkout may have CRLF.
// Ask Git which bytes it would store; do not write any object or change Git state.
function publicBytes(relative, bytes) {
  const filteredId = git(['hash-object', '--path=' + relative, '--stdin'], bytes).toString('utf8').trim();
  if (blobId(bytes) === filteredId) return bytes;
  const normalized = Buffer.from(bytes.toString('utf8').replace(/\r\n/g, '\n'), 'utf8');
  check(blobId(normalized) === filteredId, relative + ': unsupported Git content filter');
  return normalized;
}

function wrapperWithVersion(text, gameId, targetVersion = version) {
  let count = 0;
  const next = text.replace(/(<script\b[^>]*\bsrc=)(["'])([^"']+)(\2)/gi, (match, prefix, quote, src) => {
    if (!/(?:^|\/)assets\/play\.js(?:\?|$)/.test(src)) return match;
    count++;
    const updated = /[?&]v=/.test(src)
      ? src.replace(/([?&]v=)[^&#]*/, '$1' + targetVersion)
      : src + (src.includes('?') ? '&' : '?') + 'v=' + targetVersion;
    return prefix + quote + updated + quote;
  });
  check(count === 1, gameId + ': expected one wrapper play.js reference');
  return next;
}

function verifyManifest(manifest) {
  check(manifest.schemaVersion === 1 && manifest.version === version && manifest.hashBasis === 'git-filtered-public-bytes', 'Unsupported H5 manifest');
  check(manifest.sourceBaseRevision === sourceRevision, 'H5 source revision changed');
  check(Array.isArray(manifest.games) && manifest.games.length === gameIds.length, 'Incomplete H5 manifest');
  for (const gameId of gameIds) {
    const game = manifest.games.find(item => item.gameId === gameId);
    check(game, gameId + ': missing manifest entry');
    const entry = publicBytes(game.entryPath, read(game.entryPath));
    check(sha256(entry) === game.originalEntrySha256 && sha256(entry) === game.entrySha256,
      gameId + ': published entry bytes changed');
    check(entry.length === game.entryBytes, gameId + ': entry byte length changed');
    let current = game;
    const versions = new Set();
    // Explicit game releases keep the first integrated JS immutable. Every later
    // entry is also immutable; only the latest HTML/wrapper points to it.
    for (const update of game.updates || []) {
      const directory = 'play/' + gameId + '/game/';
      check(/^[a-zA-Z0-9_-]+$/.test(update.version) && !versions.has(update.version), gameId + ': invalid or duplicate release');
      versions.add(update.version);
      check(/^\.\/[a-zA-Z0-9_-]+\.js$/.test(update.entry) && update.entryPath === directory + update.entry.slice(2), gameId + ': release entry must stay in game directory');
      check(update.entryKind === game.entryKind && /^[a-f0-9]{40}$/.test(update.sourceCommit), gameId + ': missing source provenance');
      check(update.previousEntrySha256 === current.entrySha256, gameId + ': broken release chain');
      const released = publicBytes(update.entryPath, read(update.entryPath));
      check(sha256(released) === update.entrySha256 && released.length === update.entryBytes, gameId + ': released entry changed');
      current = update;
    }
    const html = publicBytes(game.htmlPath, read(game.htmlPath));
    check(sha256(html) === current.integratedHtmlSha256, gameId + ': integrated HTML changed');
    check(html.toString('utf8').includes('data-game-entry="' + current.entry + '"'), gameId + ': HTML points to another entry');
    const wrapper = read('play/' + gameId + '/index.html').toString('utf8');
    check(wrapperWithVersion(wrapper, gameId, current.wrapperVersion || version) === wrapper, gameId + ': wrapper version changed');
    if(current.wrapperSha256)check(sha256(publicBytes('play/' + gameId + '/index.html', Buffer.from(wrapper))) === current.wrapperSha256, gameId + ': released wrapper changed');
  }
}

function planGame(gameId) {
  const gameDirectory = 'play/' + gameId + '/game';
  const htmlPath = gameDirectory + '/index.html';
  const originalBytes = readSource(htmlPath);
  const html = originalBytes.toString('utf8');
  check(Buffer.from(html, 'utf8').equals(originalBytes), gameId + ': HTML must be valid UTF-8');
  const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)];
  check(scripts.length === 1, gameId + ': expected one original executable script');
  const script = scripts[0];
  const attributes = script[1];
  const source = /\bsrc\s*=\s*(["'])(.*?)\1/i.exec(attributes);
  const module = /\btype\s*=\s*(["'])module\1/i.test(attributes);
  const entryKind = module ? 'module' : 'classic';
  check(module || attributes.trim() === '', gameId + ': unsupported original script attributes');
  check(!/\bdata-game-entry\s*=/.test(html), gameId + ': already integrated without a manifest');
  const extracted = !source;
  const entry = source ? source[2] : './h5-original-entry.js';
  check(/^\.\/[a-zA-Z0-9_./-]+\.js$/.test(entry), gameId + ': unsupported entry URL');
  check(!entry.split('/').includes('..'), gameId + ': entry must stay in its game directory');
  const entryPath = gameDirectory + '/' + entry.slice(2);
  let entryBytes;
  if (extracted) {
    // Slice the source Buffer rather than rewriting or formatting the JS body.
    const bodyStart = script.index + script[0].indexOf('>') + 1;
    const byteStart = Buffer.byteLength(html.slice(0, bodyStart), 'utf8');
    const byteLength = Buffer.byteLength(script[2], 'utf8');
    entryBytes = originalBytes.subarray(byteStart, byteStart + byteLength);
    check(entryBytes.equals(Buffer.from(script[2], 'utf8')), gameId + ': inline byte extraction failed');
    if (fs.existsSync(path.join(root, entryPath))) {
      check(publicBytes(entryPath, read(entryPath)).equals(entryBytes), gameId + ': refusing to overwrite a different extracted entry');
    }
  } else {
    check(script[2].trim() === '', gameId + ': external script unexpectedly has inline content');
    entryBytes = readSource(entryPath);
    check(publicBytes(entryPath, read(entryPath)).equals(entryBytes), gameId + ': external published entry changed');
  }

  const eol = html.includes('\r\n') ? '\r\n' : '\n';
  const loader = [
    '<script src="../../../assets/h5-ads-config.js?v=' + version + '"></script>',
    '<script src="../../../assets/h5-ads.js?v=' + version + '"></script>',
    '<script type="module" src="../../../assets/h5-game-loader.js?v=' + version + '"></script>',
  ].join(eol + '    ');
  let integrated = html.slice(0, script.index) + loader + html.slice(script.index + script[0].length);
  let htmlTags = 0;
  integrated = integrated.replace(/<html\b([^>]*)>/i, (tag, existingAttributes) => {
    htmlTags++;
    const existingId = /\bdata-game-id\s*=\s*(["'])(.*?)\1/i.exec(existingAttributes);
    check(!existingId || existingId[2] === gameId, gameId + ': conflicting game ID');
    return '<html' + existingAttributes + (existingId ? '' : ' data-game-id="' + gameId + '"')
      + ' data-game-entry="' + entry + '" data-game-entry-kind="' + entryKind + '"'
      + (gameId === 'glowline-pipes' ? ' data-game-standalone="true"' : '') + '>';
  });
  check(htmlTags === 1, gameId + ': missing HTML root');
  const robots = /<meta\b(?=[^>]*\bname\s*=\s*["']robots["'])[^>]*>/i.exec(integrated);
  if (robots) {
    check(/\bcontent\s*=\s*["'][^"']*\bnoindex\b/i.test(robots[0]), gameId + ': existing robots must retain noindex');
  } else {
    check(/<head\b[^>]*>/i.test(integrated), gameId + ': missing head');
    integrated = integrated.replace(/<head\b[^>]*>/i, '$&' + eol + '    <meta name="robots" content="noindex, nofollow" />');
  }
  const wrapperPath = 'play/' + gameId + '/index.html';
  const originalWrapper = readSource(wrapperPath).toString('utf8');
  const wrapper = wrapperWithVersion(originalWrapper, gameId);
  const integratedBytes = Buffer.from(integrated, 'utf8');
  const currentHtml = publicBytes(htmlPath, read(htmlPath));
  check(currentHtml.equals(originalBytes) || currentHtml.equals(integratedBytes), gameId + ': refusing to overwrite unrelated HTML changes');
  const currentWrapper = publicBytes(wrapperPath, read(wrapperPath));
  check(currentWrapper.equals(Buffer.from(originalWrapper)) || currentWrapper.equals(Buffer.from(wrapper)),
    gameId + ': refusing to overwrite unrelated wrapper changes');
  return {
    gameId, htmlPath, entryPath, entryBytes, extracted, integratedBytes, wrapperPath, wrapper,
    manifest: {
      gameId, htmlPath, entryKind, entry, entryPath, extracted,
      originalEntrySha256: sha256(entryBytes), entrySha256: sha256(entryBytes), entryBytes: entryBytes.length,
      entryCheckoutSha256AtIntegration: sha256(extracted ? entryBytes : read(entryPath)),
      originalHtmlSha256: sha256(originalBytes), integratedHtmlSha256: sha256(integratedBytes),
      originalScriptAttributes: attributes, standalone: gameId === 'glowline-pipes',
    },
  };
}

const existingManifest = fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath, 'utf8')) : null;
if (existingManifest && existingManifest.hashBasis === 'git-filtered-public-bytes') {
  verifyManifest(existingManifest);
  console.log('Verified all 9 published entries; no changes.');
} else {
  // Validate every game and wrapper before changing the first file.
  const plans = gameIds.map(planGame);
  const manifest = { schemaVersion: 1, version, hashBasis: 'git-filtered-public-bytes', sourceBaseRevision: sourceRevision, games: plans.map(plan => plan.manifest) };
  for (const plan of plans) {
    if (plan.extracted && (!fs.existsSync(path.join(root, plan.entryPath)) || !read(plan.entryPath).equals(plan.entryBytes))) {
      fs.writeFileSync(path.join(root, plan.entryPath), plan.entryBytes);
    }
    fs.writeFileSync(path.join(root, plan.htmlPath), plan.integratedBytes);
    const wrapperFile = path.join(root, plan.wrapperPath);
    if (fs.readFileSync(wrapperFile, 'utf8') !== plan.wrapper) fs.writeFileSync(wrapperFile, plan.wrapper, 'utf8');
  }
  fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
  verifyManifest(manifest);
  console.log('Integrated 9 published entries with identical original JS bytes.');
}
