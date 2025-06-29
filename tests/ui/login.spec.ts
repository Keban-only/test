import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page-objects/LoginPage';
import { ProductsPage } from '../../page-objects/ProductsPage';
import users from '../fixtures/users.json'

test.describe('Login Functionality', () => {
    let loginPage: LoginPage;
    let productsPage: ProductsPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        productsPage = new ProductsPage(page);
        await loginPage.navigate();
    });

    test('should successfully log in with valid credentials', async () => {
        await loginPage.login(users.validUser.username, users.validUser.password);
        await productsPage.verifyOnProductsPage();
    });

    test('should display an error message for invalid credentials', async () => {
        await loginPage.login(users.invalidUser.username, users.invalidUser.password);
        await loginPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
    });

    test('should mask the password input', async ({ page }) => {
        await loginPage.passwordInput.type(users.validUser.password);
        await loginPage.verifyPasswordInputMasking();
    });
});