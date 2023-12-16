import {Locator, Page} from "@playwright/test";

export class PlayerPollsPage {
    readonly page: Page;
    readonly manageMyPollsHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.manageMyPollsHeader = this.page.locator("//span[contains(text(),'Manage my polls')]");
    }

    async waitForUrl(): Promise<void> {
        await this.page.waitForURL("http://localhost:8888/player-polls");
    }


    async waitForManageMyPollsHeader(): Promise<void> {
        await this.page.waitForSelector("//span[contains(text(),'Manage my polls')]", { state: "attached" });
    }
}