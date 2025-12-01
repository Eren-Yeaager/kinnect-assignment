import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Given('I open the SauceDemo login page', async function (this: CustomWorld) {
  await this.loginPage.goto();
});

When('I login with username {string} and password {string}', 
  async function (this: CustomWorld, username: string, password: string) {
    await this.loginPage.login(username, password);
  }
);

When('I login with username {string}', 
  async function (this: CustomWorld, username: string) {
    const password = process.env.SAUCEDEMO_PASSWORD || 'secret_sauce';
    await this.loginPage.login(username, password);
  }
);

Then('I should be redirected to the Products page', 
  async function (this: CustomWorld) {
    const isProductsPage = await this.productsPage.isProductsPage();
    expect(isProductsPage).toBe(true);
  }
);

Then('I should see an error message', 
  async function (this: CustomWorld) {
    const errorMessage = await this.loginPage.getErrorMessage();
    expect(errorMessage).toBeTruthy();
    expect(errorMessage.length).toBeGreaterThan(0);
  }
);
