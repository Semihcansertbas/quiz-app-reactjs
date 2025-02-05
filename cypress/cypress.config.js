const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173', // Adjust your app's URL for E2E
    specPattern: 'cypress/e2e/quiz.e2e.js', // Use only E2E test files
    setupNodeEvents(on, config) {
      // Add plugins or event listeners for E2E
    },
  },
  component: {
    specPattern: 'cypress/component/quiz.component.js', // Use only Component test files
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
});
