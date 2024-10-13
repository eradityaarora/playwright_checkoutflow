import { Page, expect } from '@playwright/test';

export class LoginPage {
  private page: Page;
  private usernameInput = 'input#user-name';
  private passwordInput = 'input#password';
  private loginButton = 'input#login-button';

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async verifyLoginSuccess() {
    await expect(this.page.locator('.title')).toHaveText('Products');
  }
}
