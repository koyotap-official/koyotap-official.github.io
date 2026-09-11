# KoyoTap Play notes

The public game area is `/play/`. It keeps campaign parameters across marked
internal links (`utm_source`, `utm_medium`, `utm_campaign`, and `utm_content`).
The wrapper sends the events below through the existing `G-KT8SK6QRFJ` tag. The
`/puzzle/` page remains on its separate measurement ID.

| Event | Payload | Definition |
|---|---|---|
| `game_select` | `game_id`, `position` | A game card was selected on `/play/` |
| `play_click` | `game_id`, `attempt` | Play or Try again was pressed |
| `game_ready` | `game_id`, `attempt`, `elapsed_ms` | Current iframe announced `ready` |
| `game_start` | `game_id`, `attempt`, `elapsed_ms` | First `first_action` for the current iframe |
| `game_end` | `game_id`, `attempt`, `elapsed_ms`, numeric score/round/level when supplied | Current iframe announced `round_end` |
| `game_load_error` | `game_id`, `attempt`, `elapsed_ms` | Wrapper or game reported an error |

Values from the game are accepted only when the message has `type:
"koyotap:game"`, the expected `gameId`, the current iframe as `event.source`,
and the current same-origin `event.origin`. Numeric values are rounded and
clamped before they are forwarded. A retry replaces the iframe, so a stale
iframe cannot emit a new `game_start`.

## Consent and coverage

Play pages initialize `analytics_storage: "denied"`. Visitors can play without
choosing analytics. An explicit allow persists in localStorage and grants
analytics storage before configuration on later play pages. Allowing on the
current page sends one consented `page_view` because the initial denied hit may
not be reported. Ads remain denied. Counts describe the opted-in portion of
play visits and are not a complete visitor total.

On `localhost`, `127.0.0.1`, and `[::1]`, the tag script is not loaded and no
collection request is sent. Commands remain in `dataLayer` for QA assertions.

## Tagged acquisition examples

Use a distinct clickable path when a source needs separate attribution:

```text
https://koyotap-official.github.io/play/?utm_source=youtube&utm_medium=profile&utm_campaign=play_202609&utm_content=profile
https://koyotap-official.github.io/play/?utm_source=tiktok&utm_medium=profile&utm_campaign=play_202609&utm_content=profile
```

YouTube Shorts descriptions and comments are nonclickable, and a
TikTok profile link depends on account availability. A profile URL tagged with
`utm_content=profile` identifies traffic from that profile link; it cannot
uniquely identify each video without a distinct clickable destination.

## Build provenance

The Block Crush wrapper currently contains the standalone build from
`D:/projects/koyotap-play-builds/block-crush/dist-standalone`, reviewed as
commit `041d9dd` (source base `0d0b631`). Its copied HTML is marked
`noindex, nofollow` and emits the expected `ready`, `first_action`,
`round_end`, and `error` lifecycle messages.

The Cube Merge Shot wrapper currently contains the standalone build from
`D:/projects/koyotap-play-builds/cube-merge-shot/dist-standalone`, reviewed as
commit `e2590ae126905f9bbe704ef21f0fd95fbf5e2387` (source parent
`73168279a935ba9c3658f9279b27610c9d7ef3df`). Its copied HTML is marked
`noindex, nofollow` and its title is `Cube Merge Shot`.

When either build is updated, keep its embedded HTML `noindex, nofollow`,
preserve same-origin message emission, and do not add the KoyoTap analytics tag
inside the game.

## QA

Use the local server from the repository root:

```bash
python -m http.server 8000
```

QA should use the browser's network panel to confirm there are no Google
collection requests on loopback, assert the expected `dataLayer` commands,
test an untrusted origin/source message, verify one `game_start` per iframe,
and confirm UTM parameters survive the gallery-to-wrapper link. Screenshots
should cover desktop, 390px mobile, and the compact 375px game wrapper.
