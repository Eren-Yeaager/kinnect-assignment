import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Given('I have {int} item in the cart', 
  async function (this: CustomWorld, itemCount: number) {
    await this.loginPage.goto();
    const username = process.env.SAUCEDEMO_USERNAME || 'standard_user';
    const password = process.env.SAUCEDEMO_PASSWORD || 'secret_sauce';
    await this.loginPage.login(username, password);
    
    await this.productsPage.addProductToCart('Sauce Labs Backpack');
    const cartCount = await this.productsPage.getCartBadgeCount();
    expect(cartCount).toBe(itemCount.toString());
  }
);

When('I proceed to checkout and enter details', 
  async function (this: CustomWorld) {
    await this.cartPage.goto();
    await this.cartPage.proceedToCheckout();
    await this.checkoutPage.fillCheckoutInfo('John', 'Doe', '12345');
    await this.checkoutPage.completeOrder();
  }
);

Then('I should see the order confirmation message', 
  async function (this: CustomWorld) {
    const confirmationMessage = await this.checkoutPage.getConfirmationMessage();
    expect(confirmationMessage).toContain('Thank you for your order');
  }
);

