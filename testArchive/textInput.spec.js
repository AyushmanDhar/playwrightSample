import {test} from '@playwright/test'
const {textInputPage} = require('../Pages/text-input.page')

test('positive scenario', async ( {page} ) => {
    const TextInputPage = new textInputPage(page);
    let buttonName = "Ayushman"
    await TextInputPage.getToTextInputPage();
    await TextInputPage.verifyTextInputPage();
    await TextInputPage.inputButtonNameField(buttonName);
    await TextInputPage.clickUpdatingButton();
    await TextInputPage.verifyButtonName(buttonName);
})