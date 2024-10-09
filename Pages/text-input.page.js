const {expect} = require('@playwright/test')

exports.textInputPage = class textInputPage{
    constructor(page){
        this.page = page;
        this.textInputIURL = page.goto("/textinput")
        this.newButtonNameField = page.getByPlaceholder('MyButton');
        this.targetButton = page.locator("#updatingButton");
    }

    async getToTextInputPage(){
        await this.textInputIURL;
    }
    async verifyTextInputPage(){
        await expect(this.page).toHaveTitle("Text Input");
    }
    async inputButtonNameField(buttonName){
        await this.newButtonNameField.fill(buttonName);
    }
    async clickUpdatingButton(){
        await this.targetButton.click();
    }
    async verifyButtonName(buttonName){
        await expect (this.targetButton).toHaveText(buttonName);
    }
}