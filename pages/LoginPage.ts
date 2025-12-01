import { Page, Locator } from '@playwright/test';

export const LoginPage = (page: Page) => ({
  get usernameInput(): Locator {
    return page.locator('#user-name');
  },

  get passwordInput(): Locator {
    return page.locator('#password');
  },

  get loginButton(): Locator {
    return page.locator('#login-button');
  },

  get errorMessage(): Locator {
    return page.locator('[data-test="error"]');
  },

  async goto(): Promise<void> {
    await page.goto('/');
  },

  async login(username: string, password: string): Promise<void> {
    await page.locator('#user-name').fill(username);
    await page.locator('#password').fill(password);
    await page.locator('#login-button').click();
  },

  async getErrorMessage(): Promise<string> {
    return await page.locator('[data-test="error"]').textContent() || '';
  }
});
