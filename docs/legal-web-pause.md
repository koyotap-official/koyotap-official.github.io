# Optional Web measurement pause

The 2026-10-26 change pauses optional Google Analytics on corporate pages,
the three self-hosted game wrappers, the games catalog, and the separate
pre-registration page. It removes the AdSense script from the home page and
catalog, and removes the Poki script from the self-hosted Glowline game HTML.
No game bundle, save format, purchase entitlement, or mobile app is changed.

The old grant does not authorize collection in this build. The wrapper API
remains available, returns denied, and does not open the old consent dialog.
Events are neither queued nor forwarded. Accessible cookies for the two known
GA properties are expired. This does not remove HttpOnly cookies, historical
provider data, or stop a script already running in an old browser tab. New
script URL versions help new visits load this change after deployment.

Resuming requires a reviewed audience and consent design, real sending and
retention settings, notices and rights handling. Adding a measurement ID alone
does not resume tracking. The original analytics code remains in Git history.

Third-party component licenses accompany each self-hosted game. Outfit's OFL
and copyright notice accompany the embedded Block font subset. This is not a
clearance of all game artwork, audio, patents, trademarks, or native packages.

## Validation

`node --test tests/privacy-pause.test.cjs` runs six small isolated script checks,
including production host, old grant, denial, blocked storage and cookie cleanup.
This is not a game build or a full browser/network regression suite.

In-app-browser inspection confirmed wrapper launch for all three games and
level entry in Glow without the Poki script. The browser selected Canvas2D;
Glow's scene was white in both the unchanged control and the candidate, with
the same unsupported-filter warning. Full graphical gameplay is therefore not
claimed. Block and Cube boards rendered. No mobile ad or purchase QA was run.
