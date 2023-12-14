import {expect, Page, test} from "@playwright/test";
import {RegisterPage} from "../pages/registerPage";

export class RegisterSteps {

    readonly registerPage: RegisterPage;

    constructor(page: Page) {
        this.registerPage = new RegisterPage(page);
    }

    async waitForUrl(): Promise<void> {
        test.step("wait for Login Page URL", async () => {
            await this.registerPage.waitForUrl();
        })
    }

     async validateMainElements(): Promise<void> {
        await test.step("validate main elements in page", async () => {
            await this.registerPage.page.waitForLoadState("load");

            await this.registerPage.waitForLoginPageHeader();
            await this.registerPage.waitForGoToBackToLoginEnglishLink();
            await this.registerPage.waitForUsernameInput();
            await this.registerPage.waitForPasswordInput();

            expect(this.registerPage.loginPageHeader.isVisible()).toBeTruthy();
            expect(this.registerPage.usernameInput.isVisible()).toBeTruthy();
            expect(this.registerPage.passwordInput.isVisible()).toBeTruthy();
            expect(this.registerPage.goToLoginEnglishLink.isVisible()).toBeTruthy();
        });
    }

    async clickOnBackToLoginLink(): Promise<void> {
        await test.step("click on register link", async () => {
            await this.registerPage.goToLoginEnglishLink.click();
        });
    }
}