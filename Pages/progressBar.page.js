import { expect } from '@playwright/test'
exports.ProgressBarPage = class ProgressBarPage {
    constructor(page) {
        this.page = page;
        this.progressBarPageUrl = page.goto("/progressbar");
        this.startButton = page.locator("#startButton");
        this.stopButton = page.locator("#stopButton");
        this.percentageMeter = page.locator("#progressBar");
        this.result = page.locator("#result");
    }

    async navigateToProgressBarPage() {
        await this.progressBarPageUrl;
    }
    async clickStartButton() {
        await this.startButton.click();
    }
    async clickStopButton() {
        await this.stopButton.click();
    }
    async waitTillPercentage(percentage) {
        while (true) {
            if (await this.percentageMeter.textContent() == `${percentage}%`) {
                return true;
            }
        }
    }
    async verifyResult() {
        //await this.page.pause();
        console.log(await this.result.textContent());
        await expect(this.result).toHaveText(/Result: 0, .*/);
    }

}