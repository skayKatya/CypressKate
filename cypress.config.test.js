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
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      mochaFile: 'results/my-test.xml',
      toConsole: true
    },
    retries: {
      runMode: 1,
      openMode: 1,
    },
    // setupNodeEvents(on, config) {
    //   on('test:after:run')
    // },
    baseUrl: 'https://guest:welcome2qauto@qauto2.forstudy.space/',
    env: {
      login: 'kateTest@gmail.com',
      password: '321!@#qweQWE'
    }
  },
});
