import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  private page: Page;
  private firstNameInput = 'input#first-name';
  private lastNameInput = 'input#last-name';
  private postalCodeInput = 'input#postal-code';
  private continueButton = 'input#continue';
  private finishButton = 'button#finish';
  private completeHeader = '.complete-header';

  constructor(page: Page) {
    this.page = page;
  }

  async enterCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.postalCodeInput, postalCode);
    await this.page.click(this.continueButton);
  }

  async finishCheckout() {
    await this.page.click(this.finishButton);
  }

  async verifyCheckoutSuccess() {
    await expect(this.page.locator(this.completeHeader)).toHaveText('Thank you for your order!');
  }
}
