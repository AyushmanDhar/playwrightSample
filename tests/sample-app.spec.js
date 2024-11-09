import { test } from '@playwright/test'
const { sampleAppPage } = require('../Pages/sample-app.page')
import * as dotenv from 'dotenv'
dotenv.config()
let username = process.env.USERNAME
let password = process.env.PASSWORD
test.describe.parallel("Sample app suite", () =>{

test('login test', async ({ page }) => {
    const SampleAppPage = new sampleAppPage(page);
    await SampleAppPage.navigateToSampleApp();
    await SampleAppPage.validatePageHeader();
    await SampleAppPage.enterUserName(username);
    await SampleAppPage.enterPassword(password);
    await SampleAppPage.clickLoginButton();
    await SampleAppPage.checkLoginStatus(`Welcome, ${username}!`)
})

test('Wrong password',async({page}) =>{
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
    await SampleAppPage.enterPassword(password);
    await SampleAppPage.clickLoginButton();
    await SampleAppPage.checkLoginStatus(`Invalid username/password`)
})

test('Log out Test',async({page}) =>{
    const SampleAppPage = new sampleAppPage(page);
    await SampleAppPage.navigateToSampleApp();
    await SampleAppPage.validatePageHeader();
    await SampleAppPage.enterUserName(username);
    await SampleAppPage.enterPassword(password);
    await SampleAppPage.clickLoginButton();
    await SampleAppPage.checkLoginStatus(`Welcome, ${username}!`)
    await SampleAppPage.clickLogoutButton();
    await SampleAppPage.checkLoginStatus("User logged out.");
    })
})