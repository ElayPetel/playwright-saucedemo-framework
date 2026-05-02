# 🎭 Playwright Automation Framework | Swag Labs E2E Suite

[![Playwright Tests](https://img.shields.io/badge/Framework-Playwright-28a745.svg?style=for-the-badge&logo=playwright)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6.svg?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen.svg?style=for-the-badge)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

## 🌟 Overview
This repository showcases a **professional-grade End-to-End (E2E) automation framework** built for the SauceDemo (Swag Labs) platform. Designed for reliability and speed, it demonstrates how to handle modern web challenges using industry best practices.

### ✨ Key Features
*   **🧩 Page Object Model (POM):** Clean separation of concerns between test scripts and UI logic.
*   **📊 Data-Driven Testing (DDT):** Seamless test execution using dynamic JSON data sets.
*   **🛡️ Robust Locators:** Implementation of resilient selectors to minimize test fragility.
*   **📈 Advanced Reporting:** Detailed HTML reports with embedded screenshots and failure traces.
*   **⚡ Parallel Execution:** Optimized for high-speed testing across multiple browsers.

---

## 🚀 Getting Started

Follow these steps to get your local environment up and running in minutes.

### 1️⃣ Installation
Ensure you have [Node.js](https://nodejs.org/) installed, then run:

    # Clone the repository
    git clone https://github.com/ElayPetel/playwright-saucedemo-framework.git

    # Enter the directory
    cd playwright-saucedemo-framework

    # Install dependencies
    npm install

    # Install browser binaries (Chromium, Firefox, Webkit)
    npx playwright install

---

### 2️⃣ Running Tests
Use the following commands to execute tests in different environments:

| Scenario | Command | Description |
| :--- | :--- | :--- |
| 🚀 **Headless Mode** | `npx playwright test` | The fastest way - runs in the background. |
| 👀 **Headed Mode** | `npx playwright test --headed` | Watch the browser perform the actions live. |
| 🛠️ **UI Mode** | `npx playwright test --ui` | Interactive dashboard for debugging & development. |
| 📄 **Specific File** | `npx playwright test tests/login.spec.ts` | Runs only the selected test file. |
| 🕵️ **Debug Mode** | `npx playwright test --debug` | Step-through execution for deep troubleshooting. |

---

### 3️⃣ Generating Reports
After the run is complete, generate and view the visual report:

    npx playwright show-report

---

## 📁 Project Structure

    ├── data/               # 📂 JSON files for data-driven testing
    ├── pages/              # 🏗️ POM: UI Locators and action methods
    ├── tests/              # 🧪 E2E test specifications
    ├── playwright.config.ts # ⚙️ Global configuration & environment settings
    └── package.json        # 📦 Project dependencies and scripts

---

## 📸 Screenshots & Artifacts
*The framework automatically captures these on failure:*
*   **Screenshots:** Visual proof of the UI state at the moment of failure.
*   **Traces:** Full recording of the test execution (DOM snapshots, network calls).
*   **Videos:** Playback of the user journey.

---

## 🛠️ Tech Stack
*   **Automation Engine:** Playwright
*   **Language:** TypeScript
*   **Version Control:** Git & GitHub
*   **IDE:** VS Code

---

## 👤 Author
**Elay Petel**  
*Automation Engineer*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/YOUR-PROFILE) 
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=flat&logo=github)](https://github.com/ElayPetel)

---
*Built with ❤️ for better software quality.*
