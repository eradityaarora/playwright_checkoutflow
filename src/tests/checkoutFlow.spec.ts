import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Checkout Flow', () => {
  test('User selects 3 random items and completes checkout successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.navigate();

    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.verifyLoginSuccess();

    await productsPage.selectRandomItems(3);

    await productsPage.goToCart();

    await cartPage.verifyCartItems(3);

    await cartPage.proceedToCheckout();

    await checkoutPage.enterCheckoutInformation('Aditya', 'Arora', '560008');

    await checkoutPage.finishCheckout();

    await checkoutPage.verifyCheckoutSuccess();
  });
});
