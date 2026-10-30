/* Device-specific store links. Only add an iOS URL after its public listing is verified. */
(function () {
  "use strict";

  var iosStoreUrls = {
    "glowline-pipes": null,
    "block-crush": null,
    "cube-merge-shot": null,
    "coin-tray-merge": null,
    "rain-shelter-cafe": null
  };

  function detectPlatform(nav) {
    var ua = String(nav.userAgent || "");
    var platform = String(nav.platform || "");
    var hint = nav.userAgentData && nav.userAgentData.platform;
    if (/Android/i.test(ua) || hint === "Android") return "android";
    if (/iPhone|iPad|iPod/i.test(ua) ||
        (/Mac/i.test(platform) && Number(nav.maxTouchPoints) > 1)) return "ios";
    return "other";
  }

  function updateStoreLinks(doc, platform, urls) {
    if (platform !== "ios") return;
    var links = doc.querySelectorAll("[data-game-store]");
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      var url = urls[link.getAttribute("data-game-store")];
      if (url) {
        link.setAttribute("href", url);
        link.setAttribute("title", "App Store");
        var english = link.querySelector('[data-l="en"]');
        if (english) english.textContent = "Play on the App Store";
      } else {
        link.hidden = true;
        var parent = link.parentElement;
        if (parent && (parent.classList.contains("game-card-actions") ||
            parent.classList.contains("play-store-actions") ||
            parent.classList.contains("home-game-actions--store-only"))) parent.hidden = true;
      }
    }
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { detectPlatform: detectPlatform, updateStoreLinks: updateStoreLinks };
  }
  if (typeof document === "undefined" || typeof navigator === "undefined") return;

  var platform = detectPlatform(navigator);
  // Set before first paint so an iOS visitor is never shown a Google Play action.
  document.documentElement.setAttribute("data-store-platform", platform);
  function apply() { updateStoreLinks(document, platform, iosStoreUrls); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", apply);
  else apply();
})();
