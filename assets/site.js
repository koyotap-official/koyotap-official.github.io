/* KoyoTap official site — language switch (JA / EN).
   The active language lives on <html data-lang>, which an inline script in <head>
   resolves before first paint. This file only handles user-driven switching and
   keeps <title> / meta description in sync using the per-page data-* attributes. */
(function () {
  "use strict";

  var root = document.documentElement;
  var STORAGE_KEY = "koyotap-lang";

  function apply(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);

    var title = root.getAttribute("data-title-" + lang);
    if (title) document.title = title;

    var desc = root.getAttribute("data-desc-" + lang);
    var meta = document.querySelector('meta[name="description"]');
    if (desc && meta) meta.setAttribute("content", desc);

    var buttons = document.querySelectorAll("[data-set-lang]");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute(
        "aria-pressed",
        buttons[i].getAttribute("data-set-lang") === lang ? "true" : "false"
      );
    }
  }

  document.addEventListener("click", function (event) {
    var button = event.target.closest ? event.target.closest("[data-set-lang]") : null;
    if (!button) return;

    var lang = button.getAttribute("data-set-lang");
    apply(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* private mode: the choice just does not persist */
    }
  });

  // Keep campaign context as visitors move between the public site and /play/.
  // Only links explicitly marked by page authors are touched; external links,
  // mail links, and hash navigation keep their original destinations.
  (function preserveCampaignParams() {
    var campaignKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content"];
    var current = new URL(window.location.href);
    var hasCampaign = false;
    for (var i = 0; i < campaignKeys.length; i++) {
      if (current.searchParams.has(campaignKeys[i])) {
        hasCampaign = true;
        break;
      }
    }
    if (!hasCampaign) return;

    var links = document.querySelectorAll("a[data-preserve-utm]");
    for (var j = 0; j < links.length; j++) {
      var link = links[j];
      var href = link.getAttribute("href");
      if (!href || href.charAt(0) === "#") continue;

      var target;
      try {
        target = new URL(href, current.href);
      } catch (e) {
        continue;
      }
      if (target.origin !== current.origin) continue;

      for (var k = 0; k < campaignKeys.length; k++) {
        var key = campaignKeys[k];
        if (current.searchParams.has(key)) target.searchParams.set(key, current.searchParams.get(key));
      }
      link.setAttribute("href", target.pathname + target.search + target.hash);
    }
  })();

  // Reflect whatever the head script resolved (button state, title, description).
  apply(root.getAttribute("data-lang") === "en" ? "en" : "ja");
})();
