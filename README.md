# SauceDemo and JSONPlaceholder Automation Tests with Playwright & TypeScript

This repository contains automated UI tests for the SauceDemo website and API tests for the JSONPlaceholder API, developed using **Playwright** and **TypeScript**.

## Table of Contents

-   [Features](#features)
-   [Technology Stack](#technology-stack)
-   [Project Structure](#project-structure)
-   [Setup and Installation](#setup-and-installation)
-   [Running Tests](#running-tests)
-   [Test Cases Documentation](#test-cases-documentation)
-   [Bug Reports](#bug-reports)
-   [Best Practices](#best-practices)
-   [Contributing](#contributing)
-   [License](#license)

## Features

-   **UI Tests for SauceDemo:**
    -   Successful login with valid credentials.
    -   Error message verification for invalid credentials.
    -   Password input masking verification.
    -   Complete purchase flow (add to cart, checkout, order confirmation).
    -   Implemented using **Page Object Model** for maintainability.
-   **API Tests for JSONPlaceholder:**
    -   CRUD (Create, Read, Update, Delete) operations for `/posts` endpoint.
    -   Validation of status codes (201, 200, 404) and response bodies.
-   **Comprehensive Documentation:** Detailed test cases and an example bug report.
-   **Well-organized Project Structure:** Easy to navigate and maintain.

## Technology Stack

-   **Test Automation Framework:** [Playwright](https://playwright.dev/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Package Manager:** npm

## Project Structure