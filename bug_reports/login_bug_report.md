# Bug Report: Incorrect Error Message for Specific Invalid User

* **Title:** Login Error Message Inaccuracy for Locked-Out User

* **Bug Description:**
  When attempting to log in with the `locked_out_user` credentials, the system displays a generic "Username and password do not match" error message instead of a specific message indicating that the user's account is locked. This can lead to user confusion as the generic message implies incorrect credentials, while the actual issue is account lockout.

* **Steps to Reproduce:**
    1.  Navigate to the SauceDemo login page: `https://www.saucedemo.com/`
    2.  Enter "locked_out_user" into the Username field.
    3.  Enter "secret_sauce" into the Password field.
    4.  Click the "Login" button.

* **Observed Result:**
  An error message is displayed below the login form: "Epic sadface: Username and password do not match any user in this service". The user is not logged in.

* **Expected Result:**
  The system should display a specific error message indicating that the account is locked, such as "Epic sadface: Sorry, this user has been locked out." or similar, to clearly communicate the reason for login failure.

* **Environment:**
    * **Browser:** Chrome Version 126.0.6478.127 (Official Build) (64-bit) 
    * **Operating System:** Windows 10 
    * **Application URL:** `https://www.saucedemo.com/`
    * **Playwright Version:** 1.x.x (or your installed version)