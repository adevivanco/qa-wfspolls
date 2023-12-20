import {Locator, Page} from "@playwright/test";

export class PlayerPollsPage {
    readonly page: Page;
    readonly manageMyPollsHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.manageMyPollsHeader = this.page.locator("//span[contains(text(),'Manage my polls')]");
    }

    async waitForUrl(baseUrl: string): Promise<void> {
        await this.page.waitForURL(`${baseUrl}/player-polls`);
    }

    async waitForManageMyPollsHeader(): Promise<void> {
        await this.page.waitForSelector("//span[contains(text(),'Manage my polls')]", { state: "attached" });
    }
}