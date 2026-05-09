import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CompletePage extends BasePage {
    // Dm Members

readonly page: Page;
readonly backHomeBtn: Locator;
readonly completeText: Locator;

// Constuctor

constructor (page: Page) {
    super(page);
    this.page = page;
    this.backHomeBtn = page.locator('[data-test="back-to-products"]');
    this.completeText = page.locator('[data-test="complete-text"]');
}

// Methods

async validateCompletePageLoadUp() {
    await expect(this.completeText).toBeVisible(); 
}

async clickOnBackHomeButton() {
    await this.backHomeBtn.click();
}

}