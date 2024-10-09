import {test} from '@playwright/test'
import {homePage} from '../Pages/home-page.page'
//const { homePage } = require('../Pages/home-page.page')

test("Navigate to Homepage", async ({page}) => {
    const HomePage = new homePage(page);
    await HomePage.navigateToHomePage();
})
test("Get quote", async({page})=> {
    const HomePage = new homePage(page);
    await HomePage.navigateToHomePage();
    await HomePage.getQuote();
    console.log(await HomePage.getALlLinkText());

} )