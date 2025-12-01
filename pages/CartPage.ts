import { Page, Locator } from '@playwright/test';

export const CartPage = (page: Page) => ({
  get checkoutButton(): Locator {
    return page.locator('#checkout');
  },

  get cartItems(): Locator {
    return page.locator('.cart_item');
  },

  async goto(): Promise<void> {
    await page.goto('/cart.html');
  },

  async proceedToCheckout(): Promise<void> {
    await page.locator('#checkout').click();
  },

  async getCartItemCount(): Promise<number> {
    return await page.locator('.cart_item').count();
  }
});

