/* One configuration for KoyoTap's own web games. Never copy into portal builds. */
window.KOYOTAP_H5_ADS_CONFIG = {
  publisherId: "ca-pub-8203691800220653",
  // H5 account approval and approval of the actual serving domain are separate.
  // Keep live requests off until koyotap.com approval is confirmed in AdSense.
  enabled: false,
  allowedHosts: ["koyotap.com", "www.koyotap.com"],
  frequencyHint: "120s",
  readyTimeoutMs: 3000,
  games: {
    "block-crush": true,
    "cube-merge-shot": true,
    "glowline-pipes": true,
    "tall-tales": true,
    "idiom-lab": true,
    "craft-studio": true,
    "cake-lettering": true,
    "color-sculptures": true,
    "little-fish-trios": true
  }
};
