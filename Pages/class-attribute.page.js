import { expect } from '@playwright/test'

exports.ClassAttributePage = class ClassAttributePage {
    constructor(page) {
        this.page = page;
        this.classAttributepageURL = page.goto("/classattr");
        this.primaryButton = page.locator(".btn-primary");
    }

    async navigateToClassAttrPage() {
        await this.classAttributepageURL;
    }
    async clickPrimaryButton(){
        await this.primaryButton.click();
    }

}