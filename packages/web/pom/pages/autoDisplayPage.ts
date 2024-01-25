import {FrameLocator, Locator, Page} from "@playwright/test";

export class AutoDisplayPage {
    readonly page: Page;
    readonly playVideoLocator: Locator;
    readonly videoContainer: Locator;
    readonly photosTab: Locator;
    readonly initVideoButton: Locator;
    constructor(page: Page) {
        this.page = page;
        this.playVideoLocator = this.page.locator("//img[@class='dvp_infront_open' and @data-vin='W1N4M4HB3NW175360']");
        this.videoContainer = this.page.locator("//html//body/div[@class='InitialContainer']");
        this.photosTab = this.page.frameLocator('#dvp_infront_ifrvideo').getByText("Photos");
        this.initVideoButton = this.page.frameLocator('#dvp_infront_ifrvideo').getByTitle("Play/Pause video");
    }

    async waitForUrl(): Promise<void> {
        await this.page.waitForURL("https://www.mbhuntington.com/used-vehicles/");
    }


    async waitForPlayVideoLocator(): Promise<void> {
        await this.page.waitForSelector("//img[@class='dvp_infront_open' and @data-vin='W1N4M4HB3NW175360']", { state: "attached" });
    }

}