import {test} from '@playwright/test'
import {DynamicTablePage} from '../Pages/dynamic-table.page'
import {HomePage} from '../Pages/home-page.page'

test("Dynamic table", async({page}) =>{
    let entity = "Chrome";
    let header = "CPU";
    const dynamicTablePage = new DynamicTablePage(page);
    const HomePage = dynamicTablePage.navigateToHomePage();
    await HomePage
    await dynamicTablePage.navigateTODynamicTable();
    let index = await dynamicTablePage.getIndexOfHeader(header);
    let value = await dynamicTablePage.getValueOfEntity(entity, index);
    await dynamicTablePage.verifyStatus(entity, header, value);
})