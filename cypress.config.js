const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    watchForFileChanges: false,
    baseUrl: "https://juice-shop-sanitarskyi.herokuapp.com/#",
    setupNodeEvents(on, config) {

    },
  },
});
