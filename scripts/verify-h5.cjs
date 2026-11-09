'use strict';
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
// Verifies every integrated HTML and unchanged public game entry, without writes.
require('./integrate-h5.cjs');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'docs/h5-game-entries.json'), 'utf8'));
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'assets/h5-ads-config.js'), 'utf8'), context);
const config = context.window.KOYOTAP_H5_ADS_CONFIG;
assert.equal(config.enabled, false, 'live activation requires a separate verified release');
assert.equal(config.publisherId, 'ca-pub-8203691800220653');
assert.equal(Object.keys(config.games).length, manifest.games.length);
for (const game of manifest.games) {
  assert.equal(config.games[game.gameId], true);
  const html = fs.readFileSync(path.join(root, game.htmlPath), 'utf8');
  assert(!html.includes('poki-sdk.js') && !html.includes('sdk.gamepix.com'));
  for (const file of ['h5-ads-config.js', 'h5-ads.js', 'h5-game-loader.js']) {
    assert(html.includes('../../../assets/' + file + '?v=h5-20261109-1'));
    assert(fs.existsSync(path.join(root, 'assets', file)));
  }
  assert(html.includes('data-game-entry-kind="' + game.entryKind + '"'));
  if (game.gameId === 'glowline-pipes') assert(html.includes('data-game-standalone="true"'));
}
assert.equal(fs.readFileSync(path.join(root, 'ads.txt'), 'utf8').trim(), 'google.com, pub-8203691800220653, DIRECT, f08c47fec0942fa0');
console.log('All 9 H5 configurations and publisher declarations verified; live disabled.');
