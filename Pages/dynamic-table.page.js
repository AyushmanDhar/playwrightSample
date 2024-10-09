import {expect} from '@playwright/test'
exports.DynamicTablePage = class DynamicTablePage {
    constructor(page) {
        this.page = page;
        this.dynamicTableUrl = page.goto("/dynamictable");
        this.columnHeaders = page.locator("span[role='columnheader']");
        this.tableValues = page.locator("span[role='cell']");
        this.status = page.locator(".bg-warning");
    }

    async navigateTODynamicTable() {
        await this.dynamicTableUrl;
    }

    async getIndexOfHeader(header) {
        let allHeaders = await this.columnHeaders.evaluateAll((elements) => elements.map((el) => el.textContent));
        if (allHeaders.includes(header)) {
            return allHeaders.indexOf(header);
        } else {
            console.log("Header not present in the dynamic table.")
        }
    }
    async getValueOfEntity(entity, valueIndex) {
        let allTableValues = await this.tableValues.evaluateAll((elements) => elements.map((ele) => ele.textContent));
        if (allTableValues.includes(entity)) {
            return allTableValues[allTableValues.indexOf(entity) + valueIndex];
        }
        else{
            console.log("Entity does not exist in dynamic table");
        }
    }
    async verifyStatus(entity, header, value){
        await expect(this.status).toHaveText(`${entity} ${header}: ${value}`);
    }
}