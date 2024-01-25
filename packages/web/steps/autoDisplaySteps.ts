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
        await test.step("wait for video container, click photos tab", async () => {
            expect(this.autoDisplayPage.videoContainer.isVisible()).toBeTruthy();
            await this.autoDisplayPage.photosTab.click();
            await this.autoDisplayPage.page.waitForTimeout(5000);
        });
    }

    async waitForVideoContainerAndClickPlayVideo(): Promise<void> {
        await test.step("wait for video container, click play video", async () => {
            expect(this.autoDisplayPage.videoContainer.isVisible()).toBeTruthy();
            let myFrames = this.autoDisplayPage.page.frames();
            console.log("#frames: " + myFrames.length)
            myFrames.map((f) => console.log(f.name()));

            await this.autoDisplayPage.page.frameLocator('#dvp_infront_ifrvideo').getByText('Video').click();
            await this.autoDisplayPage.page.waitForTimeout(5000);
            // todo: figure out iframe on top
             myFrames = this.autoDisplayPage.page.frames();
            console.log("#frames: " + myFrames.length)
            myFrames.map((f) => console.log(f.name()));
            await  this.autoDisplayPage.page.frameLocator('#dvp_infront_ifrvideo').frameLocator('#ifrContainer').locator('#init').click();
            await this.autoDisplayPage.page.waitForTimeout(45000);
        });
    }


}