const { defineConfig } = require("cypress");

module.exports = defineConfig({
      "viewportWidth": 1440,
      "viewportHeight": 900,

  e2e: {
    baseUrl: 'https://buger-eats-qa.vercel.app',
    projectId: "15ira7", 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
