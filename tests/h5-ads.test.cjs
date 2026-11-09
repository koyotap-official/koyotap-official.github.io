const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const createAds = require('../assets/h5-ads.js');

function environment({ host = 'koyotap.com', search = '', enabled = true, sdk = () => {} } = {}) {
  const attributes = { 'data-game-id': 'block-crush' };
  const listeners = {};
  const timers = new Map();
  const scripts = [];
  const placements = [];
  let nextTimer = 0;
  let win;
  const doc = {
    hidden: false,
    documentElement: { getAttribute: key => attributes[key], setAttribute: (key, value) => attributes[key] = value },
    addEventListener: (name, fn) => listeners[name] = fn,
    removeEventListener: name => delete listeners[name],
    createElement: () => ({ attributes: {}, setAttribute(key, value) { this.attributes[key] = value; } }),
    head: { appendChild(script) { scripts.push(script); sdk(win, script, placements); } }
  };
  win = { document: doc, location: { hostname: host, search }, console: { info() {} },
    setTimeout: fn => { timers.set(++nextTimer, fn); return nextTimer; },
    clearTimeout: id => timers.delete(id) };
  const config = { enabled, allowedHosts: ['koyotap.com'], publisherId: 'ca-pub-8203691800220653',
    games: { 'block-crush': true }, frequencyHint: '120s', readyTimeoutMs: 3000 };
  return { win, doc, scripts, placements, attributes, timers, listeners, config,
    ads: createAds(win, config), expire() { for (const [id, fn] of [...timers]) { timers.delete(id); fn(); } } };
}

function readySdk(handler) {
  return (win, script, placements) => {
    const queue = win.adsbygoogle;
    queue.push = item => {
      if (item.type) { placements.push(item); handler?.(item); }
      else item.onReady?.();
    };
    for (const item of [...queue]) if (!item.type) item.onReady?.();
  };
}

test('unapproved live configuration and unknown hosts never load the SDK', async () => {
  for (const input of [{ enabled: false }, { host: 'other.example', search: '?h5ads=test' }, { host: 'localhost' }]) {
    const env = environment(input);
    assert.equal((await env.ads.preroll()).requested, false);
    assert.equal(env.scripts.length, 0);
  }
});

test('explicit Google test mode uses fake inventory even while live is disabled', async () => {
  const env = environment({ host: '127.0.0.1', search: '?h5ads=test', enabled: false,
    sdk: readySdk(p => p.adBreakDone({ breakStatus: 'viewed' })) });
  const outcome = await env.ads.preroll();
  assert.equal(outcome.mode, 'test');
  assert.equal(outcome.success, true);
  assert.equal(env.scripts[0].attributes['data-adbreak-test'], 'on');
  assert.equal(env.scripts[0].attributes['data-ad-frequency-hint'], '120s');
  assert.equal(env.placements[0].beforeAd, undefined);
  assert.equal(env.placements[0].afterAd, undefined);
});

test('one preroll per document, including simultaneous callers', async () => {
  const env = environment({ sdk: readySdk(p => p.adBreakDone({ breakStatus: 'noAdPreloaded' })) });
  const first = env.ads.preroll();
  assert.equal(first, env.ads.preroll());
  assert.equal((await first).success, false);
  await env.ads.preroll();
  assert.equal(env.placements.length, 1);
});

test('blocked SDK returns without submitting an ad', async () => {
  const env = environment({ sdk: (win, script) => script.onerror() });
  assert.equal((await env.ads.preroll()).status, 'unavailable');
  assert.equal(env.placements.length, 0);
});

test('timeout then late onReady cannot show an ad over the running game', async () => {
  const env = environment();
  const pending = env.ads.preroll();
  env.expire();
  assert.equal((await pending).status, 'unavailable');
  env.win.adsbygoogle[0].onReady();
  assert.equal(env.win.adsbygoogle.filter(item => item.type).length, 0);
});

test('interstitial stops synchronously only before display and restores exactly once', async () => {
  const actions = [];
  let placement;
  const env = environment({ sdk: readySdk(p => placement = p) });
  const pending = env.ads.interstitial({ type: 'next', pause: r => actions.push('pause:' + r), resume: r => actions.push('resume:' + r) });
  await Promise.resolve(); await Promise.resolve();
  assert.deepEqual(actions, []);
  placement.beforeAd();
  assert.deepEqual(actions, ['pause:ad']);
  placement.afterAd();
  placement.adBreakDone({ breakStatus: 'viewed' });
  placement.adBreakDone({ breakStatus: 'viewed' });
  assert.equal((await pending).shown, true);
  assert.deepEqual(actions, ['pause:ad', 'resume:ad']);
});

test('no fill and provider exception restore progression without inventing an impression', async () => {
  for (const kind of ['noAdPreloaded', 'frequencyCapped', 'exception']) {
    const env = environment({ sdk: readySdk(p => {
      if (kind === 'exception') throw Error('provider');
      p.adBreakDone({ breakStatus: kind });
    }) });
    const outcome = await env.ads.interstitial({ pause() {}, resume() {} });
    assert.equal(outcome.success, false);
    assert.equal(outcome.shown, false);
    assert.equal(env.ads.inspect().active, false);
  }
});

test('pause failure still restores and releases the request', async () => {
  let resumed = 0;
  const env = environment({ sdk: readySdk(p => p.beforeAd()) });
  const outcome = await env.ads.interstitial({ pause() { throw Error('pause'); }, resume() { resumed++; } });
  assert.equal(outcome.status, 'error');
  assert.equal(resumed, 1);
});

test('concurrent placements do not submit two ads', async () => {
  let placement;
  const env = environment({ sdk: readySdk(p => placement = p) });
  const first = env.ads.interstitial({ pause() {}, resume() {} });
  assert.equal((await env.ads.interstitial({ pause() {}, resume() {} })).status, 'busy');
  await Promise.resolve();
  placement.adBreakDone({ breakStatus: 'noAdPreloaded' });
  await first;
  assert.equal(env.placements.length, 1);
});

test('reward requires explicit offer, one acceptance, and adViewed; dismissed is not rewarded', async () => {
  for (const viewed of [true, false]) {
    const env = environment({ sdk: readySdk(p => p.beforeReward(() => {
      p.beforeAd();
      if (viewed) p.adViewed(); else p.adDismissed();
      p.afterAd(); p.adBreakDone({ breakStatus: viewed ? 'viewed' : 'dismissed' });
    })) });
    const outcome = await env.ads.rewarded({ pause() {}, resume() {}, offer(accept) { accept(); accept(); } });
    assert.equal(outcome.rewarded, viewed);
  }
});

test('viewed status without adViewed, or a test ad, cannot award a real reward', async () => {
  for (const input of [{}, { search: '?h5ads=test' }]) {
    const env = environment({ ...input, sdk: readySdk(p => {
      if (input.search) p.adViewed();
      p.adBreakDone({ breakStatus: 'viewed' });
    }) });
    const outcome = await env.ads.rewarded({ pause() {}, resume() {}, offer() {} });
    assert.equal(outcome.rewarded, false);
  }
});

test('declining an offer releases the gate and ignores late acceptance', async () => {
  let lateAccept;
  let shown = 0;
  const env = environment({ sdk: readySdk(p => p.beforeReward(() => shown++)) });
  const outcome = await env.ads.rewarded({ pause() {}, resume() {}, offer(accept, decline) { lateAccept = accept; decline(); } });
  lateAccept();
  assert.equal(outcome.status, 'ignored');
  assert.equal(shown, 0);
  assert.equal(env.ads.inspect().active, false);
});

test('duplicate reward offer and conflicting completion cannot grant twice', async () => {
  let offers = 0; let shows = 0;
  const env = environment({ sdk: readySdk(p => {
    const show = () => {
      shows++; p.beforeAd(); p.adDismissed(); p.adViewed();
      p.adBreakDone({ breakStatus: 'viewed' });
    };
    p.beforeReward(show); p.beforeReward(show);
  }) });
  const outcome = await env.ads.rewarded({ pause() {}, resume() {}, offer(accept) { offers++; accept(); } });
  assert.equal(offers, 1);
  assert.equal(shows, 1);
  assert.equal(outcome.rewarded, false);
});

test('invalid interstitial types and missing pause hooks are refused', async () => {
  const env = environment();
  assert.equal((await env.ads.interstitial({ type: 'preroll' })).status, 'invalid');
  assert.equal((await env.ads.interstitial({})).status, 'missing-pause-hooks');
  assert.equal(env.scripts.length, 0);
});

test('visibility remains paused after an ad finishes', () => {
  const env = environment();
  const changes = [];
  const gate = env.ads.createPauseGate({ pause: () => changes.push('pause'), resume: () => changes.push('resume') });
  gate.pause('ad');
  env.doc.hidden = true; env.listeners.visibilitychange();
  gate.resume('ad');
  assert.equal(gate.isPaused(), true);
  env.doc.hidden = false; env.listeners.visibilitychange();
  assert.deepEqual(changes, ['pause', 'resume']);
  gate.dispose();
});

test('wrapper excludes preroll duration from load deadline and rejects foreign/stale messages', () => {
  const timers = new Map(); const events = {}; let n = 0;
  const nodes = {};
  for (const key of ['poster', 'start', 'retry', 'frame-wrap', 'frame-shell', 'frame', 'status', 'fullscreen']) {
    nodes[key] = { hidden: false, addEventListener(name, fn) { this[name] = fn; }, focus() {}, scrollIntoView() {} };
  }
  nodes.frame.contentWindow = {};
  const win = { location: { origin: 'https://koyotap.com', search: '?h5ads=test' },
    setTimeout(fn, ms) { timers.set(++n, { fn, ms }); return n; }, clearTimeout: id => timers.delete(id),
    addEventListener: (name, fn) => events[name] = fn };
  const doc = { documentElement: { getAttribute: key => key === 'data-game-id' ? 'block-crush' : 'en' },
    body: { getAttribute() {} }, querySelector: selector => nodes[selector.slice(11, -1)] };
  vm.runInNewContext(fs.readFileSync(require.resolve('../assets/play.js'), 'utf8'), { window: win, document: doc, URLSearchParams });
  nodes.start.click();
  assert.match(nodes.frame.src, /h5ads=test/);
  const send = (event, extra = {}) => events.message({ origin: win.location.origin, source: nodes.frame.contentWindow,
    data: { type: 'koyotap:game', gameId: 'block-crush', event }, ...extra });
  send('ad_startup_begin', { origin: 'https://other.example' });
  assert.equal([...timers.values()].filter(t => t.ms === 15000).length, 1);
  send('ad_startup_begin', { source: {} });
  assert.equal([...timers.values()].filter(t => t.ms === 15000).length, 1);
  send('ad_startup_begin');
  assert.equal([...timers.values()].filter(t => t.ms === 15000).length, 0);
  assert.equal(nodes.fullscreen.disabled, true);
  assert.equal(nodes.retry.hidden, true);
  send('ad_startup_end');
  assert.equal([...timers.values()].filter(t => t.ms === 15000).length, 1);
  send('ready');
  assert.equal([...timers.values()].filter(t => t.ms === 15000).length, 0);
  assert.equal(nodes.fullscreen.disabled, false);
});
