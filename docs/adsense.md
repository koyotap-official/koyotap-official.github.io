# Google AdSense setup

## Current integration

- Publisher: `ca-pub-8203691800220653`
- Routes with the asynchronous AdSense base script: `https://koyotap.com/` and `https://koyotap.com/play/`
- `ads.txt` and `app-ads.txt` already declare this publisher as `DIRECT`; keep the IDs consistent.
- No ad unit slot ID or custom ad placement is configured. The base script supports Auto ads once enabled in AdSense.

## Before ads can appear

The account must approve `koyotap.com` as a site, and Auto ads must be enabled for the site in AdSense. Until then, loading the script does not mean an ad will appear. Google may also have no ad to fill a particular visit or placement.

## Verification

1. Open the page source for `/` and `/play/`; each should contain one async `adsbygoogle.js` script with this publisher ID.
2. In browser developer tools, confirm the request to `pagead2.googlesyndication.com/pagead/js/adsbygoogle.js` succeeds. This verifies the script loaded, not that an ad was served.
3. Confirm site approval and Auto ads status in AdSense. To verify an ad actually displayed, inspect the page after approval and Auto ads activation and confirm a real Google ad is rendered; a missing ad or an empty slot can simply mean no fill.

## Rollback

Remove the AdSense script tag from the heads of `index.html` and `play/index.html`. After it is no longer configured, remove the corresponding AdSense disclosure from both language versions in `privacy-policy.html`. Do not add ad scripts to game iframes, privacy/legal pages, or other routes as part of this trial.
