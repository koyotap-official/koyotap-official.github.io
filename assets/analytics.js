/* Optional analytics is paused pending age, consent and data-handling review.
 * Denied Consent Mode can still send cookieless pings. Keep wrapper APIs inert.
 * Restoring measurement requires reviewed code and a new consent/age design.
 */
(function () {
  "use strict";
  var root = document.documentElement;
  var host = String(window.location.hostname || "").toLowerCase();
  var isPlayPage = root.getAttribute("data-play-page") === "true";
  var isLoopback = host === "localhost" || host === "127.0.0.1" || host === "[::1]" || host === "::1";
  window.dataLayer = [];
  window.gtag = function () {};
  window.koyotapTrack = function () {};
  window.koyotapAnalytics = {
    enabled: false,
    isPlayPage: isPlayPage,
    isLoopback: isLoopback,
    getConsent: function () { return "denied"; },
    openConsentDialog: function () { return false; }
  };
  // Invalidate old grants; preserve denials. Tracking stays off either way.
  try {
    if (window.localStorage.getItem("koyotap-analytics-consent") === "granted") {
      window.localStorage.removeItem("koyotap-analytics-consent");
    }
  } catch (e) { /* Storage denial never enables tracking. */ }
  // This removes accessible GA cookies, not HttpOnly or provider-held records.
  var names = ["_ga", "_ga_KT8SK6QRFJ", "_ga_RFENDKLRYS"];
  var domains = [""];
  if (!isLoopback && host) {
    domains.push(host, "." + host);
    if (host === "koyotap.com" || /\.koyotap\.com$/.test(host)) {
      domains.push("koyotap.com", ".koyotap.com");
    }
  }
  for (var i = 0; i < names.length; i++) {
    for (var j = 0; j < domains.length; j++) {
      document.cookie = names[i] + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; Max-Age=0; path=/" +
        (domains[j] ? "; domain=" + domains[j] : "");
    }
  }
})();
