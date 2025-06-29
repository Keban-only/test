import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {
    readonly page: Page;
    readonly productsTitle: Locator;
    readonly shoppingCartLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productsTitle = page.locator('.title');
        this.shoppingCartLink = page.locator('.shopping_cart_link');
    }

    async verifyOnProductsPage() {
        await expect(this.page).toHaveURL(/.*inventory.html/);
        await expect(this.productsTitle).toHaveText('Products');
    }

    async addProductToCart(productName: string) {
        const productItem = this.page.locator('.inventory_item', { hasText: productName });
        await productItem.getByRole('button', { name: 'Add to cart' }).click();
    }

    async goToCart() {
        await this.shoppingCartLink.click();
        await expect(this.page).toHaveURL(/.*cart.html/);
    }
}