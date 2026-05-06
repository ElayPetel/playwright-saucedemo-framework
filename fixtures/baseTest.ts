import { test as base } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { InventoryPage } from '@/Pages/InventoryPage';
import { ProductPage } from '@/Pages/ProductPage';

// 1. Define the types for your fixtures
// This tells TypeScript which Page Objects will be available in your tests
type MyFixtures = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    productPage: ProductPage;
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

    inventoryPage: async ({page}, use) => {
        const inventoryPage = new InventoryPage(page);
        await use(inventoryPage);
    },

    productPage: async ({page}, use) => {
        const productPage = new ProductPage(page);
        await use(productPage);
    }
});

// Export the expect function from the base library for convenience
export { expect } from '@playwright/test';