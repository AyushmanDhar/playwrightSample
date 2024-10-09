const { expect } = require('@playwright/test');

exports.sampleAppPage = class sampleAppPage {
    constructor(page) {
        this.page = page
        this.sampleAppURL = page.goto("/sampleapp")
        this.landingPageHeader = page.locator("//h3")
        this.userNameField = page.locator("//input[@name= 'UserName']")
        this.passwordField = page.locator("//input[@name= 'Password']")
        this.loginButton = page.locator("#login")
        this.logoutButton = page.locator("#login")
        this.loginStatus = page.locator("#loginstatus")
    }


    async navigateToSampleApp() {
        await this.sampleAppURL;
    }

    async validatePageHeader() {
        await expect(this.landingPageHeader).toHaveText("Sample App");
    }
    async enterUserName(username) {
        await this.userNameField.fill(username);
    }
    async enterPassword(password) {
        await this.passwordField.fill(password);
    }
    async clickLoginButton() {
        await this.loginButton.click();
    }
    async clickLogoutButton() {
        await this.logoutButton.click();
    }
    async checkLoginStatus(status) {
        await expect(this.loginStatus).toHaveText(status);
    }
}