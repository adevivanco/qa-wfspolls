import { test, expect } from '@playwright/test';
import { LoginSteps } from "../steps/loginSteps";
import { RegisterSteps } from "../steps/registerSteps";
import { PlayerPollsSteps } from "../steps/playerPollsSteps";
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

test('validate main elements and navigate to registration page', async ({ page }) => {
  const loginSteps = new LoginSteps(page);
  const registerSteps:RegisterSteps = new RegisterSteps(page);

  await loginSteps.waitForUrl(webEnvironment.BASE_URL);
  await loginSteps.validateMainElements();
  await loginSteps.clickOnRegisterLink();
  await registerSteps.waitForUrl(webEnvironment.BASE_URL);
});

test('validate main elements and login using valid credentials', async ({ page }) => {
  const loginSteps = new LoginSteps(page);
  const playerPollsSteps  = new PlayerPollsSteps(page);

  await loginSteps.waitForUrl(webEnvironment.BASE_URL);
  await loginSteps.validateMainElements();
  await loginSteps.enterUsernameAndPassword(webEnvironment.USERNAME, webEnvironment.USER_PASSWORD);
  await loginSteps.clickLogInButton();

  await playerPollsSteps.waitForUrl(webEnvironment.BASE_URL);
  await playerPollsSteps.validateMainElements();
});