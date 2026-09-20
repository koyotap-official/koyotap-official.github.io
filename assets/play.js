/* KoyoTap /play/ interactions.
 *
 * The game itself owns the iframe.  This file only handles the public wrapper:
 * it keeps the game lazy, validates lifecycle messages, and sends the small
 * funnel events declared in the site documentation.
 */
(function () {
  "use strict";

  var ALLOWED_GAMES = {
    "glowline-pipes": true,
    "block-crush": true,
    "cube-merge-shot": true
  };
  var EVENT_NAMES = {
    game_select: true,
    play_click: true,
    game_ready: true,
    game_start: true,
    game_end: true,
    game_load_error: true
  };
  var NUMBER_FIELDS = [
    "position",
    "attempt",
    "elapsed_ms",
    "duration_ms",
    "score",
    "round",
    "level"
  ];

  function safeGameId(value) {
    return typeof value === "string" && ALLOWED_GAMES[value] ? value : "";
  }

  function safeNumber(value, min, max) {
    var number = Number(value);
    if (!isFinite(number)) return null;
    number = Math.round(number);
    if (number < min) number = min;
    if (number > max) number = max;
    return number;
  }

  function sendEvent(name, gameId, extra) {
    if (!EVENT_NAMES[name]) return;
    gameId = safeGameId(gameId);
    if (!gameId) return;

    var payload = { game_id: gameId };
    extra = extra && typeof extra === "object" ? extra : {};
    for (var i = 0; i < NUMBER_FIELDS.length; i++) {
      var field = NUMBER_FIELDS[i];
      if (!(field in extra)) continue;
      var value = safeNumber(extra[field], 0, 86400000);
      if (value !== null) payload[field] = value;
    }

    if (typeof window.koyotapTrack === "function") {
      window.koyotapTrack(name, payload);
    } else if (typeof window.gtag === "function") {
      window.gtag("event", name, payload);
    }
  }

  function initGallery() {
    var links = document.querySelectorAll("[data-game-link]");
    for (var i = 0; i < links.length; i++) {
      (function (link) {
        link.addEventListener("click", function () {
          sendEvent("game_select", link.getAttribute("data-game-id"), {
            position: link.getAttribute("data-game-position")
          });
        });
      })(links[i]);
    }
  }

  function initGamePage() {
    var gameId = safeGameId(
      document.documentElement.getAttribute("data-game-id") || document.body.getAttribute("data-game-id")
    );
    if (!gameId) return;

    var poster = document.querySelector("[data-game-poster]");
    var startButton = document.querySelector("[data-game-start]");
    var retryButton = document.querySelector("[data-game-retry]");
    var frameWrap = document.querySelector("[data-game-frame-wrap]");
    var frameShell = document.querySelector("[data-game-frame-shell]");
    var frame = document.querySelector("[data-game-frame]");
    var status = document.querySelector("[data-game-status]");
    var fullscreenButton = document.querySelector("[data-game-fullscreen]");
    if (!poster || !startButton || !retryButton || !frameWrap || !frameShell || !frame || !status) return;

    var attempt = 0;
    var gameStarted = false;
    var startedAt = 0;
    var ready = false;
    var readyEventSent = false;
    var firstActionSent = false;
    var loadErrorSent = false;
    var loadTimer = 0;

    function setStatus(message, visible) {
      status.textContent = message || "";
      status.hidden = !visible;
    }

    function clearLoadTimer() {
      if (!loadTimer) return;
      window.clearTimeout(loadTimer);
      loadTimer = 0;
    }

    function elapsed() {
      return startedAt ? Math.max(0, Date.now() - startedAt) : 0;
    }

    function reportLoadError() {
      if (loadErrorSent) return;
      loadErrorSent = true;
      sendEvent("game_load_error", gameId, {
        attempt: attempt,
        elapsed_ms: elapsed()
      });
    }

    function showError() {
      clearLoadTimer();
      // A late iframe error after the game announced ready must not interrupt
      // a running session. Keep the event for diagnostics, but leave the game
      // visible and playable.
      if (ready) {
        reportLoadError();
        return;
      }
      ready = false;
      setStatus(
        document.documentElement.getAttribute("data-lang") === "en"
          ? "The game could not be loaded. Try again."
          : "ゲームを読み込めませんでした。もう一度お試しください。",
        true
      );
      retryButton.hidden = false;
      reportLoadError();
    }

    function resetFrame() {
      clearLoadTimer();
      // Replacing the node makes messages from a timed-out/old attempt fail
      // the source allowlist check below.
      var oldFrame = frame;
      var nextFrame = oldFrame.cloneNode(false);
      nextFrame.removeAttribute("src");
      oldFrame.parentNode.replaceChild(nextFrame, oldFrame);
      frame = nextFrame;
      frame.addEventListener("error", showError);
      gameStarted = false;
      frameWrap.hidden = true;
      poster.hidden = false;
      startButton.hidden = false;
      retryButton.hidden = true;
      ready = false;
      readyEventSent = false;
      firstActionSent = false;
      loadErrorSent = false;
      setStatus("", false);
    }

    function startGame() {
      if (gameStarted) return;
      gameStarted = true;
      attempt += 1;
      startedAt = Date.now();
      ready = false;
      readyEventSent = false;
      firstActionSent = false;
      loadErrorSent = false;
      poster.hidden = true;
      frameWrap.hidden = false;
      startButton.hidden = true;
      retryButton.hidden = true;
      setStatus(
        document.documentElement.getAttribute("data-lang") === "en"
          ? "Loading game..."
          : "ゲームを読み込んでいます…",
        true
      );
      sendEvent("play_click", gameId, {
        attempt: attempt
      });
      frame.src = gameId === "glowline-pipes" ? "./game/?standalone=1" : "./game/";
      if (frame.focus) frame.focus();
      if (frameWrap.scrollIntoView) {
        window.setTimeout(function () {
          frameWrap.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 20);
      }
      clearLoadTimer();
      loadTimer = window.setTimeout(showError, 15000);
    }

    startButton.addEventListener("click", function () {
      var analytics = window.koyotapAnalytics;
      if (analytics && typeof analytics.getConsent === "function" && analytics.getConsent() === "" && typeof analytics.openConsentDialog === "function") {
        if (analytics.openConsentDialog(startGame)) return;
        // Older browsers without native modal dialogs can still play in the
        // existing denied Consent Mode; no permission is stored or granted.
        startGame();
        return;
      }
      startGame();
    });
    retryButton.addEventListener("click", function () {
      resetFrame();
      startGame();
    });

    frame.addEventListener("error", showError);

    if (fullscreenButton) {
      fullscreenButton.addEventListener("click", function () {
        if (document.fullscreenElement) {
          var exitResult = document.exitFullscreen ? document.exitFullscreen() : null;
          if (exitResult && typeof exitResult.catch === "function") exitResult.catch(function () {});
          return;
        }
        var target = frameShell;
        if (target.requestFullscreen) {
          var result = target.requestFullscreen();
          if (result && typeof result.catch === "function") result.catch(function () {});
        } else if (frame.requestFullscreen) {
          var frameResult = frame.requestFullscreen();
          if (frameResult && typeof frameResult.catch === "function") frameResult.catch(function () {});
        } else {
          // iOS Safari does not expose iframe fullscreen. A fixed viewport
          // fallback still gives the game the full screen area on touch.
          var fallbackActive = frameShell.classList.toggle("play-frame-shell--fallback-fullscreen");
          frameWrap.classList.toggle("play-frame-wrap--fallback-fullscreen", fallbackActive);
          document.body.classList.toggle("play-fallback-fullscreen", fallbackActive);
        }
      });
    }

    window.addEventListener("message", function (event) {
      if (event.origin !== window.location.origin) return;
      if (!frame.contentWindow || event.source !== frame.contentWindow) return;

      var data = event.data;
      if (!data || typeof data !== "object" || Array.isArray(data)) return;
      if (data.type !== "koyotap:game" || data.gameId !== gameId) return;
      if (typeof data.event !== "string") return;

      if (data.event === "ready") {
        if (readyEventSent) return;
        readyEventSent = true;
        ready = true;
        clearLoadTimer();
        retryButton.hidden = true;
        setStatus(
          document.documentElement.getAttribute("data-lang") === "en"
            ? "Ready"
            : "準備完了",
          false
        );
        sendEvent("game_ready", gameId, {
          attempt: attempt,
          elapsed_ms: elapsed()
        });
        return;
      }

      if (data.event === "first_action") {
        if (!ready || firstActionSent) return;
        firstActionSent = true;
        sendEvent("game_start", gameId, {
          attempt: attempt,
          elapsed_ms: elapsed()
        });
        return;
      }

      if (data.event === "round_end") {
        if (!ready) return;
        sendEvent("game_end", gameId, {
          attempt: attempt,
          elapsed_ms: elapsed(),
          duration_ms: data.duration_ms,
          score: data.score,
          round: data.round,
          level: data.level
        });
        return;
      }

      if (data.event === "error") {
        showError();
      }
    });
  }

  if (document.documentElement.getAttribute("data-game-id") || document.body.getAttribute("data-game-id")) initGamePage();
  else initGallery();
})();
