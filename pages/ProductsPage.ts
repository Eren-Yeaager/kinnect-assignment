import { Page, Locator } from '@playwright/test';

export const ProductsPage = (page: Page) => ({
  get title(): Locator {
    return page.locator('.title');
  },

  get cartIcon(): Locator {
    return page.locator('.shopping_cart_link');
  },

  get cartBadge(): Locator {
    return page.locator('.shopping_cart_badge');
  },

  get productItems(): Locator {
    return page.locator('.inventory_item');
  },

  async isProductsPage(): Promise<boolean> {
    await page.waitForURL('**/inventory.html');
    const titleText = await this.title.textContent();
    return titleText !== null && titleText.trim() === 'Products';
  },

  async addProductToCart(productName: string): Promise<void> {
    const product = page.locator('.inventory_item').filter({ hasText: productName });
    await product.locator('button').first().click();
  },

  async getCartBadgeCount(): Promise<string> {
    const badge = page.locator('.shopping_cart_badge');
    const count = await badge.textContent();
    return (count && count.trim()) || '0';
  }
});
