/* Google H5 Ad Placement API boundary for KoyoTap-owned web builds.
 * No SDK calls belong in game rules. This file runs in the canvas document.
 */
(function (root, factory) {
  "use strict";
  if (typeof module === "object" && module.exports) module.exports = factory;
  else root.KoyoTapH5Ads = factory(root, root.KOYOTAP_H5_ADS_CONFIG || {});
})(typeof window === "object" ? window : this, function createH5Ads(win, config) {
  "use strict";
  var doc = win.document;
  var query = new URLSearchParams(win.location.search || "");
  var host = String(win.location.hostname || "").toLowerCase();
  var local = /^(localhost|127\.0\.0\.1|\[?::1\]?)$/.test(host);
  var approvedHost = (config.allowedHosts || []).indexOf(host) !== -1;
  var gameId = doc.documentElement.getAttribute("data-game-id") || "";
  var knownGame = config.games && config.games[gameId] === true;
  var mode = query.get("h5ads") === "test" && (local || approvedHost) && knownGame
    ? "test" : config.enabled === true && approvedHost && knownGame ? "live" : "off";
  var initPromise;
  var prerollPromise;
  var active = null;
  var history = [];
  var allowedStatus = /^(notReady|timeout|invalid|error|noAdPreloaded|frequencyCapped|ignored|other|dismissed|viewed)$/;

  function note(stage, status, type) {
    var entry = { gameId: gameId, mode: mode, stage: stage, type: type || "", status: status || "" };
    history.push(entry);
    if (history.length > 64) history.shift();
    doc.documentElement.setAttribute("data-h5-ads-mode", mode);
    doc.documentElement.setAttribute("data-h5-ads-state", stage);
    doc.documentElement.setAttribute("data-h5-ads-status", status || "");
    if (win.console && win.console.info) win.console.info("[KoyoTap H5]", JSON.stringify(entry));
  }

  function result(status, requested, shown, viewed) {
    return {
      mode: mode, status: status, requested: !!requested, shown: !!shown,
      success: status === "viewed", rewarded: !!viewed && status === "viewed" && mode === "live"
    };
  }

  function init() {
    if (initPromise) return initPromise;
    initPromise = new Promise(function (resolve) {
      if (mode === "off") { note("disabled", "disabled"); resolve(false); return; }
      if (!/^ca-pub-\d{16}$/.test(config.publisherId || "")) {
        note("unavailable", "invalid-publisher"); resolve(false); return;
      }
      var settled = false;
      var timer;
      function finish(ready, status) {
        if (settled) return;
        settled = true;
        win.clearTimeout(timer);
        note(ready ? "ready" : "unavailable", status);
        resolve(ready);
      }
      // Timeout only the readiness wait. Never submit an ad after this expires,
      // and never release a game underneath an ad that is already showing.
      timer = win.setTimeout(function () { finish(false, "sdk-timeout"); }, config.readyTimeoutMs || 3000);
      win.adsbygoogle = win.adsbygoogle || [];
      win.adBreak = win.adConfig = function (placement) { win.adsbygoogle.push(placement); };
      // Analytics permission in the parent is not advertising permission.
      // Keep ads denied here too; a site CMP must own any later consent update.
      win.dataLayer = win.dataLayer || [];
      function gtag() { win.dataLayer.push(arguments); }
      gtag("consent", "default", {
        analytics_storage: "denied", ad_storage: "denied",
        ad_user_data: "denied", ad_personalization: "denied"
      });
      win.adsbygoogle.requestNonPersonalizedAds = 1;
      win.adConfig({
        preloadAdBreaks: "on", sound: "off",
        onReady: function () { finish(true, "ready"); }
      });
      var script = doc.createElement("script");
      script.async = true;
      script.crossOrigin = "anonymous";
      script.id = "koyotap-h5-google-sdk";
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + config.publisherId;
      script.setAttribute("data-ad-client", config.publisherId);
      script.setAttribute("data-ad-frequency-hint", config.frequencyHint || "120s");
      if (mode === "test") script.setAttribute("data-adbreak-test", "on");
      script.onerror = function () { finish(false, "sdk-error"); };
      note("loading", "");
      doc.head.appendChild(script);
    });
    return initPromise;
  }

  async function place(options) {
    options = options || {};
    var type = options.type;
    if (!/^(preroll|start|pause|next|browse|reward)$/.test(type || "")) return result("invalid", false);
    if (type !== "preroll" && (typeof options.pause !== "function" || typeof options.resume !== "function")) {
      return result("missing-pause-hooks", false);
    }
    if (type === "reward" && typeof options.offer !== "function") return result("missing-offer", false);
    if (active) return result("busy", false);
    // Claim before awaiting readiness, so simultaneous callers cannot both pass.
    var claim = {};
    active = claim;
    try {
      if (!(await init())) return result(mode === "off" ? "disabled" : "unavailable", false);
      return await new Promise(function (resolve) {
        var closed = false;
        var paused = false;
        var shown = false;
        var viewed = false;
        var offerSent = false;
        var offerAccepted = false;
        var dismissed = false;
        function restore() {
          if (!paused) return;
          paused = false;
          try { options.resume("ad"); } catch (error) { note("hook-error", "resume-error", type); }
        }
        function done(status) {
          if (closed) return;
          closed = true;
          restore();
          note("completed", status, type);
          resolve(result(status, true, shown || status === "viewed" || status === "dismissed", viewed));
        }
        var placement = {
          type: type,
          name: String(options.name || gameId + "-" + type).replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 80),
          adBreakDone: function (info) {
            var status = info && allowedStatus.test(info.breakStatus) ? info.breakStatus : "other";
            done(status);
          }
        };
        if (type !== "preroll") {
          placement.beforeAd = function () {
            if (closed) throw new Error("Expired KoyoTap ad placement");
            paused = true;
            options.pause("ad"); // Must synchronously stop input, gameplay and sound.
            shown = true;
            note("showing", "", type);
          };
          placement.afterAd = restore;
        }
        if (type === "reward") {
          placement.beforeReward = function (showAd) {
            if (closed || offerSent) return;
            offerSent = true;
            function accept() {
              if (closed || offerAccepted) return;
              offerAccepted = true;
              try { showAd(); } catch (error) { done("error"); }
            }
            function decline() { if (!offerAccepted) done("ignored"); }
            try { options.offer(accept, decline); } catch (error) { done("error"); }
          };
          placement.adViewed = function () { if (!closed && !dismissed) viewed = true; };
          placement.adDismissed = function () { dismissed = true; viewed = false; };
        }
        note("requested", "", type);
        try { win.adBreak(placement); } catch (error) { done("error"); }
      });
    } finally {
      if (active === claim) active = null;
    }
  }

  function createPauseGate(hooks) {
    var reasons = {};
    var stopped = false;
    function sync() {
      var next = Object.keys(reasons).length > 0;
      if (next === stopped) return;
      stopped = next;
      if (next) hooks.pause(); else hooks.resume();
    }
    function pause(reason) { reasons[reason] = true; sync(); }
    function resume(reason) { delete reasons[reason]; sync(); }
    function visibility() { if (doc.hidden) pause("visibility"); else resume("visibility"); }
    doc.addEventListener("visibilitychange", visibility);
    visibility();
    return { pause: pause, resume: resume, isPaused: function () { return stopped; },
      dispose: function () { doc.removeEventListener("visibilitychange", visibility); } };
  }

  note("idle", "");
  return {
    init: init,
    preroll: function () {
      if (!prerollPromise) prerollPromise = place({ type: "preroll", name: gameId + "-preroll" });
      return prerollPromise;
    },
    interstitial: function (options) {
      var type = options && options.type || "start";
      if (!/^(start|pause|next|browse)$/.test(type)) return Promise.resolve(result("invalid", false));
      return place(Object.assign({}, options, { type: type }));
    },
    rewarded: function (options) { return place(Object.assign({}, options, { type: "reward" })); },
    setSound: function (enabled) { if (mode !== "off" && win.adConfig) win.adConfig({ sound: enabled ? "on" : "off" }); },
    createPauseGate: createPauseGate,
    inspect: function () { return { mode: mode, active: !!active, history: history.slice() }; }
  };
});
