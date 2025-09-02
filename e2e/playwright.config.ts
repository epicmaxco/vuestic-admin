import { defineConfig, devices } from '@playwright/test'

// Chromium – 3 breakpoints
const projectsChromium = [
  {
    name: 'chromium-pixel5',
    use: {
      ...devices['Pixel 5'],
      viewport: { width: 360, height: 800 },
      isMobile: true,
      hasTouch: true,
    },
  },
  {
    name: 'chromium-768',
    use: {
      ...devices['Desktop Chrome'],
      viewport: { width: 768, height: 800 },
    },
  },
  {
    name: 'chromium-1920',
    use: {
      ...devices['Desktop Chrome'],
      viewport: { width: 1920, height: 800 },
    },
  },
]

// WebKit – 2 breakpoints
const projectsWebKit = [
  {
    name: 'webkit-360',
    use: {
      ...devices['Desktop Safari'],
      viewport: { width: 360, height: 800 },
      isMobile: true,
      hasTouch: true,
    },
  },
  {
    name: 'webkit-1920',
    use: {
      ...devices['Desktop Safari'],
      viewport: { width: 1920, height: 800 },
    },
  },
]

// Mobile Safari (iOS emulation) – 1 breakpoint
const projectsSafari = [
  {
    name: 'mobile-safari-iphone12',
    use: { ...devices['iPhone 12'] },
  },
]

// Firefox – 1 breakpoint
const projectsFirefox = [
  {
    name: 'firefox-1920',
    use: {
      ...devices['Desktop Firefox'],
      viewport: { width: 1920, height: 800 },
    },
  },
]

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  // retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  // workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.E2E_BASE_URL ?? 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    // We balance the number of breakpoints.

    ...projectsChromium,
    ...projectsWebKit,
    ...projectsSafari,
    ...projectsFirefox,
  ],

  snapshotPathTemplate: '__screenshots__/{projectName}/{testFilePath}/{testName}{ext}',

  expect: {
    timeout: process.env.CI ? 10_000 : 5_000,
    // toHaveScreenshot: {
    // maxDiffPixelRatio: 0.02,
    // },
  },
})
