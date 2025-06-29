import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly checkoutButton: Locator;
    readonly cartList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.cartList = page.locator('.cart_list');
    }

    async verifyProductInCart(productName: string) {
        await expect(this.cartList.locator('.inventory_item_name', { hasText: productName })).toBeVisible();
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
        await expect(this.page).toHaveURL(/.*checkout-step-one.html/);
    }
}