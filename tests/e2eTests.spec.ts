import { test, expect } from '@playwright/test';
import { LoginSteps } from "../steps/loginSteps";
import { RegisterSteps } from "../steps/registerSteps";
import { PlayerPollsSteps } from "../steps/playerPollsSteps";

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:8888/login');
});

test('validate main elements', async ({ page }) => {
  const loginSteps = new LoginSteps(page);

  await loginSteps.waitForUrl();
  await loginSteps.validateMainElements();
  await loginSteps.clickOnRegisterLink();
});

test('validate main elements and navigate to registration page', async ({ page }) => {
  const loginSteps = new LoginSteps(page);
  const registerSteps:RegisterSteps = new RegisterSteps(page);

  await loginSteps.waitForUrl();
  await loginSteps.validateMainElements();
  await loginSteps.clickOnRegisterLink();
  await registerSteps.waitForUrl();
});

test('validate main elements and login using valid credentials', async ({ page }) => {
  const loginSteps = new LoginSteps(page);
  const playerPollsSteps  = new PlayerPollsSteps(page);

  await loginSteps.waitForUrl();
  await loginSteps.validateMainElements();
  await loginSteps.enterUsernameAndPassword('andydv', 'Test1234');
  await loginSteps.clickLogInButton();

  await playerPollsSteps.waitForUrl();
  await playerPollsSteps.validateMainElements();
});