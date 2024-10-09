import {test} from '@playwright/test'
import {ProgressBarPage} from '../Pages/progressBar.page'

test("progress bar test", async ({page}) =>{
    const progressBarPage = new ProgressBarPage(page);
    await progressBarPage.navigateToProgressBarPage();
    await progressBarPage.clickStartButton();
    if(await progressBarPage.waitTillPercentage(75)){
        await progressBarPage.clickStopButton();
    }
    await progressBarPage.verifyResult();
})