import { test, expect } from '../fixtures/baseTest';
import { USERS } from '@/data/users';

test.describe('Login Tests', () => {
   

    test('should allow user to login with valid credentials', async ({ pages }) => {
        // Step 1: Perform login using POM method
        await pages.loginPage.validateLoginPageLoad();
        await pages.loginPage.enterUsername(USERS.standard.username);
        await pages.loginPage.enterPassword(USERS.standard.password);
        await pages.loginPage.clickLoginButton();

        // Step 2: Assertion - Verify successful navigation
        await pages.inventoryPage.validateinventoryPageLoad();
    });

});