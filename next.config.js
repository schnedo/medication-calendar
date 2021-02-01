const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
    subdomainPrefix: "/medication-calendar",
    register: false,
  },
  basePath: "/medication-calendar",
  assetPrefix: "/medication-calendar/",
});
