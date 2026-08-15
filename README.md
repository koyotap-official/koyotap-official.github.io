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

1. In Google Analytics, create a **new property** for this site (do not reuse the
   `G-RFENDKLRYS` property — that one measures the `/puzzle/` landing-page experiment,
   and mixing the two means every LP figure needs a path filter first).
2. Add a **Web** data stream with the URL `https://koyotap-official.github.io`.
3. Copy the measurement ID (`G-` followed by ten characters).
4. Set `KOYOTAP_GA4_MEASUREMENT_ID` at the top of `assets/analytics.js`, then push.
5. Check GA4 → Reports → Realtime while loading the site once.

The tag runs cookieless (`client_storage: "none"`), so no consent banner is needed and
the privacy policy already discloses it. The trade-off is that returning visitors cannot
be recognised — read "users" in the reports as "visits". Google Signals and ad
personalisation are disabled.

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
