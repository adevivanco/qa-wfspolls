import {expect, Page, test} from "@playwright/test";
import {LoginPage} from "../pages/loginPage";

export class LoginSteps {

    readonly loginPage: LoginPage;

    constructor(page: Page) {
        this.loginPage = new LoginPage(page);
    }

    async validateMainElements(): Promise<void> {
        test.step("validate main elements in page", () => {
            this.loginPage.waitForLoginPageHeader();
            expect(this.loginPage.loginPageHeader.isVisible()).toBeTruthy();
        })
    }
}