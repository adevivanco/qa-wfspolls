import {expect, Page, test} from "@playwright/test";
import {LoginPage} from "../pages/loginPage";

export class LoginSteps {

    readonly loginPage: LoginPage;

    constructor(page: Page) {
        this.loginPage = new LoginPage(page);
    }

    async waitForUrl(): Promise<void> {
        test.step("wait for Login Page URL", async () => {
            await this.loginPage.waitForUrl();
        })
    }

     async validateMainElements(): Promise<void> {
        await test.step("validate main elements in page", async () => {
            await this.loginPage.page.waitForLoadState("load");

            await this.loginPage.waitForLoginPageHeader();
            await this.loginPage.waitForGoToRegisterEnglishLink();
            await this.loginPage.waitForUsernameInput();
            await this.loginPage.waitForPasswordInput();

            expect(this.loginPage.loginPageHeader.isVisible()).toBeTruthy();
            expect(this.loginPage.usernameInput.isVisible()).toBeTruthy();
            expect(this.loginPage.passwordInput.isVisible()).toBeTruthy();
            expect(this.loginPage.goToRegisterEnglishLink.isVisible()).toBeTruthy();
        });
    }

    async clickOnRegisterLink(): Promise<void> {
        await test.step("click on register link", async () => {
            await this.loginPage.goToRegisterEnglishLink.click();
        });
    }
}