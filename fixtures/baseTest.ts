import { test as base } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { HomePage } from '@/Pages/HomePage';

// 1. Define the types for your fixtures
// This tells TypeScript which Page Objects will be available in your tests
type MyFixtures = {
    loginPage: LoginPage;
    homePage: HomePage;
    // Future pages can be added here, e.g., dashboardPage: DashboardPage;
};

// 2. Extend the base test with your custom fixtures
export const test = base.extend<MyFixtures>({
    
    // Define the fixture for loginPage
    loginPage: async ({ page }, use) => {
        // Setup phase: Initialize the Page Object
        const loginPage = new LoginPage(page);
        
        // Optional: Navigate to the base URL automatically
        await page.goto('/'); 

        // Provide the fixture to the test
        await use(loginPage);
        
        // Teardown phase: Any cleanup code would go here after 'use'
        // Example: Cleaning up a database or logging out if necessary
        // await loginPage.logout();
    },

    homePage: async ({page}, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    }
});

// Export the expect function from the base library for convenience
export { expect } from '@playwright/test';