import { test, expect } from '@playwright/test';
import { LoginSteps } from "../steps/loginSteps";
import  webEnvironment from "../environment/webEnvironment";
test.beforeEach(async ({ page }) => {
  await page.goto(`${webEnvironment.BASE_URL}/login`);
});

test('validate main elements', async ({ page }) => {
  const loginSteps = new LoginSteps(page);

  await loginSteps.waitForUrl(webEnvironment.BASE_URL);
  await loginSteps.validateMainElements();
  await loginSteps.clickOnRegisterLink();
});

