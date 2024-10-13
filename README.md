## Overview

This project is an automated test suite for the Sauce Labs demo website, built using Playwright with TypeScript for pre assessment at lean_technologies

**Reporting:**
This project have 2 different reportings 
- playwright
- allure


## Prerequisites

- Node.js 
- npm

## Folder Structure

**src/pages:** Contains Page Object Models.
**src/tests:** Contains test scripts.
**src/utils:** Contains utility functions and configurations.
**playwright.config.ts:** Playwright configuration file.
**package.json:** Project dependencies and scripts.

## Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/eradityaarora/playwright_checkoutflow.git
   cd playwright_checkoutflow

2. **Install Dependencies:**

    ```bash
    npm install

3. **Run Tests:**

    ```bash
    npm test

4. **Generate HTML Report:**

    npm run test:report
    npx playwright show-report

5. **Allure Report**:

    npx allure generate allure-results --clean -o allure-report
    npx allure open allure-report   

6. **Env Variables:**

    The project currently supports 2 env variables 

        1. HEADLESS ( default false)
        2. BASE_URL ( default = 'https://www.saucedemo.com')

    ```bash
        HEADLESS='true' BASE_URL='https://www.saucedemo.com' npm test              

