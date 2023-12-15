import {expect, Page, test} from "@playwright/test";
import {LoginPage} from "../pom/pages/loginPage";

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
            await this.loginPage.waitForUsernameInput();
            await this.loginPage.waitForPasswordInput();
            await this.loginPage.waitFoLoginButton();
            await this.loginPage.waitForGoToRegisterEnglishLink();

            expect(this.loginPage.loginPageHeader.isVisible()).toBeTruthy();
            expect(this.loginPage.usernameInput.isVisible()).toBeTruthy();
            expect(this.loginPage.passwordInput.isVisible()).toBeTruthy();
            expect(this.loginPage.loginButton.isVisible()).toBeTruthy();
            expect(this.loginPage.goToRegisterEnglishLink.isVisible()).toBeTruthy();
        });
    }

    async enterUsernameAndPassword(username: string, password: string): Promise<void> {
        await test.step("enter username and password", async () => {
            await this.loginPage.usernameInput.fill(username);
            await this.loginPage.passwordInput.fill(password);
        });
    }

    async clickLogInButton(): Promise<void> {
        await test.step("click Log In button", async () => {
            await this.loginPage.loginButton.click();
        });
    }
    async clickOnRegisterLink(): Promise<void> {
        await test.step("click on register link", async () => {
            await this.loginPage.goToRegisterEnglishLink.click();
        });
    }
}