# KoyoTap H5 game advertising

## Release status

The nine public games use a shared **startup preroll** integration. Their published
JavaScript, gameplay, saves, sound, and artwork are unchanged. Live advertising is
currently disabled in `assets/h5-ads-config.js`: the H5 program approval does not
establish approval of the actual serving domain `koyotap.com`. Verify that domain in
AdSense before enabling live requests. Do not bypass that check using the former
GitHub Pages address, which redirects to the custom domain.

Existing restart and reward buttons keep their previous behavior. Midgame/restart
and rewarded ads are **not connected in these existing game bundles**. The shared API
below supports adding those placements when a game's source is next updated and
its pause, sound and reward flow can be tested together.

## Shared files

| File | Responsibility |
| --- | --- |
| `assets/h5-ads-config.js` | Publisher, allowed domains, game allowlist, live kill switch, 120-second frequency hint |
| `assets/h5-ads.js` | SDK readiness, one preroll per document, concurrency, normalized outcomes, interstitial/reward API, pause reasons |
| `assets/h5-game-loader.js` | Wait for preroll, then import the existing game entry exactly once |
| `assets/play.js` | Validate iframe messages and start the 15-second game-loading timer after the startup placement finishes |

The Google tag and API execute **inside the same iframe as the canvas**, as required
by Google. The wrapper only manages loading and fullscreen controls. `allow="autoplay"`
is already present. The own-site Glowline HTML no longer loads Poki's SDK; it retains
`?standalone=1` for the existing game's internal lifecycle. Portal builds and source
repositories are untouched. Four module entries retain their original asset paths.
Four inline modules and Color Sculptures' classic script are extracted to
`game/h5-original-entry.js` without changing their bytes. Classic scripts retain
classic execution. The before/after SHA inventory is `docs/h5-game-entries.json`;
`scripts/integrate-h5.cjs` reproduces and verifies this HTML integration.

## Add another own-site game

1. Deploy and validate its self-contained web build at `/play/<slug>/game/`.
2. Add the slug to this configuration and the wrapper's `ALLOWED_GAMES`.
3. Set these attributes on the game document's `<html>`:

   ```html
   <html data-game-id="your-game" data-game-entry="./assets/your-built-entry.js">
   ```

4. Replace the entry's direct module script with these three tags; keep the game's
   CSS and other assets. There must be no competing script importing the entry.

   ```html
   <script src="../../../assets/h5-ads-config.js?v=h5-20261109-1"></script>
   <script src="../../../assets/h5-ads.js?v=h5-20261109-1"></script>
   <script type="module" src="../../../assets/h5-game-loader.js?v=h5-20261109-1"></script>
   ```

5. Use the existing game wrapper's lazy Play flow and current `assets/play.js`.
   Do not load the game until the player's Play/consent choice. Do not add Google
   tags to Poki, GamePix, GameDistribution, or native AdMob builds.

## Future restart and rewarded placements

Use the shared API from the game's own-site platform adapter, never directly from
game rules. A pause hook must **synchronously** stop input, simulation/timers and all
sound. Resume must restore the player's previous mute state, not force sound on.
Do not stop at setting a variable that takes effect in a later animation frame.

```js
const ads = window.KoyoTapH5Ads;
const gate = ads.createPauseGate({
  pause() { /* stop input, ticker, timers and sound synchronously */ },
  resume() { /* restore input, ticker, timers and previous sound state */ }
});

// Player clicks Retry at a natural break. Protect this whole flow against taps.
await ads.interstitial({ name: "retry", type: "start", pause: gate.pause, resume: gate.resume });
// Start the next round once, checking gate.isPaused() before resuming its ticker.

// Called at an appropriate optional reward placement. Show localized, explicit
// reward terms in offer(), then connect the actual player's choice to accept.
const reward = await ads.rewarded({
  name: "extra-life", pause: gate.pause, resume: gate.resume,
  offer(accept, decline) { /* render “Watch ad for one extra life” + Skip */ }
});
if (reward.rewarded) { /* grant once for this game transaction */ }
```

`createPauseGate` composes the `ad` and `visibility` reasons and permits other reasons,
such as a settings menu. Finishing an ad cannot clear a hidden-tab pause. Reward
eligibility requires `adViewed`; dismissal, no fill, errors, an unclicked offer,
and fake ads never grant a persistent reward. The game must also make its inventory
transaction idempotent. Ordinary progression must remain available without rewards.

Only request ads on an actual player continuation or an explicit reward offer.
Never use a timer to request ads. Google's frequency hint is not an instruction to
show an ad every 120 seconds. `setSound()` should mirror the player's real preference.

## Testing and outcomes

```text
node --test tests/h5-ads.test.cjs
node scripts/verify-h5.cjs
node scripts/serve-h5.cjs 8846
http://127.0.0.1:8846/play/block-crush/?h5ads=test
```

Append `?h5ads=test` to a wrapper to forward Google's official fake-ad mode into
the iframe. This never enables live advertising. Loopback without that query loads
no Google advertising SDK. Unknown hosts and unlisted games also load no SDK.

Each result contains `mode`, `requested`, `shown`, `success`, `rewarded`, and `status`.
The console's bounded `[KoyoTap H5]` entries and the game HTML's `data-h5-ads-*`
attributes expose QA state. They are local diagnostics, not AdSense impressions or
revenue. `noAdPreloaded`, `frequencyCapped`, `notReady`, `timeout`, and errors are
distinct from `viewed`. Test ads cannot verify publisher/domain eligibility.

Readiness times out before submitting a placement, so a late `onReady` cannot put an
ad over an already-running game. Once submitted, the preroll uses Google's completion
callback and its documented initialization timeout. There is deliberately no local
timer that starts gameplay underneath a visible ad. While waiting, fullscreen/retry
cannot interrupt the placement; the normal load deadline resumes after it.

This static HTML/JavaScript change needs no game rebuild. Unit and SHA checks are
small local checks; no paid Azure job or new dependency is required.

## Enable live service

Confirm the actual site is approved in this publisher's AdSense account, resolve
any policy findings, and configure the required Google-certified consent messages
for the regions being served. Analytics consent is separate from advertising consent.
The integration keeps ad consent denied and requests nonpersonalized ads; that is
not a substitute for a required certified CMP. Never reuse the analytics Allow button
to grant advertising consent.

Then change the one `enabled` field to `true`, version the configuration URL, run the
checks, and deploy. Verify a normal player session separately from Google test mode.
Do not click live ads or generate repeated live requests to force inventory.
Actual availability and reporting remain Google's responsibility. To roll back,
set `enabled:false`; all nine games continue to start without advertising.

## Official references (checked 2026-11-09)

- [H5 setup and code placement](https://support.google.com/adsense/answer/9955214)
- [Game and iframe structure](https://developers.google.com/ad-placement/docs/html5-game-structure)
- [Placement callbacks and preroll](https://developers.google.com/ad-placement/apis)
- [Statuses and rewards](https://developers.google.com/ad-placement/apis/adbreak)
- [SDK readiness and timeout](https://developers.google.com/ad-placement/docs/manual-sequence)
- [Google fake-ad testing](https://developers.google.com/ad-placement/docs/test)
