import { test as base } from '@playwright/test';
import { PageManager } from '../Pages/PageManager';

// 1. Define the types for our fixtures
// This tells TypeScript that we will have a 'pages' fixture of type PageManager
export type MyFixtures = {
    pages: PageManager;
};

// 2. Extend the base test to include our custom fixture
export const test = base.extend<MyFixtures>({
    
    /**
     * The 'pages' fixture:
     * It creates a new PageManager instance for every test.
     * { page } is the default Playwright page object.
     */
    pages: async ({ page }, use) => {
        // Initialize the Manager with the current page
        const pages = new PageManager(page);

         // Optional: Navigate to the base URL automatically
        await page.goto('/'); 
        
        // Use the fixture in the test
        await use(pages);
    }
});

// 3. Export the 'expect' from the original library so we can use it in our tests
export { expect } from '@playwright/test';