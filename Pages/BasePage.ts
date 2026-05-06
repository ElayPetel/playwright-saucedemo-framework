import { Page, Locator, expect } from '@playwright/test';

export abstract class BasePage {
    readonly page: Page;

    // Dm Members
    readonly shoppingCartBtn: Locator;
    readonly menuBtn: Locator;

    constructor(page: Page) {
        this.page = page;

        // Locators Defintion
        this.shoppingCartBtn = page.locator('[data-test="shopping-cart-link"]');
        this.menuBtn = page.locator('#react-burger-menu-btn');
    }

    // Methods

    async validateGlobalsLoadUp() {
        await expect(this.shoppingCartBtn).toBeVisible();
    }
    
    async clickShoppingCartButton() {
        await this.shoppingCartBtn.click();
    }

    async clickMenuButtton() {
        await this.menuBtn.click();
    }
}