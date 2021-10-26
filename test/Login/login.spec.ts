import { test, expect } from '@playwright/test';
import { AuthPage } from '../../pages/Login/auth';


test.skip('Verify user can login with correct email and password', async ({ page }) => {
  const loginPage = new AuthPage(page);
  await loginPage.open();
  await loginPage.login('dev', 'pen-dev');
  await expect(page).toHaveURL('https://pen-stage.udata.id/page/view/home');
});

