/* KoyoTap official site — access analytics (Google Analytics 4, cookieless).
 *
 * ===========================================================================
 *  SETUP: put the GA4 measurement ID below. That is the only edit needed.
 *  While it is empty, nothing is loaded and no requests are sent.
 * ===========================================================================
 */
var KOYOTAP_GA4_MEASUREMENT_ID = "G-KT8SK6QRFJ";

/* Cookieless on purpose, which keeps the site clear of a consent banner.
 *
 * What enforces it is Consent Mode: with analytics_storage "denied", declared
 * before the first hit, GA4 sends cookieless pings and writes no _ga cookies.
 * Note that client_storage "none" does NOT do this on GA4 — it is a leftover
 * from Universal Analytics, and GA4 sets its cookies anyway. Verified by
 * checking document.cookie on a fresh load; if that check is ever redone and
 * _ga appears, the privacy policy no longer matches the site.
 *
 * The trade-off is
 * that returning visitors cannot be recognised — every visit counts as new,
 * so treat "users" as "visits" in the reports. Google Signals and ad
 * personalisation are switched off for the same reason.
 *
 * Beyond GA4's built-in page_view and scroll tracking, this sends:
 *   language_switch — a visitor chose JA or EN
 *   contact_click   — a visitor opened the contact email address
 *   section_view    — a visitor reached a section of the home page
 */
(function () {
  "use strict";

  var id = KOYOTAP_GA4_MEASUREMENT_ID;
  if (!id || id.indexOf("G-") !== 0) return; // not configured yet

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;

  // Must be declared before the tag loads and before the first hit, or GA4 will
  // have already written its cookies by the time the denial arrives.
  gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied"
  });

  var tag = document.createElement("script");
  tag.async = true;
  tag.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id);
  document.head.appendChild(tag);

  gtag("js", new Date());
  gtag("config", id, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    content_language: document.documentElement.getAttribute("data-lang") || "ja"
  });

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
      language: document.documentElement.getAttribute("data-lang") || "ja"
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
    // A section counts as seen once it reaches the top 60% of the viewport.
    // Deliberately not a ratio threshold: sections here are often taller than
    // the window, and then a ratio such as 0.4 can be unreachable on a short
    // viewport, so the event would silently never fire.
    rootMargin: "0px 0px -40% 0px",
    threshold: 0
  });

  for (var i = 0; i < sections.length; i++) observer.observe(sections[i]);
})();
