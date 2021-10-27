import { test, expect } from '@playwright/test';
import { AuthPage } from '../../pages/Login/auth';


test.skip('Verify user can login with correct email and password', async ({ page }) => {
  const loginPage = new AuthPage(page);
  await loginPage.open();
  await loginPage.login('dev', 'pen-dev');
  await expect(page).toHaveURL('https://pen-stage.udata.id/page/view/home');
});

test.only('2.1.8 Verify paste functionality in password field', async ({ page }) => {
  const loginPage = new AuthPage(page);
  await loginPage.open();
  await loginPage.loginUsername('dev');
  await loginPage.usernameBox();
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Control+C');
  await loginPage.passwordBox();
  await page.keyboard.press('Control+V');
});
