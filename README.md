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
