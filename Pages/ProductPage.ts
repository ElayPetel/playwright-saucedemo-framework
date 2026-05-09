import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductPage  extends BasePage {
// Dm Members

readonly page: Page;
readonly addToCartBtn: Locator;
readonly productPriceLocator: Locator;

// Constuctor

constructor (page: Page) {
    super(page);
    this.page = page;
    this.addToCartBtn = this.page.locator('[data-test="add-to-cart"]');
    this.productPriceLocator = this.page.locator('[data-test="inventory-item-price"]');
}

// Methods

async validateProductPageLoadUp() {
    await expect(this.addToCartBtn).toBeVisible(); 
}

async clickOnAddToCartButton() {
    await this.addToCartBtn.click();
}

async getProductPrice(): Promise<number> {
    const priceTextRaw = await this.productPriceLocator.textContent();
    const priceAsNumber = parseFloat(priceTextRaw?.replace('$', '') || '0');
    return priceAsNumber;
}

}