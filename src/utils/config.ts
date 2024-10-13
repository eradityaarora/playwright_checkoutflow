import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: process.env.BASE_URL || 'https://www.saucedemo.com',
    headless: process.env.HEADLESS === 'true',
  },
});


