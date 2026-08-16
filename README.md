# KoyoTap Official Site

Source of the KoyoTap official website, published by GitHub Pages from `main` at the repository root:

`https://koyotap-official.github.io/`

The site is a single bilingual page (Japanese / English) covering the business overview,
the development process, business information, and contact details.

## Files

| Path | Purpose |
|---|---|
| `index.html` | Home page — business overview, development process, business information, contact |
| `privacy-policy.html` | Privacy policy (Japanese is the governing text; English is a reference translation) |
| `404.html` | Custom not-found page served by GitHub Pages |
| `services.html`, `team.html` | Legacy URLs kept alive; they redirect into `index.html` sections |
| `assets/site.css` | Shared styles (light / dark aware, brand palette) |
| `assets/site.js` | JA / EN language switch |
| `assets/analytics.js` | Google Analytics 4, cookieless — **inactive until a measurement ID is set** |
| `assets/koyotap-mark.svg` | Square brand mark — favicon and header lockup |
| `assets/koyotap-logo.svg` | Horizontal brand lockup |
| `assets/koyotap-og.png` | Open Graph / social preview image |
| `app-ads.txt` | AdMob authorized-seller declaration — **required, do not remove** |
| `robots.txt`, `sitemap.xml` | Crawler directives |
| `.nojekyll` | Disables Jekyll processing |
| `ArrowNext/privacy-policy.html` | Per-app privacy policy referenced by the Arrow Next store listing |
| `puzzle/` | Standalone pre-registration landing page with its own GA4 tag (not part of the main site) |

## Public URLs

- Home / developer website: `https://koyotap-official.github.io/`
- Privacy policy: `https://koyotap-official.github.io/privacy-policy.html`
- AdMob `app-ads.txt`: `https://koyotap-official.github.io/app-ads.txt`
- Arrow Next privacy policy: `https://koyotap-official.github.io/ArrowNext/privacy-policy.html`

For the Google Play Console developer website field, enter the site root URL, not an individual page.

## app-ads.txt

```text
google.com, pub-8203691800220653, DIRECT, f08c47fec0942fa0
```

## Analytics

Access analytics live in `assets/analytics.js` and are **off until a measurement ID is
filled in**. With the constant empty, no script is loaded and no request leaves the page.

To turn it on:

1. In Google Analytics, open **Admin** (the gear, bottom left) and choose
   **Create property** in the property column. Set the timezone to Japan and the
   currency to JPY. Do **not** reuse the `G-RFENDKLRYS` property — that one measures the
   `/puzzle/` landing-page experiment, and mixing the two means every LP figure needs a
   path filter first.
2. When asked for a platform, pick **Web**, with the URL
   `https://koyotap-official.github.io`, and create the stream.
3. The **Web stream details** panel that opens shows the measurement ID (`G-` followed by
   ten characters). To find it again later: **Admin → Data collection and modification →
   Data streams →** the stream. Ignore the tag installation instructions it offers; the
   tag is already implemented here.
4. Set `KOYOTAP_GA4_MEASUREMENT_ID` at the top of `assets/analytics.js`, then push.
5. Register the custom dimensions below, then load the site once and watch
   **Reports → Realtime**.

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

Registration applies only to data collected afterwards — it does not backfill — so do it
at the same time as setting the measurement ID.

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

The tag runs cookieless, so no consent banner is needed, and the privacy policy discloses
exactly that. What enforces it is **Consent Mode** — `analytics_storage: "denied"`,
declared before the tag loads. Do not switch this to `client_storage: "none"`: that is a
Universal Analytics parameter, GA4 ignores it and writes `_ga` cookies anyway, which
would leave the published privacy policy stating something untrue.

If that code is ever touched, re-check it on the live site rather than trusting the
config: load the page with no cookies present and confirm `document.cookie` stays empty
while a `page_view` still reaches `/g/collect` (it should carry `gcs=G100`).

The trade-off is that returning visitors cannot be recognised — read "users" in the
reports as "visits". Google Signals and ad personalisation are disabled.

Note that GitHub Pages serves these files with `max-age=600`, so an edit to
`assets/analytics.js` can take up to ten minutes to reach a returning visitor.

Events sent on top of GA4's built-in `page_view` and `scroll`:

| Event | Parameters | Meaning |
|---|---|---|
| `language_switch` | `language` | A visitor switched to JA or EN |
| `contact_click` | `placement`, `language` | A visitor opened the contact email address, and from where |
| `section_view` | `section` | A visitor reached `business` / `how` / `info` / `contact` |

`contact_click` is the one worth watching — it is the closest signal to inbound interest
that a static site can give you.

What this cannot tell you: the name or company of a visitor. Analytics gives country,
referrer, device, and behaviour only.

## Editing

Static HTML and CSS with no build step — edit and push to `main`, and GitHub Pages redeploys.

Both languages live in the same markup. Each translated element carries `data-l="ja"` or
`data-l="en"` (plus a matching `lang` attribute); CSS hides whichever does not match
`<html data-lang>`. When adding copy, add both languages, or the text disappears in one of them.

Page titles and meta descriptions are switched from `data-title-*` / `data-desc-*`
attributes on the `<html>` element.

## Local preview

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`.
