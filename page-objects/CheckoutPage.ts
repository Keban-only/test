import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly completeHeader: Locator;
    readonly completeText: Locator;
    readonly summaryTotalLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.finishButton = page.locator('[data-test="finish"]');
        this.completeHeader = page.locator('.complete-header');
        this.completeText = page.locator('.complete-text');
        this.summaryTotalLabel = page.locator('.summary_total_label');
    }

    async fillInformation(firstName: string, lastName: string, zipCode: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(zipCode);
        await this.continueButton.click();
        await expect(this.page).toHaveURL(/.*checkout-step-two.html/);
    }

    async verifyOverviewPage() {
        await expect(this.summaryTotalLabel).toBeVisible();
    }

    async finishPurchase() {
        await this.finishButton.click();
        await expect(this.page).toHaveURL(/.*checkout-complete.html/);
    }

    async verifyOrderConfirmation() {
        await expect(this.completeHeader).toHaveText('Thank you for your order!');
        await expect(this.completeText).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    }
}