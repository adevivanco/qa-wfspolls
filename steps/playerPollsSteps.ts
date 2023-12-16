import {expect, Page, test} from "@playwright/test";
import {PlayerPollsPage} from "../pom/pages/playerPollsPage";

export class PlayerPollsSteps {

    readonly playerPollsPage: PlayerPollsPage;

    constructor(page: Page) {
        this.playerPollsPage = new PlayerPollsPage(page);
    }

    async waitForUrl(): Promise<void> {
        test.step("wait for Player Polls Page URL", async () => {
            await this.playerPollsPage.waitForUrl();
        })
    }

    async validateMainElements(): Promise<void> {
        await test.step("validate main elements in page", async () => {
            await this.playerPollsPage.page.waitForLoadState("load");

            await this.playerPollsPage.waitForManageMyPollsHeader();
            expect(this.playerPollsPage.manageMyPollsHeader.isVisible()).toBeTruthy();
        });
    }

}