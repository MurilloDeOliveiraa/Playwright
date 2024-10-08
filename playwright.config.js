// @ts-check
const { defineConfig, devices } = require('@playwright/test');
import dotenv from 'dotenv';

//POSSIBLE VALUES: local, prod
let env = '';

dotenv.config();  // It'll read the .env file, which is has common variables for each environment
if (env !== '') {
  dotenv.config({
    path: `./Envs/${env}.env`  //here it'll read a specific env file for a specific environment
  });
} else {
  dotenv.config({
    path: `./Envs/${process.env.ENV}.env`  //here it'll read a specific env file for a specific environment
  });
}

module.exports = defineConfig({
  testDir: './E2E',
  timeout: 15000,
  expect: {
    timeout: 5000
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 0,
  // retries: 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['junit', { outputFile: 'test-results/e2e-junit-results.xml' }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    launchOptions: {
      args: ["--start-maximized"]
    }
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        // ...devices['Desktop Chrome'] 
        viewport: null
      },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    // {
    //   name: 'Local',
    //   use: {
    //     dotenv: `./Envs/local.env`
    //   }
    // },
    // {
    //   name: 'Prod',
    //   use: {

    //   }
    // }

  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
