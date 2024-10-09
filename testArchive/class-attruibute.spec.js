import {test, expect} from '@playwright/test'
import {ClassAttributePage} from '../Pages/class-attribute.page'


test("primary button click test", async({page}) =>{

    page.on("dialog", async dialog =>{
        let dialogMessage = dialog.message();
        console.log(dialogMessage);
        expect(dialogMessage).toBe("Primary button pressed");
        await dialog.dismiss();

    })
    const classAttrPage = new ClassAttributePage(page);
    await classAttrPage.navigateToClassAttrPage();
    await classAttrPage.clickPrimaryButton();

})