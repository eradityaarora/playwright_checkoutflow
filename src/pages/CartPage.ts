import { Page, expect } from '@playwright/test';

export class CartPage {
  private page: Page;
  private cartItem = 'div.cart_item';
  private checkoutButton = 'button#checkout';

  constructor(page: Page) {
    this.page = page;
  }

  async verifyCartItems(expectedCount: number = 3) {
    const items = await this.page.$$(this.cartItem);
    expect(items.length).toBe(expectedCount);
  }

  async proceedToCheckout() {
    await this.page.click(this.checkoutButton);
  }
}
