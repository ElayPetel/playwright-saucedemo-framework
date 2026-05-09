import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
    readonly page: Page;
    readonly shoppingCart: Locator;
    readonly menuBtn: Locator;
    readonly productListLocator: Locator;
    readonly productPriceLocator: Locator;


    constructor (page: Page) {
        super(page);
        this.page = page
        this.shoppingCart = this.page.locator('[data-test="shopping-cart-link"]');
        this.menuBtn = this.page.getByRole('button', { name: 'Open Menu' });
        this.productListLocator = this.page.locator('[data-test="inventory-item"]');
        this.productPriceLocator = this.page.locator('.inventory_item_price');

    }

    async validateinventoryPageLoad() {
        await expect(this.productListLocator.first()).toBeVisible();
    }

    async getProductList(): Promise<Locator[]> {
        return await this.productListLocator.all();
        
    }

    async getProductPrice(product: Locator): Promise<number> {
        const priceTextRaw = await product.locator(this.productPriceLocator).textContent();
        const priceAsNumber = parseFloat(priceTextRaw?.replace('$', '') || '0');
        return await priceAsNumber;
    }

    async clickOnProduct(product: Locator) {
        await product.getByRole('img').click();
    }

    async getRandomProduct() {      
        // Variable Defintion
        
        const products = await this.getProductList();
        if(products.length === 0) {
            throw new Error('No products found on the inventory page.');
        }
        
        const randomIndex = Math.floor(Math.random() * products.length);

        // Code Section

        return await products[randomIndex];
    }

}