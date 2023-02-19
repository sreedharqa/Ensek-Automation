const { defineConfig } = require("cypress");
const fs = require("fs-extra");

module.exports = defineConfig({
  defaultCommandTimeout: 90000,
  pageLoadTimeout: 90000,
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    setupNodeEvents(on, config) {
      return fs.readJson('cypress/fixtures/ensek-data.json')
    },

    e2e: {
      setupNodeEvents(on, config) {
        require('cypress-mochawesome-reporter/plugin')(on);
      },
    },
  },
});
