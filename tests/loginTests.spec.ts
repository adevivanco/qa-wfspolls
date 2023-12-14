import { test, expect } from '@playwright/test';
import { LoginSteps } from "../steps/loginSteps";

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:8888/login');
});

test('validate main elements', async ({ page }) => {
  const loginSteps = new LoginSteps(page);

  await loginSteps.waitForUrl();
  loginSteps.validateMainElements();
  await loginSteps.clickOnRegisterLink();
});