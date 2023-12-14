import {Locator, Page} from "@playwright/test";

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;

    }

    async waitForUrl(): Promise<void> {
        await this.page.waitForURL("http://localhost:8888/login");
    }

    get loginPageHeader(): Locator {
        return this.page.locator("//div[@class='app-main-header']");
    }

    get usernameInput(): Locator {
        return this.page.locator("//input[@id='email']");
    }

    get passwordInput(): Locator {
        return this.page.locator("//input[@id='password']");
    }

    async waitForLoginPageHeader(): Promise<void> {
        await this.page.waitForSelector("//div[@class='app-main-header']", { state: "attached" });
    }

    async waitForUsernameInput(): Promise<void> {
        await this.page.waitForSelector("//input[@id='email']", { state: "attached" });
    }

    async waitForPasswordInput(): Promise<void> {
        await this.page.waitForSelector("//input[@id='password']", { state: "attached"   });
    }
}