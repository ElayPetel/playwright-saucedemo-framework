import { USERS } from '@/data/users';
import { test, expect } from '../fixtures/baseTest';
import { CUSTOMERS } from '@/data/costumers';

test.describe('E2E Tests For Buying Products', () => {


   test.beforeEach(async ({ pages }) => {
    pages.loginPage.fullLogin(USERS.standard.username, USERS.standard.password);
    await pages.inventoryPage.validateinventoryPageLoad();
   });

   

    test('E2E flow for buying random product', async ({ pages }) => {
        // Variable Definition

       const randomProduct = await pages.inventoryPage.getRandomProduct();
       let priceStartingPage: number;
       let priceNewPage: number;

        // Code Section

        priceStartingPage = await pages.inventoryPage.getProductPrice(randomProduct);
        await pages.inventoryPage.clickOnProduct(randomProduct);
        await pages.productPage.validateProductPageLoadUp();
        priceNewPage = await pages.productPage.getProductPrice();
        await pages.productPage.AssertPricesAreEqual(priceStartingPage, priceNewPage);
        await pages.productPage.clickOnAddToCartButton();
        await pages.productPage.clickShoppingCartButton();
        await pages.cartPage.validateCartPageLoadUp();
        priceNewPage = await pages.cartPage.getProductPrice();
        await pages.cartPage.AssertPricesAreEqual(priceStartingPage, priceNewPage);
        await pages.cartPage.clickOnCheckoutButton();
        await pages.checkoutPage.enterFirstName(CUSTOMERS.standard.firstName);
        await pages.checkoutPage.enterLastName(CUSTOMERS.standard.lastName);
        await pages.checkoutPage.enterPostalCode(CUSTOMERS.standard.zipCode);
        await pages.checkoutPage.clickOnContinueButton();
        await pages.overviewPage.clickOnFinishButton();
        await pages.completePage.validateCompletePageLoadUp();
    });

});