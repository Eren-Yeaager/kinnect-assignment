import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Given('I am logged in as {string}', 
  async function (this: CustomWorld, username: string) {
    await this.loginPage.goto();
    const password = process.env.SAUCEDEMO_PASSWORD || 'secret_sauce';
    await this.loginPage.login(username, password);
    const isProductsPage = await this.productsPage.isProductsPage();
    expect(isProductsPage).toBe(true);
  }
);

When('I add the product {string} to the cart', 
  async function (this: CustomWorld, productName: string) {
    await this.productsPage.addProductToCart(productName);
  }
);

Then('the cart icon badge should show {string}', 
  async function (this: CustomWorld, expectedCount: string) {
    const actualCount = await this.productsPage.getCartBadgeCount();
    expect(actualCount).toBe(expectedCount);
  }
);

