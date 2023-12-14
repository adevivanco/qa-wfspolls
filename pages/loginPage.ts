import {Locator, Page} from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly loginPageHeader: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly goToRegisterEnglishLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginPageHeader = this.page.locator("//div[@class='app-main-header']");
        this.usernameInput = this.page.locator("//input[@id='email']");
        this.passwordInput =  this.page.locator("//input[@id='password']");
        this.goToRegisterEnglishLink = this.page.locator("//*[text()='Click here to register']/parent::a")
    }

    async waitForUrl(): Promise<void> {
        await this.page.waitForURL("http://localhost:8888/login");
    }


    async waitForLoginPageHeader(): Promise<void> {
        await this.page.waitForSelector("//div[@class='app-main-header']", { state: "attached" });
    }

    async waitForGoToRegisterEnglishLink(): Promise<void> {
        await this.page.waitForSelector("//*[text()='Click here to register']/parent::a", { state: "attached" });
    }

    async waitForUsernameInput(): Promise<void> {
        await this.page.waitForSelector("//input[@id='email']", { state: "attached" });
    }

    async waitForPasswordInput(): Promise<void> {
        await this.page.waitForSelector("//input[@id='password']", { state: "attached"   });
    }
}