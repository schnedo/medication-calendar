const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
  },
  basePath: "/medication-calendar",
  assetPrefix: "/medication-calendar/",
});
