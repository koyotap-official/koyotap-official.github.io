/* KoyoTap official site — access analytics (Google Analytics 4).
 *
 * The measurement ID is shared by the public site and /play/ wrappers. The
 * corporate pages keep their existing denied Consent Mode default. Play pages
 * offer a small, optional analytics choice: the game is always playable, and
 * only an explicit allow changes analytics_storage to granted.
 */
var KOYOTAP_GA4_MEASUREMENT_ID = "G-KT8SK6QRFJ";

(function () {
  "use strict";

  var root = document.documentElement;
  var measurementId = KOYOTAP_GA4_MEASUREMENT_ID;
  if (!measurementId || measurementId.indexOf("G-") !== 0) return;

  var isPlayPage = root.getAttribute("data-play-page") === "true";
  var consentKey = "koyotap-analytics-consent";
  var host = String(window.location.hostname || "").toLowerCase();
  var isLoopback = host === "localhost" || host === "127.0.0.1" || host === "[::1]" || host === "::1";
  var memoryPreference = "";
  var existingPreference = readPreference();
  var initialAnalyticsStorage = isPlayPage && existingPreference === "granted" ? "granted" : "denied";
  var consentedPageViewSent = initialAnalyticsStorage === "granted";

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  window.koyotapTrack = function (name, params) {
    if (typeof name !== "string" || !name) return;
    gtag("event", name, params && typeof params === "object" ? params : {});
  };
  window.koyotapAnalytics = {
    isPlayPage: isPlayPage,
    isLoopback: isLoopback,
    getConsent: function () { return readPreference(); }
  };

  // Consent must be declared before the tag or its first hit is created.
  gtag("consent", "default", {
    analytics_storage: initialAnalyticsStorage,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied"
  });

  // Manual local previews and QA keep the dataLayer intact for assertions, but
  // never load the remote Google tag or send collection requests.
  if (!isLoopback) {
    var tag = document.createElement("script");
    tag.async = true;
    tag.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(measurementId);
    document.head.appendChild(tag);
  }

  gtag("js", new Date());
  gtag("config", measurementId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    content_language: root.getAttribute("data-lang") || "ja"
  });

  function readPreference() {
    try {
      var value = window.localStorage.getItem(consentKey);
      if (value === "granted" || value === "denied") {
        memoryPreference = value;
        return value;
      }
    } catch (e) {
      // Continue with the in-memory choice for private mode and test doubles.
    }
    return memoryPreference;
  }

  function savePreference(value) {
    memoryPreference = value;
    try {
      window.localStorage.setItem(consentKey, value);
    } catch (e) {
      // Private mode can still use the current page's in-memory consent update.
    }
  }

  function deleteAnalyticsCookies() {
    var suffix = measurementId.slice(2).replace(/[^A-Za-z0-9_]/g, "_");
    var names = ["_ga", "_ga_" + suffix];
    var domains = [""];
    if (host && host !== "localhost" && host !== "127.0.0.1" && host !== "::1" && host !== "[::1]") {
      domains.push(host);
      domains.push("." + host);
    }
    var expires = "Thu, 01 Jan 1970 00:00:00 GMT";
    for (var i = 0; i < names.length; i++) {
      for (var j = 0; j < domains.length; j++) {
        var domain = domains[j] ? "; domain=" + domains[j] : "";
        document.cookie = names[i] + "=; expires=" + expires + "; Max-Age=0; path=/" + domain;
      }
    }
  }

  function updateConsentUI() {
    if (!isPlayPage) return;
    var panel = document.querySelector("[data-analytics-consent-panel]");
    var settings = document.querySelector("[data-analytics-settings]");
    var preference = readPreference();
    if (panel) panel.hidden = preference !== "";
    if (settings) settings.hidden = preference === "";
  }

  function sendConsentedPageView() {
    if (consentedPageViewSent) return;
    consentedPageViewSent = true;
    // The automatic denied page_view may not be reported. This is the one
    // explicit, consented page_view for the current page after an allow.
    gtag("event", "page_view", {
      page_location: window.location.href,
      page_title: document.title,
      send_to: measurementId
    });
  }

  function updateConsent(value) {
    if (!isPlayPage || (value !== "granted" && value !== "denied")) return;
    var previous = readPreference();
    savePreference(value);
    gtag("consent", "update", {
      analytics_storage: value,
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied"
    });
    if (value === "denied") deleteAnalyticsCookies();
    if (value === "granted" && previous !== "granted") sendConsentedPageView();
    updateConsentUI();
  }

  if (isPlayPage) {
    document.addEventListener("click", function (event) {
      var choice = event.target.closest ? event.target.closest("[data-analytics-choice]") : null;
      if (choice) {
        updateConsent(choice.getAttribute("data-analytics-choice"));
        return;
      }

      var settings = event.target.closest ? event.target.closest("[data-analytics-settings]") : null;
      if (settings) {
        var panel = document.querySelector("[data-analytics-consent-panel]");
        if (panel) panel.hidden = false;
      }
    });
    updateConsentUI();
  }

  // --- language switch -----------------------------------------------------
  document.addEventListener("click", function (event) {
    var target = event.target.closest ? event.target.closest("[data-set-lang]") : null;
    if (!target) return;
    gtag("event", "language_switch", { language: target.getAttribute("data-set-lang") });
  });

  // --- contact email clicks ------------------------------------------------
  document.addEventListener("click", function (event) {
    var link = event.target.closest ? event.target.closest('a[href^="mailto:"]') : null;
    if (!link) return;
    gtag("event", "contact_click", {
      placement: link.getAttribute("data-analytics") || "other",
      language: root.getAttribute("data-lang") || "ja"
    });
  });

  // --- section reach -------------------------------------------------------
  if (!("IntersectionObserver" in window)) return;

  var sections = document.querySelectorAll("main section[id]");
  if (!sections.length) return;

  var seen = Object.create(null);
  var observer = new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      var name = entry.target.id;
      if (!entry.isIntersecting || seen[name]) continue;
      seen[name] = true;
      observer.unobserve(entry.target);
      gtag("event", "section_view", { section: name });
    }
  }, {
    rootMargin: "0px 0px -40% 0px",
    threshold: 0
  });

  for (var i = 0; i < sections.length; i++) observer.observe(sections[i]);
})();
