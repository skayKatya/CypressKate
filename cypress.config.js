const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 20000,
  watchForFileChanges: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  numTestsKeptInMemory: 1,
  chromeWebSecurity: false,
  screenshotsFolder: 'screenshots',
  videosFolder: 'video',
  video: false,
  responseTimeout: 30000,

  e2e: {
    retries: {
      runMode: 1,
      openMode: 1,
    },
    setupNodeEvents(on, config) {
      on('test:after:run')
    },
  },
});
