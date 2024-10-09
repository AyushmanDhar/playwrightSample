
exports.ScrollBarPage = class ScrollBarPage{
    constructor(page){
        this.page = page;
        this.scrollbarPageUrl = page.goto("/scrollbars")
        this.hidingButton = page.locator("#hidingButton")
    }
    async navigateToScrollBarPage(){
        await this.scrollbarPageUrl
    }
    async clickHidingButton(){
        await this.hidingButton.click();
    }
}