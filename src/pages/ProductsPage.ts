import { Page, expect } from '@playwright/test';
import { shuffleArray } from '../utils/helpers';

export class ProductsPage {
  private page: Page;
  private inventoryItem = 'div.inventory_item';
  private addToCartButton = 'button.btn_inventory';
  private cartLink = '.shopping_cart_link';

  constructor(page: Page) {
    this.page = page;
  }

  async selectRandomItems(count: number = 3) {
    const items = await this.page.$$(this.inventoryItem);
    if (items.length < count) {
      throw new Error(`Not enough items to select. Available: ${items.length}`);
    }

    const shuffledItems = shuffleArray(items);
    const selectedItems = shuffledItems.slice(0, count);

    for (const item of selectedItems) {
      const addButton = await item.$(this.addToCartButton);
      await addButton?.click();
    }
  }

  async goToCart() {
    await this.page.click(this.cartLink);
  }
}
