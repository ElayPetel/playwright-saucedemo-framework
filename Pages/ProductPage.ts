import { Page, Locator, expect } from '@playwright/test';

export class ProductPage {

// Dm Members

readonly page: Page;
readonly addToCartBtn: Locator;

// Constuctor

constructor (page: Page) {
    this.page = page;
    this.addToCartBtn = page.locator('[data-test="add-to-cart"]');
}

// Methods

async validateProducgtPageLoadUp() {
    await expect(this.addToCartBtn).toBeVisible(); 
}

async clickOnAddToCartButton() {
    await this.addToCartBtn.click();
}
}