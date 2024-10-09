import {test} from '@playwright/test'
import{ScrollBarPage} from "../Pages/scrollBar.page"

test("Scroll Bar test", async({page}) =>{
    const scrollBarPage = new ScrollBarPage(page);
    await scrollBarPage.navigateToScrollBarPage();
    await scrollBarPage.clickHidingButton();
})