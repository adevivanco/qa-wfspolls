import { test, expect } from '@playwright/test';
import {LoginSteps} from "../steps/loginSteps";

test('validate main elements', async ({ page }) => {
  await page.goto('http://localhost:8888/');

  const loginSteps = new LoginSteps(page);
  await loginSteps.validateMainElements();

});