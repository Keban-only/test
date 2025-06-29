import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page-objects/LoginPage';
import { ProductsPage } from '../../page-objects/ProductsPage';
import { CartPage } from '../../page-objects/CartPage';
import { CheckoutPage } from '../../page-objects/CheckoutPage';
import users from '../fixtures/users.json';

test.describe('Product Purchase Flow', () => {
    let loginPage: LoginPage;
    let productsPage: ProductsPage;
    let cartPage: CartPage;
    let checkoutPage: CheckoutPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        productsPage = new ProductsPage(page);
        cartPage = new CartPage(page);
        checkoutPage = new CheckoutPage(page);

        await loginPage.navigate();
        await loginPage.login(users.validUser.username, users.validUser.password);
        await productsPage.verifyOnProductsPage();
    });

    test('should complete a purchase successfully', async ({ page }) => {
        // Add products to cart
        await productsPage.addProductToCart('Sauce Labs Backpack');
        await productsPage.addProductToCart('Sauce Labs Bike Light');

        // Go to cart and verify items
        await productsPage.goToCart();
        await cartPage.verifyProductInCart('Sauce Labs Backpack');
        await cartPage.verifyProductInCart('Sauce Labs Bike Light');

        // Proceed to checkout and fill information
        await cartPage.proceedToCheckout();
        await checkoutPage.fillInformation('John', 'Doe', '12345');

        // Verify overview and finish purchase
        await checkoutPage.verifyOverviewPage();
        await checkoutPage.finishPurchase();

        // Verify order confirmation
        await checkoutPage.verifyOrderConfirmation();
    });
});