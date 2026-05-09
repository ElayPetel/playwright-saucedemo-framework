import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
    // Dm Members

readonly page: Page;
readonly checkoutBtn: Locator;
readonly continueShoppingBtn: Locator;
readonly removeBtn: Locator;
readonly productPriceLocator: Locator;


// Constuctor

constructor (page: Page) {
    super(page);
    this.page = page;
    this.checkoutBtn = this.page.locator('[data-test="checkout"]');
    this.continueShoppingBtn = this.page.locator('[data-test="continue-shopping"]');
    this.removeBtn = this.page.locator('[data-test="remove"]');
    this.productPriceLocator = this.page.locator('[data-test="inventory-item-price"]');
}

// Methods

async validateCartPageLoadUp() {
    await expect(this.checkoutBtn).toBeVisible(); 
}

async clickOnCheckoutButton() {
    await this.checkoutBtn.click();
}

async clickOnContinueShoppingButton() {
    await this.continueShoppingBtn.click();
}

async clickOnRemoveButton() {
    await this.removeBtn.click();
}

async getProductPrice(): Promise<number> {
    const priceTextRaw = await this.productPriceLocator.textContent();
    const priceAsNumber = parseFloat(priceTextRaw?.replace('$', '') || '0');
    return priceAsNumber;
}

}