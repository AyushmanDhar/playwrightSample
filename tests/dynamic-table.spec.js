import {test} from '@playwright/test'
import {DynamicTablePage} from '../Pages/dynamic-table.page'


test("Dynamic table", async({page}) =>{
    let entity = "Chrome";
    let header = "CPU";
    const dynamicTablePage = new DynamicTablePage(page);
    await dynamicTablePage.navigateTODynamicTable();
    let index = await dynamicTablePage.getIndexOfHeader(header);
    let value = await dynamicTablePage.getValueOfEntity(entity, index);
    await dynamicTablePage.verifyStatus(entity, header, value);
})