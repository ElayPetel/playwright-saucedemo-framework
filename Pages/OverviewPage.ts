import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class OverviewPage extends BasePage {
    // Dm Members

readonly page: Page;
readonly finishBtn : Locator;
readonly cancelBtn: Locator;
readonly productName: Locator;
readonly productTotalPrice: Locator;
readonly tax: Locator;
readonly totalPrice: Locator;


// Constuctor

constructor (page: Page) {
    super(page);
    this.page = page;
    this.finishBtn = page.locator('[data-test="finish"]');
    this.cancelBtn = page.locator('[data-test="cancel"]');
    this.productName = page.locator('[data-test="product-name"]');
    this.productTotalPrice = page.locator('[data-test="product-price"]');
    this.tax = page.locator('[data-test="tax-amount"]');
    this.totalPrice = page.locator('[data-test="total-amount"]');
}

// Methods

async validateOverviewPageLoadUp() {
    await expect(this.finishBtn).toBeVisible(); 
}

async clickOnFinishButton() {
    await this.finishBtn.click();
}

async clickOnCancelButton() {
    await this.cancelBtn.click();
}

async getProductName() {
    return await this.productName.textContent();
}

async getProductTotalPrice() {
    return await this.productTotalPrice.textContent();
}

async getTax() {
    return await this.tax.textContent();
}

async getTotalPrice() {
    return await this.totalPrice.textContent();
}

}
