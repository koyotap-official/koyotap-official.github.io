/* Delay the existing, immutable game entry until its one preroll completes. */
const root = document.documentElement;
const gameId = root.getAttribute("data-game-id");
const entry = root.getAttribute("data-game-entry");

function notify(event) {
  if (window.parent === window) return;
  window.parent.postMessage({ type: "koyotap:game", gameId, event }, window.location.origin);
}

async function boot() {
  if (!entry || !gameId) throw new Error("Missing KoyoTap game entry");
  // Keep direct own-site iframe URLs on the old game's explicit inert lifecycle.
  if (root.getAttribute("data-game-standalone") === "true") {
    const standaloneUrl = new URL(window.location.href);
    standaloneUrl.searchParams.set("standalone", "1");
    window.history.replaceState(window.history.state, "", standaloneUrl.href);
  }
  const url = new URL(entry, window.location.href);
  if (url.origin !== window.location.origin) throw new Error("Game entry must be same-origin");
  notify("ad_startup_begin");
  try {
    if (window.KoyoTapH5Ads) await window.KoyoTapH5Ads.preroll();
  } catch (error) {
    console.warn("[KoyoTap H5] Startup placement failed; starting the game.");
  } finally {
    notify("ad_startup_end");
  }
  // Import the exact published game. Do not rebuild from a newer source tree.
  if (root.getAttribute("data-game-entry-kind") === "classic") {
    await new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = url.href;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  } else {
    await import(url.href);
  }
}

boot().catch(error => {
  notify("error");
  console.error("[KoyoTap H5] Game boot failed:", error);
});
