import { HomePage } from '@/Pages/HomePage';
import { test, expect } from '../fixtures/baseTest';

test.describe('Login Tests', () => {
   

    test('should allow user to login with valid credentials', async ({ loginPage, homePage }) => {
        // Step 1: Perform login using POM method
        await loginPage.validateLoginPageLoad();
        await loginPage.enterUsername("standard_user");
        await loginPage.enterPassword("secret_sauce");
        await loginPage.clickLoginButton();

        // Step 2: Assertion - Verify successful navigation
        await homePage.validateHomePageLoad();
    });

});