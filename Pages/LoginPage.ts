// pages/LoginPage.ts
import { Page, Locator, expect } from '@playwright/test';

export class LoginPage { 

    // DM Members
    readonly page: Page; 
    readonly usernameInput: Locator; 
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    // Constructor
    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#user-name'); 
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    // Methods
    async login(user: string, pass: string) {
        await this.usernameInput.fill(user);
        await this.passwordInput.fill(pass);
        await this.loginButton.click();
    }

    async validateLoginPageLoad() {
        await expect(this.usernameInput).toBeVisible();
    }

    async enterUsername(user: string) {
        await this.usernameInput.fill(user);
    }

    async enterPassword(pass: string) {
        await this.passwordInput.fill(pass);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }
}