import { Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { InventoryPage } from './InventoryPage';
import { CartPage } from './CartPage';
import { ProductPage } from './ProductPage';
import { OverviewPage } from './OverviewPage';
import { CompletePage } from './CompletePage';
import { CheckoutPage } from './CheckoutPage';
import { BasePage } from './BasePage';

// Import other page classes as you create them

export class PageManager {
    // Members: Define private/readonly variables for the page and each Page Object
    private readonly page: Page;

    /**
     * @param page - The Playwright Page object provided by the test context
     */
    constructor(page: Page) {
        // Assign the page object to the class member
        this.page = page;
        }


        
    //  OPTIONAL: Instead of initializing all pages at once in the constructor, 
    //  some prefer using "Getters" to initialize them only when they are called.
    //  Example:
       

        /**
     * @returns An instance of LoginPage. 
     * Created only when accessed for the first time in a test.
     */
    get loginPage() {
        return new LoginPage(this.page);
    }

    /**
     * @returns An instance of InventoryPage.
     */
    get inventoryPage() {
        return new InventoryPage(this.page);
    }

    /**
     * @returns An instance of CartPage.
     */
    get cartPage() {
        return new CartPage(this.page);
    }

      /**
     * @returns An instance of ProductPage.
     */
    get productPage() {
        return new ProductPage(this.page);
    }

      /**
     * @returns An instance of OverviewPage.
     */
    get overviewPage() {
        return new OverviewPage(this.page);
    }   

      /**
     * @returns An instance of CompletePage.
     */
    get completePage() {
        return new CompletePage(this.page);
    }

      /**
     * @returns An instance of CheckoutPage.
     */
    get checkoutPage() {
        return new CheckoutPage(this.page);
    }


    // Methods

    async navigateToHome() {
        await this.page.goto('https://www.saucedemo.com/');
    }
}