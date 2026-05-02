
# 🎭 Playwright Automation Framework | SauceDemo E2E Suite

A production-ready End-to-End (E2E) automation framework built with **Playwright**, **TypeScript**, and **Page Object Model (POM)** architecture. This project automates the core business flows of the "Swag Labs" (SauceDemo) e-commerce platform.

---

## 🏗️ Architecture & Best Practices

This framework is designed with a focus on scalability and reliability, implementing several industry-standard patterns:

*   **Page Object Model (POM):** Decouples test logic from UI locators, making the suite easier to maintain.
*   **Data-Driven Testing (DDT):** Uses external JSON files to drive test scenarios with different user personas.
*   **Type Safety:** Fully written in TypeScript to catch errors at compile-time.
*   **Explicit Waits:** Leverages Playwright's auto-waiting mechanism to eliminate flaky tests.
*   **Reporters:** Configured with detailed HTML reporting and trace viewing for fast debugging.

---

## 🚀 Getting Started

Follow these steps to set up the project on your local machine and run your first test.

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (LTS version) installed on your system.

### 2. Installation
Clone the repository and install the project dependencies:

```bash
# Clone the repository
git clone https://github.com/ElayPetel/playwright-saucedemo-framework.git

# Navigate to the project directory
cd playwright-saucedemo-framework

# Install NPM packages
npm install

# Install Playwright browser binaries
npx playwright install

Scenario,Command to Type,What it does
Standard Run,npx playwright test,Runs all tests in the background (Fastest).
Watch it Work,npx playwright test --headed,Opens a real browser window so you can watch the automation.
Visual Dashboard,npx playwright test --ui,Opens an interactive window to run and debug tests manually.
Specific File,npx playwright test tests/login.spec.ts,"Runs only the tests inside the ""login"" file."
