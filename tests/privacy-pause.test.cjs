const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const code = fs.readFileSync(path.join(__dirname, '../assets/analytics.js'), 'utf8');

function run({ host = 'koyotap.com', play = true, preference = null, storageDenied = false } = {}) {
  const cookies = [];
  const store = new Map(preference === null ? [] : [['koyotap-analytics-consent', preference]]);
  const noNetwork = () => { throw new Error('Unexpected network or script operation'); };
  const document = {
    documentElement: { getAttribute: name => name === 'data-play-page' && play ? 'true' : null },
    createElement: noNetwork,
    head: { appendChild: noNetwork },
    set cookie(value) { cookies.push(value); }
  };
  const window = {
    location: { hostname: host }, dataLayer: [['event', 'old_queued_event']],
    localStorage: {
      getItem: key => { if (storageDenied) throw Error('denied'); return store.get(key) ?? null; },
      removeItem: key => { if (storageDenied) throw Error('denied'); store.delete(key); }
    }, fetch: noNetwork, navigator: { sendBeacon: noNetwork }
  };
  vm.runInNewContext(code, { window, document });
  return { window, store, cookies };
}

for (const preference of [null, 'granted', 'denied']) {
  test(`production play remains untracked with prior preference ${preference}`, () => {
    const { window, store, cookies } = run({ preference });
    window.gtag('event', 'page_view', { private: 'not queued' });
    window.koyotapTrack('game_start', { score: 10 });
    assert.equal(window.dataLayer.length, 0);
    assert.equal(window.koyotapAnalytics.enabled, false);
    assert.equal(window.koyotapAnalytics.getConsent(), 'denied');
    assert.equal(window.koyotapAnalytics.openConsentDialog(), false);
    assert.equal(store.get('koyotap-analytics-consent'), preference === 'denied' ? 'denied' : undefined);
    for (const name of ['_ga=', '_ga_KT8SK6QRFJ=', '_ga_RFENDKLRYS=']) {
      assert(cookies.some(cookie => cookie.startsWith(name) && cookie.includes('Max-Age=0')));
    }
  });
}
test('storage exceptions do not enable tracking or prevent API availability', () => {
  const { window } = run({ storageDenied: true });
  assert.equal(window.koyotapAnalytics.getConsent(), 'denied');
  assert.equal(window.dataLayer.length, 0);
});
test('corporate pages and www host are also paused and expire parent-domain cookies', () => {
  const { window, cookies } = run({ play: false, host: 'www.koyotap.com', preference: 'granted' });
  assert.equal(window.koyotapAnalytics.isPlayPage, false);
  assert.equal(window.koyotapAnalytics.enabled, false);
  assert(cookies.some(cookie => cookie.endsWith('; domain=koyotap.com')));
});
test('loopback is not the reason production privacy checks pass', () => {
  assert.equal(run().window.koyotapAnalytics.isLoopback, false);
  assert.equal(run({host:'127.0.0.1'}).window.koyotapAnalytics.isLoopback, true);
});
