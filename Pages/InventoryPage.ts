import { Page, Locator, expect } from '@playwright/test';
import { Product } from '@/Interfaces/Product';

export class InventoryPage {
    readonly page: Page;
    readonly shoppingCart: Locator;
    readonly menuBtn: Locator;
    readonly productListLocator: Locator;
    readonly productImageLocator: Locator


    constructor (page: Page) {
        this.page = page
        this.shoppingCart = page.locator('[data-test="shopping-cart-link"]');
        this.menuBtn = page.getByRole('button', { name: 'Open Menu' });
        this.productListLocator = page.locator('[data-test="inventory-item"]');
        this.productImageLocator = page.locator('inventory_item_img');
    }

    async validateinventoryPageLoad() {
        await expect(this.productListLocator).toBeVisible();
    }

    async getProductList(): Promise<Locator[]> {
        return await this.productListLocator.all();
    }

    async clickOnRandomProduct() {
        // Variable Defintion
        
        const products = await this.getProductList();
        const randomIndex = Math.floor(Math.random() * products.length);

        // Code Section

        await products[randomIndex].locator(this.productImageLocator).click();
    }

    
}