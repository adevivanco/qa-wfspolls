import {Locator, Page} from "@playwright/test";

export class RegisterPage {
    readonly page: Page;
    readonly loginPageHeader: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly goToLoginEnglishLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginPageHeader = this.page.locator("//div[@class='app-main-header']");
        this.usernameInput = this.page.locator("//input[@id='email']");
        this.passwordInput =  this.page.locator("//input[@id='password']");
        this.goToLoginEnglishLink = this.page.locator("//*[text()='back to log in']/parent::a")
    }

    async waitForUrl(baseUrl: string): Promise<void> {
        await this.page.waitForURL(`${baseUrl}/register`);
    }

    async waitForLoginPageHeader(): Promise<void> {
        await this.page.waitForSelector("//div[@class='app-main-header']", { state: "attached" });
    }

    async waitForGoToBackToLoginEnglishLink(): Promise<void> {
        await this.page.waitForSelector("//*[text()='back to log inr']/parent::a", { state: "attached" });
    }

    async waitForUsernameInput(): Promise<void> {
        await this.page.waitForSelector("//input[@id='email']", { state: "attached" });
    }

    async waitForPasswordInput(): Promise<void> {
        await this.page.waitForSelector("//input[@id='password']", { state: "attached"   });
    }
}