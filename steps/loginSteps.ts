import {expect, Page, test} from "@playwright/test";
import {LoginPage} from "../pages/loginPage";

export class LoginSteps {

    readonly loginPage: LoginPage;

    constructor(page: Page) {
        this.loginPage = new LoginPage(page);
    }

    async waitForUrl(): Promise<void> {
        test.step("wait for Login Page URL",  async () => {
            await this.loginPage.waitForUrl();
        })
    }

    async validateMainElements(): Promise<void> {
        test.step("validate main elements in page", async () => {
            await this.loginPage.page.waitForLoadState( "load" );
                await this.loginPage.waitForLoginPageHeader();
      //      await this.loginPage.waitForUsernameInput();
      //      await this.loginPage.waitForPasswordInput();
            await expect(this.loginPage.loginPageHeader).toBeVisible();
            await expect(this.loginPage.usernameInput).toBeEnabled();
            await expect(this.loginPage.passwordInput).toBeEnabled();
            await expect(this.loginPage.goToRegisterEnglishLink).toBeEnabled();
        })
    }
}