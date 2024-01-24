import {expect, Page, test} from "@playwright/test";
import {AutoDisplayPage} from "../pom/pages/autoDisplayPage";

export class AutoDisplaySteps {

    readonly autoDisplayPage: AutoDisplayPage;

    constructor(page: Page) {
        this.autoDisplayPage = new AutoDisplayPage(page);
    }

    async waitForUrl(): Promise<void> {
        await test.step("wait for Login Page URL", async () => {
            await this.autoDisplayPage.waitForUrl();
        })
    }

    async validateMainElementsAndClick(): Promise<void> {
        await test.step("validate main elements in page", async () => {
            await this.autoDisplayPage.page.waitForLoadState("load");
            await this.autoDisplayPage.waitForPlayVideoLocator();
            expect(this.autoDisplayPage.playVideoLocator.isVisible()).toBeTruthy();
            await this.autoDisplayPage.playVideoLocator.click();
        });
    }
    async waitForVideoContainerAndClickPhotos(): Promise<void> {
        await test.step("wait for video container", async () => {
            await this.autoDisplayPage.page.waitForLoadState("load");
            expect(this.autoDisplayPage.videoContainer.isVisible()).toBeTruthy();
            await this.autoDisplayPage.page.frameLocator('#dvp_infront_ifrvideo').getByText('Photos').click();
            await this.autoDisplayPage.page.waitForTimeout(5000);
        });
    }


}