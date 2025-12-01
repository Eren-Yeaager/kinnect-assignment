import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  loginPage!: ReturnType<typeof LoginPage>;
  productsPage!: ReturnType<typeof ProductsPage>;
  cartPage!: ReturnType<typeof CartPage>;
  checkoutPage!: ReturnType<typeof CheckoutPage>;

  async init() {
    const headless = process.env.HEADLESS === 'true' || process.env.CI === 'true';
    this.browser = await chromium.launch({ headless });
    this.context = await this.browser.newContext({
      baseURL: 'https://www.saucedemo.com',
      viewport: { width: 1920, height: 1080 }
    });
    this.page = await this.context.newPage();
    this.loginPage = LoginPage(this.page);
    this.productsPage = ProductsPage(this.page);
    this.cartPage = CartPage(this.page);
    this.checkoutPage = CheckoutPage(this.page);
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

setWorldConstructor(CustomWorld);
