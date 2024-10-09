import { test } from '@playwright/test'
const { sampleAppPage } = require('../Pages/sample-app.page')


test.describe.parallel("Sample app suite", () =>{

test('login test', async ({ page }) => {
    let username = "Ayushman"
    const SampleAppPage = new sampleAppPage(page);
    await SampleAppPage.navigateToSampleApp();
    await SampleAppPage.validatePageHeader();
    await SampleAppPage.enterUserName(username);
    await SampleAppPage.enterPassword("pwd");
    await SampleAppPage.clickLoginButton();
    await SampleAppPage.checkLoginStatus(`Welcome, ${username}!`)
})

test('Wrong password',async({page}) =>{
    let username = "Ayushman"
    const SampleAppPage = new sampleAppPage(page);
    await SampleAppPage.navigateToSampleApp();
    await SampleAppPage.validatePageHeader();
    await SampleAppPage.enterUserName(username);
    await SampleAppPage.enterPassword("Abc");
    await SampleAppPage.clickLoginButton();
    await SampleAppPage.checkLoginStatus(`Invalid username/password`)
})

test('No username',async({page}) =>{
    
    const SampleAppPage = new sampleAppPage(page);
    await SampleAppPage.navigateToSampleApp();
    await SampleAppPage.validatePageHeader();
    await SampleAppPage.enterPassword("pwd");
    await SampleAppPage.clickLoginButton();
    await SampleAppPage.checkLoginStatus(`Invalid username/password`)
})

test('Log out Test',async({page}) =>{
    let username = "Ayushman"
    const SampleAppPage = new sampleAppPage(page);
    await SampleAppPage.navigateToSampleApp();
    await SampleAppPage.validatePageHeader();
    await SampleAppPage.enterUserName(username);
    await SampleAppPage.enterPassword("pwd");
    await SampleAppPage.clickLoginButton();
    await SampleAppPage.checkLoginStatus(`Welcome, ${username}!`)
    await SampleAppPage.clickLogoutButton();
    await SampleAppPage.checkLoginStatus("User logged out.");
    })
})