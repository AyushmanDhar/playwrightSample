import { expect } from '@playwright/test'

exports.homePage = class homePage{
    constructor(page){
        this.page = page;
        this.homePageURL = page.goto("");
        this.quote = page.locator(".mb-0");
        this.allLinkText = page.locator('a');
    }
    async navigateToHomePage(){
        await this.homePageURL;
    }
    async getQuote(){
        let quote = await this.quote.textContent();
        console.log(quote);
    }
     async getALlLinkText(){
         return await this.allLinkText.evaluateAll((elements) => elements.map((el) => el.textContent));
     }
} 