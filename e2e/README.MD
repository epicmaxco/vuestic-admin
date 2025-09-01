# End-to-End Testing with Playwright

This project uses **Playwright** for end-to-end (E2E) testing.
All test logic lives in the `e2e` folder, but several root-level changes are required for correct setup.

---

## Project Setup

### 1. GitHub Actions (CI)

CI is configured in: `.github/workflows/playwright.yml`

The workflow is triggered manually.
You can provide:

- **Baseline URL** – used to generate reference snapshots (default: `https://admin-demo.vuestic.dev`).
- **Target URL** – Netlify (or other) build URL to run tests against (required).

The workflow runs tests and uploads the Playwright HTML report as a GitHub Artifact, which can be downloaded and inspected locally.

### 2. `package.json` changes

At the root level, add:

```json
{
  "workspaces": ["e2e"],
  "scripts": {
    "e2e": "yarn workspace e2e test"
  }
}
```

This ensures the E2E project is recognized as a Yarn workspace and provides a shortcut script for running tests.

---

## Configuration

All configuration is stored in: `e2e/playwright.config.ts`

Here you can customize:

- Paths – where snapshots, reports, and test results are stored.
- Snapshot Ratio – the allowed percent difference for visual comparisons.
- Timeouts – global test and assertion timeouts.

If you want to store baseline screenshots in the repository, we recommend adding a `.gitattributes` file to enforce consistent handling of binary files.

---

## API Stubs and Mocks

The `e2e` project includes stubs for API requests.
These allow you to intercept, control, and replace backend requests with mocks during testing.

---

## CI Workflow Details

- Generate/Update Baseline: snapshots are created against the baseline URL.
- Run Tests: tests are executed against the target URL (e.g., a Netlify preview build).
- Artifacts: Playwright reports are uploaded as GitHub Artifacts and can be downloaded for local review.

---

## Local Usage

Step 1:
// Expect error
Generate baseline screenshots: `E2E_BASE_URL=https://admin-demo.vuestic.dev yarn e2e:update-snapshots`

Step 2:
Build and run project locally: `yarn build:ci && yarn start:ci`
// Use correct API base url in .env
To run tests locally: `yarn e2e`
