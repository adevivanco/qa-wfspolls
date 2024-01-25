import { test, expect } from '@playwright/test';
import { AutoDisplaySteps } from "../steps/autoDisplaySteps";
import  webEnvironment from "../environment/webEnvironment";
test.beforeEach(async ({ page }) => {
  await page.goto("https://www.mbhuntington.com/used-vehicles/");
});


test('video test - photos tab', async ({ page }) => {
  const autoDisplaySteps = new AutoDisplaySteps(page);

  await autoDisplaySteps.waitForUrl();
  await autoDisplaySteps.validateMainElementsAndClick();
  await autoDisplaySteps.waitForVideoContainerAndClickPhotos();
});
