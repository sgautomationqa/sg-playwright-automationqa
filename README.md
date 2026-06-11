# Playwright Automation Framework

Automated end-to-end tests for [Automation Exercise](https://automationexercise.com), built with Playwright, JavaScript, and the Page Object Model.

## Highlights

- Page Object Model with shared fixtures
- User registration and login flows with dynamic test data
- Product search, hover, and add-to-cart with modal handling
- Contact form with file upload and confirm dialog
- Parallel execution across Chromium, Firefox, and WebKit
- GitHub Actions CI on every push and pull request

---

## Test Coverage

| Test | Spec | Description |
|------|------|-------------|
| User registration | `registernewuser.spec.js` | Sign up, account info, address, logged-in validation |
| User login | `loginuser.spec.js` | Self-contained register → logout → login flow |
| Products | `product.spec.js` | Search, hover, add to cart, cart modal handling |
| Contact us | `contactusform.spec.js` | Form submission, file upload, confirm dialog |

---

## Tech Stack

- Playwright
- JavaScript (Node.js)
- GitHub Actions

---

## Project Structure

```
playwright-project/
├── .github/workflows/       # GitHub Actions CI pipeline
├── fixtures/
│   └── baseFixture.js       # Shared Playwright fixtures
├── pages/                   # Page Object Model classes
├── tests/                   # Test specs
├── utils/                   # Test data helpers (userFactory, testData)
├── testdata/                # Files for upload tests
├── playwright.config.js       # Browser projects, parallel runs, CI settings
├── jsconfig.json            # IDE support and JSDoc typing
└── package.json
```

---

## Prerequisites

- Node.js 18+
- npm
- Git

---

## Setup

```bash
git clone <your-repo-url>
cd playwright-project
npm ci
npx playwright install
```

---

## Running Tests

```bash
# All tests, all browsers
npm test

# Headed mode
npm run test:headed

# Single browser
npm run test:chromium
npm run test:firefox
npm run test:webkit

# Single spec file
npx playwright test tests/product.spec.js

# Debug mode
npx playwright test tests/loginuser.spec.js --debug

# Open HTML report
npm run test:report
```

---

## CI/CD

Tests run automatically on push and pull request to `main` or `master` via GitHub Actions.

- Parallel jobs for Chromium, Firefox, and WebKit
- Retries on failure in CI
- HTML reports uploaded as workflow artifacts on every run
- Test result artifacts uploaded on failure

Workflow file: `.github/workflows/playwright.yml`

---

## Design Patterns

- **Page Object Model** — UI logic lives in `pages/`; specs stay thin and readable
- **Custom fixtures** — `baseFixture.js` injects page objects and test data into tests
- **Dynamic test data** — `userFactory.js` generates unique users per run
- **Reliable waits** — element-based waits and `expect()` retries instead of fixed sleeps
- **Popup handling** — native browser dialogs via `dialog.accept()` and HTML modals via locators

---

## Author

Shivangi Ganeriwal
