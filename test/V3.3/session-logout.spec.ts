import { test, expect } from '@playwright/test';
import { AuthPage } from '../../pages/Login/auth';


test('Verify user can logout', async ({ page }) => {
  const authPage = new AuthPage(page);
  await authPage.open();
  await authPage.login('dev', 'pen-dev');
  await authPage.logout();
  await expect(page).toHaveURL('https://pen-stage.udata.id/page/index');
});


test('Verify after logout user cannnot use the back button', async ({ page }) => {
  const authPage = new AuthPage(page);
  await authPage.open();
  await authPage.login('dev', 'pen-dev');
  await expect(page).toHaveURL('https://pen-stage.udata.id/page/view/home');
  await authPage.logout();
  await page.goto('https://pen-stage.udata.id/page/index');
  await expect(page).toHaveURL('https://pen-stage.udata.id/page/index');
});





