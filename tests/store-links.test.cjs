const { test } = require('node:test');
const assert = require('node:assert/strict');
const { detectPlatform, updateStoreLinks } = require('../assets/store-links.js');

const devices = [
  ['iPhone', { userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X)', platform: 'iPhone', maxTouchPoints: 5 }, 'ios'],
  ['iPad', { userAgent: 'Mozilla/5.0 (iPad; CPU OS 18_0 like Mac OS X)', platform: 'iPad', maxTouchPoints: 5 }, 'ios'],
  ['iPad with desktop Safari', { userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) Version/18.0 Safari/605.1.15', platform: 'MacIntel', maxTouchPoints: 5 }, 'ios'],
  ['Android phone', { userAgent: 'Mozilla/5.0 (Linux; Android 15; Pixel 9) Chrome/130.0 Mobile Safari/537.36', platform: 'Linux armv8l', maxTouchPoints: 5 }, 'android'],
  ['Android client hint', { userAgent: '', userAgentData: { platform: 'Android' } }, 'android'],
  ['Mac', { userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15)', platform: 'MacIntel', maxTouchPoints: 0 }, 'other'],
  ['Windows touch PC', { userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', platform: 'Win32', maxTouchPoints: 10 }, 'other'],
  ['Missing hints', {}, 'other']
];
for (const [name, nav, expected] of devices) {
  test(name, () => assert.equal(detectPlatform(nav), expected));
}

function fixture(parentClass = 'game-card-actions') {
  const english = { textContent: 'Play on Google Play' };
  const parent = { hidden: false, classList: { contains: name => name === parentClass } };
  const link = {
    hidden: false, parentElement: parent,
    attrs: { href: 'https://play.google.com/store/apps/details?id=com.koyotap.blockcrush', 'data-game-store': 'block-crush', title: 'Google Play' },
    getAttribute(name) { return this.attrs[name]; },
    setAttribute(name, value) { this.attrs[name] = value; },
    querySelector() { return english; }
  };
  return { link, parent, english, doc: { querySelectorAll: () => [link] } };
}

test('iOS uses a verified App Store URL and matching English label', () => {
  const f = fixture();
  const url = 'https://apps.apple.com/app/id123456789';
  updateStoreLinks(f.doc, 'ios', { 'block-crush': url });
  assert.equal(f.link.attrs.href, url);
  assert.equal(f.link.attrs.title, 'App Store');
  assert.equal(f.english.textContent, 'Play on the App Store');
  assert.equal(f.link.hidden, false);
});

for (const parentClass of ['game-card-actions', 'play-store-actions', 'actions']) {
  test('iOS without a public listing hides only the unavailable action: ' + parentClass, () => {
    const f = fixture(parentClass);
    updateStoreLinks(f.doc, 'ios', { 'block-crush': null });
    assert.equal(f.link.hidden, true);
    assert.equal(f.parent.hidden, parentClass !== 'actions');
  });
}

for (const platform of ['android', 'other']) {
  test(platform + ' retains the existing Google Play destination', () => {
    const f = fixture();
    const before = { ...f.link.attrs };
    updateStoreLinks(f.doc, platform, { 'block-crush': 'https://apps.apple.com/app/id123456789' });
    assert.deepEqual(f.link.attrs, before);
    assert.equal(f.link.hidden, false);
  });
}
