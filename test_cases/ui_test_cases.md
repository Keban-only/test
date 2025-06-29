# UI Test Cases - SauceDemo

## Test Suite: Login Functionality

### Test Case 1: Successful Login with Valid Credentials
* **Test Title:** TC-UI-001 - Valid Login
* **Description:** Verifies that a user can successfully log in using valid credentials.
* **Preconditions:**
    * Navigate to the SauceDemo login page (`https://www.saucedemo.com/`).
* **Test Steps:**
    1.  Open the browser and navigate to `https://www.saucedemo.com/`.
    2.  Enter "standard_user" into the Username field.
    3.  Enter "secret_sauce" into the Password field.
    4.  Click the "Login" button.
* **Expected Results:**
    * The user is successfully redirected to the product page (`/inventory.html`).
    * The page title is "Products".

### Test Case 2: Error Message for Invalid Credentials
* **Test Title:** TC-UI-002 - Invalid Login Error
* **Description:** Verifies that an appropriate error message is displayed when attempting to log in with invalid credentials.
* **Preconditions:**
    * Navigate to the SauceDemo login page (`https://www.saucedemo.com/`).
* **Test Steps:**
    1.  Open the browser and navigate to `https://www.saucedemo.com/`.
    2.  Enter "locked_out_user" (or any invalid username) into the Username field.
    3.  Enter "wrong_password" (or any invalid password) into the Password field.
    4.  Click the "Login" button.
* **Expected Results:**
    * An error message element is displayed.
    * The error message text is "Epic sadface: Username and password do not match any user in this service".

### Test Case 3: Password Input Masking
* **Test Title:** TC-UI-003 - Password Masking
* **Description:** Verifies that the characters entered into the password field are masked (hidden).
* **Preconditions:**
    * Navigate to the SauceDemo login page (`https://www.saucedemo.com/`).
* **Test Steps:**
    1.  Open the browser and navigate to `https://www.saucedemo.com/`.
    2.  Locate the password input field.
    3.  Type any characters into the password field.
* **Expected Results:**
    * The `type` attribute of the password input field is "password", causing characters to be displayed as masking symbols (e.g., •).

## Test Suite: Complete Flow for Purchasing

### Test Case 4: Successful Product Purchase Flow
* **Test Title:** TC-UI-004 - Complete Purchase
* **Description:** Verifies the complete end-to-end flow for purchasing items, from adding to cart to order confirmation.
* **Preconditions:**
    * Successfully logged in as a "standard_user".
    * At least one item is available for purchase.
* **Test Steps:**
    1.  Log in as a "standard_user".
    2.  Add "Sauce Labs Backpack" to the cart.
    3.  Add "Sauce Labs Bike Light" to the cart.
    4.  Click the shopping cart icon.
    5.  Verify both items are in the cart.
    6.  Click the "Checkout" button.
    7.  Fill in "First Name", "Last Name", and "Postal Code" (e.g., John, Doe, 12345).
    8.  Click the "Continue" button.
    9.  Review the order details on the "Checkout: Overview" page.
    10. Click the "Finish" button.
* **Expected Results:**
    * The user is redirected to the "Checkout: Complete!" page.
    * A confirmation message "Thank you for your order!" is displayed.
    * A descriptive text "Your order has been dispatched, and will arrive just as fast as the pony can get there!" is displayed.