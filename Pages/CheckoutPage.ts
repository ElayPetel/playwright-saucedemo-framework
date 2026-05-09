import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
    // Dm Members

readonly page: Page;
readonly CancelBtn: Locator;
readonly ContinueBtn: Locator;
readonly fNameField: Locator;
readonly lNameField: Locator;
readonly postalCodeField: Locator;   


// Constuctor

constructor (page: Page) {
    super(page);
    this.page = page;
    this.CancelBtn = page.locator('[data-test="cancel"]');
    this.ContinueBtn = page.locator('[data-test="continue"]');
    this.fNameField = page.locator('[data-test="firstName"]');
    this.lNameField = page.locator('[data-test="lastName"]');
    this.postalCodeField = page.locator('[data-test="postalCode"]');
}

// Method

async validateCheckoutPageLoadUp() {
    await expect(this.CancelBtn).toBeVisible(); 
}

async clickOnContinueButton() {
    await this.ContinueBtn.click();
}

async clickOnCancelButton() {
    await this.CancelBtn.click();
}

async enterFirstName(firstName: string) {
    await this.fNameField.fill(firstName);
}

async enterLastName(lastName: string) { 
    await this.lNameField.fill(lastName);
}

async enterPostalCode(postalCode: string) {
    await this.postalCodeField.fill(postalCode);
}

}