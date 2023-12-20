import {Locator, Page} from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly logoutLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logoutLink = this.page.locator("//*[text()='logout']/parent::a");
    }
    async getUsernameContainer(username: String): Promise<Locator> {
        await this.page.waitForSelector(`//*[text()='${username}']`, {state: "attached"});
        return this.page.locator(`//*[text()='${username}']`);
    }

    async waitForLogoutLink(): Promise<void> {
        await this.page.waitForSelector("//*[text()='logout']/parent::a", {state: "attached"});
    }
}