import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly shoppingCart: Locator;
    readonly titleText: Locator;
    readonly menuBtn: Locator;

    constructor (page: Page) {
        this.page = page
        this.shoppingCart = page.locator('[data-test="shopping-cart-link"]');
        this.titleText = page.getByText('Swag Labs');
        this.menuBtn = page.getByRole('button', { name: 'Open Menu' });
    }

    async validateHomePageLoad() {
        await expect(this.shoppingCart).toBeVisible();
    }

    async clickShoppingCartButton() {
        await this.shoppingCart.click();
    }

    async clickMenuButtton() {
        await this.menuBtn.click();
    }
}