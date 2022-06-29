module.exports = {
    //showLogs: true,
    //serverUrl: 'xxx',
    testConcurrency: 30,
    batchName: 'Cucumber with Cypress Example',
    appName: 'Cucumber with Cypress App',
    browser: [
        // Add browsers with different viewports
        {width: 800, height: 600, name: 'chrome'},
        {width: 1200, height: 800, name: 'firefox'},
        {width: 1024, height: 768, name: 'edgechromium'},
     ],
  }
