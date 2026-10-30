# KoyoTap Official Site

Source of the KoyoTap official website, published by GitHub Pages from `main` at the repository root:

`https://koyotap.com/`

The site is bilingual (Japanese / English). The root page covers the studio, while `/play/`
is the public games area.

## Files

| Path | Purpose |
|---|---|
| `index.html` | Home page — business overview, development process, business information, contact |
| `news/index.html` | News archive with dated press release listings |
| `news/20260929-company-established.html` | Dedicated article page for the company establishment announcement |
| `play/index.html` | Public games area with Block Crush and Cube Merge Shot cards |
| `play/block-crush/index.html`, `play/cube-merge-shot/index.html` | Bilingual game wrappers; each lazy-loads a same-origin `./game/` build |
| `privacy-policy.html` | Privacy policy (Japanese is the governing text; English is a reference translation) |
| `glowline-pipes-privacy-policy.html` | Per-app bilingual privacy policy for GlowLine Pipes on Android (English governs) |
| `404.html` | Custom not-found page served by GitHub Pages |
| `services.html`, `team.html` | Legacy URLs kept alive; they redirect into `index.html` sections |
| `assets/site.css` | Shared styles (light / dark aware, brand palette) |
| `assets/site.js` | JA / EN language switch and campaign parameter preservation |
| `assets/play.js` | Games gallery, lazy iframe player, lifecycle message validation, and funnel events |
| `assets/analytics.js` | Google Analytics 4 with denied Consent Mode and optional `/play/` analytics choice |
| `assets/koyotap-mark.svg` | Square brand mark — favicon and header lockup |
| `assets/koyotap-logo.svg` | Horizontal brand lockup |
| `assets/koyotap-og.png` | Open Graph / social preview image |
| `assets/apple-touch-icon-v2.png` | Opaque 180 × 180 home-screen icon, using the original four-tile brand mark at its natural aspect ratio |
| `assets/apple-touch-icon-source.svg` | Editable square icon source; its nested mark uses `preserveAspectRatio` |
| `apple-touch-icon.png` | Matching root fallback for home-screen icon discovery |
| `assets/home/` | Small 2× game-icon renditions for the home page |
| `assets/play/` | Source gameplay screenshots used as public card and wrapper posters |
| `app-ads.txt` | AdMob authorized-seller declaration — **required, do not remove** |
| `robots.txt`, `sitemap.xml` | Crawler directives |
| `.nojekyll` | Disables Jekyll processing |
| `ArrowNext/privacy-policy.html` | Per-app privacy policy referenced by the Arrow Next store listing |
| `puzzle/` | Standalone pre-registration landing page with its own GA4 tag (not part of the main site) |

## Public URLs

- Home / developer website: `https://koyotap.com/`
- News archive: `https://koyotap.com/news/`
- Company establishment announcement: `https://koyotap.com/news/20260929-company-established.html`
- Privacy policy: `https://koyotap.com/privacy-policy.html`
- GlowLine Pipes privacy policy: `https://koyotap.com/glowline-pipes-privacy-policy.html`
- AdMob `app-ads.txt`: `https://koyotap.com/app-ads.txt`
- Arrow Next privacy policy: `https://koyotap.com/ArrowNext/privacy-policy.html`
- Games: `https://koyotap.com/play/`

## Store and official social links

The home page and `/play/` link to the published developer catalog and official accounts:

- Google Play: `https://play.google.com/store/apps/developer?id=KoyoTap`
- X: `https://x.com/KoyoTap`
- YouTube: `https://www.youtube.com/@KoyoTap`
- Instagram: `https://www.instagram.com/koyotap_official/`

Keep these destinations consistent with the home page's Organization `sameAs` metadata.

Each browser game also has a direct Google Play link on its directory card and game page;
the home page's game cards link to the same individual listings:

- GlowLine Pipes: `https://play.google.com/store/apps/details?id=com.koyotap.glowlinepipes`
- Block Crush: `https://play.google.com/store/apps/details?id=com.koyotap.blockcrush`
- Cube Merge Shot: `https://play.google.com/store/apps/details?id=com.koyotap.cubemergeshot`

The home page and `/play/` also list the store-only apps Coin Tray Merge
(`com.koyotap.cointraymerge`) and 雨やどり喫茶 / Rain Shelter Café
(`com.koyotap.rainsheltercafe`). These cards use the official app artwork and link directly
to Google Play. They do not have browser wrappers, browser-play controls, or browser-game
selection attributes. On iOS their unverified store links are hidden; their Google Play
availability labels remain visible so visitors can still discover the titles.

Keep store links separate from browser-game links so that opening a store listing does
not trigger the browser game's selection or start flow.

`assets/store-links.js` detects Android, iPhone/iPad (including iPad desktop browsing),
and other devices before first paint. Android and desktop keep the Google Play links.
iOS uses the game's public App Store URL from `iosStoreUrls`; if it is `null`, the store
action is hidden and browser play remains available. Google Play developer links are
also hidden on iOS. Nothing automatically navigates away from the website.

As of 2026-10-29, public App Store pages for these three titles could not be verified;
all three iOS destinations are intentionally `null`. Set each URL only after its public
listing can be opened and matched to the correct KoyoTap app. Then update the script's
version query on all five pages so returning visitors receive the new destination.

Check platform routing with `node --test tests/store-links.test.cjs`.

For the Google Play Console developer website field, enter the site root URL, not an individual page.

## app-ads.txt

```text
google.com, pub-8203691800220653, DIRECT, f08c47fec0942fa0
```

## Analytics

Optional Web analytics and home/catalog AdSense loading are paused as of
2026-10-26. `assets/analytics.js` keeps wrapper APIs inert and does not load a
Google tag, queue events, or reuse an old grant. The separate `/puzzle/` tag is
also paused. See [scope and validation](docs/legal-web-pause.md).

Resuming requires reviewed age, consent, data handling, and notice changes;
inserting a measurement ID is insufficient. The dimensions below describe the
historical, inactive event schema rather than current collection.

### Custom dimensions (required to see event breakdowns)

Event counts appear on their own, but the *parameters* stay invisible in reports until
they are registered. Without this, `contact_click` shows a number with no way to tell
which link was used. In **Admin → Data display → Custom definitions →
Create custom dimension**, with scope **Event**, register these parameter names:

| Parameter | Answers |
|---|---|
| `placement` | Where the contact address was clicked from |
| `section` | How far down the page a visitor read |
| `language` | Whether JA or EN was being read |
| `game_id` | Which public game was selected or played |

Registration applies only to data collected afterwards — it does not backfill — so do it
at the same time as setting the measurement ID.

Event counts and page paths are available in the GA4 Events and Pages and screens reports.
Register `game_id` as an event-scoped custom dimension in the GA4 property if title-level
breakdowns are needed; this repository cannot confirm whether that remote registration has
been completed.

### Where to read the numbers

| Question | Report |
|---|---|
| Is measurement working at all? | **Reports → Realtime** (last 30 minutes) |
| Where did visitors come from? | Reports → Acquisition → **Traffic acquisition** |
| Which countries and languages? | Reports → User → **Demographics** → Demographic details |
| Which devices and browsers? | Reports → User → **Tech** → Tech details |
| Did anyone open the contact address? | Reports → Engagement → **Events** → `contact_click` |
| JA or EN, and how far they read | the same Events list — `language_switch`, `section_view` |
| Which pages were viewed? | Reports → Engagement → **Pages and screens** |

Everything except Realtime lags by 24–48 hours, so an empty report on day one is normal.
Judge the initial smoke test from Realtime alone. At low traffic GA4 also applies data
thresholding, which can hide some breakdowns until there are more visits.

GA4 renames screens from time to time; if a label differs, match on the hierarchy
(under Admin, or under Reports) rather than the exact wording.

Consent Mode declares `analytics_storage: "denied"` before the tag loads. Ads remain denied
in every state. On `/play/`, an explicit allow may let Google Analytics store its `_ga`
cookies; the footer's `Analytics settings` control can revoke the choice and the wrapper
removes this property's `_ga` cookies where the browser permits. The preference itself is
stored in localStorage. Do not switch this implementation to `client_storage: "none"`:
that is a Universal Analytics parameter and does not prevent GA4 cookies.

If that code is ever touched, re-check it on the live site rather than trusting the
config: load the page with no cookies present and confirm `document.cookie` stays empty
while a `page_view` still reaches `/g/collect` (it should carry `gcs=G100`).

Reports describe the opted-in portion of `/play/` visits and should not be read as a
complete visitor count. Google Signals and ad personalisation are disabled. A local
preview on `localhost`, `127.0.0.1`, or `[::1]` keeps dataLayer commands for QA assertions
but does not load the Google tag or send collection requests.

Note that GitHub Pages serves these files with `max-age=600`, so an edit to
`assets/analytics.js` can take up to ten minutes to reach a returning visitor.

Events sent on top of GA4's built-in `page_view` and `scroll`:

| Event | Parameters | Meaning |
|---|---|---|
| `language_switch` | `language` | A visitor switched to JA or EN |
| `contact_click` | `placement`, `language` | A visitor opened the contact email address, and from where |
| `section_view` | `section` | A visitor reached `business` / `how` / `info` / `contact` |
| `game_select` | `game_id`, `position` | A visitor selected a game card from `/play/` |
| `play_click` | `game_id`, `attempt` | A visitor pressed Play or Try again |
| `game_ready` | `game_id`, `attempt`, `elapsed_ms` | The embedded game announced it is ready |
| `game_start` | `game_id`, `attempt`, `elapsed_ms` | The first successful action in an iframe lifetime |
| `game_end` | `game_id`, `attempt`, `elapsed_ms`, optional numeric score/round/level | The embedded game announced a round end |
| `game_load_error` | `game_id`, `attempt`, `elapsed_ms` | The wrapper or game reported a load error |

`contact_click` is the one worth watching — it is the closest signal to inbound interest
that a static site can give you.

What this cannot tell you: the name or company of a visitor. Analytics gives country,
referrer, device, and behaviour only.

### Game wrapper integration

Copy the production build into the matching wrapper directory as `game/` after it has
passed its own release checks. The copied `game/index.html` should include
`<meta name="robots" content="noindex, nofollow">` so the embedded HTML is not a public
landing page. The game must not load `assets/analytics.js` or initialize GA itself.

Lifecycle messages are accepted only from the current same-origin iframe window and must
match the wrapper's game ID:

```js
parent.postMessage({
  type: "koyotap:game",
  gameId: "block-crush",
  event: "ready" // ready | first_action | round_end | error
}, window.location.origin);
```

`round_end` may include numeric `score`, `round`, `level`, or `duration_ms`; the wrapper
clamps and forwards only those numeric fields. Retry creates a fresh iframe and accepts
`game_start` once for that iframe lifetime.

## Editing

Static HTML and CSS with no build step — edit and push to `main`, and GitHub Pages redeploys.

Both languages live in the same markup. Each translated element carries `data-l="ja"` or
`data-l="en"` (plus a matching `lang` attribute); CSS hides whichever does not match
`<html data-lang>`. When adding copy, add both languages, or the text disappears in one of them.

The home page puts browser games before news, with compact mobile typography and game cards.
Game icons use a square display box with `object-fit: contain`; other images retain their
natural aspect ratio. The wide social-preview image must never be reused as a touch icon.
All corporate, news, gallery, and game-wrapper pages explicitly select the square 180 × 180
touch icon. An existing iOS home-screen shortcut may retain its cached artwork; if it does,
remove that shortcut and add the site to the home screen again.

Page titles and meta descriptions are switched from `data-title-*` / `data-desc-*`
attributes on the `<html>` element.

## Local preview

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`.
