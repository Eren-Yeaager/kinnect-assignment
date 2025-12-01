import { Page, Locator } from '@playwright/test';

export const CheckoutPage = (page: Page) => ({
  get firstNameInput(): Locator {
    return page.locator('#first-name');
  },

  get lastNameInput(): Locator {
    return page.locator('#last-name');
  },

  get postalCodeInput(): Locator {
    return page.locator('#postal-code');
  },

  get continueButton(): Locator {
    return page.locator('#continue');
  },

  get finishButton(): Locator {
    return page.locator('#finish');
  },

  get confirmationMessage(): Locator {
    return page.locator('.complete-header');
  },

  async fillCheckoutInfo(firstName: string, lastName: string, postalCode: string): Promise<void> {
    await page.locator('#first-name').fill(firstName);
    await page.locator('#last-name').fill(lastName);
    await page.locator('#postal-code').fill(postalCode);
    await page.locator('#continue').click();
  },

  async completeOrder(): Promise<void> {
    await page.locator('#finish').click();
  },

  async getConfirmationMessage(): Promise<string> {
    return await page.locator('.complete-header').textContent() || '';
  }
});

