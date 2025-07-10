// import { Before, After} from '@cucumber/cucumber';
// import { Browser, Page, chromium } from '@playwright/test';
// import {pageFixture} from "./pageFixture";

// let browser: Browser;

// Before(async function () {
//     browser = await chromium.launch({ 
//         headless: process.env.CI === 'true' // Headless in CI, headed locally
//     });
//     const page = await browser.newPage();
//     pageFixture.page = page;
// });

// After(async function () {
//     if (pageFixture.page && !pageFixture.page.isClosed()) {
//         await pageFixture.page.close();
//     }
//     if (browser) {
//         await browser.close();
//     }
// });

import { Before, After, BeforeAll, AfterAll, Status } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext } from '@playwright/test';
import { pageFixture } from './pageFixture';
import { after } from 'node:test';
import { stat } from 'fs';
import { getEnv } from '../helper/env/env';
import { invokeBrowser } from '../helper/browsers/browserManager';
import { createLogger } from 'winston';
import { options } from '../helper/util/logger';
import HeaderPage from '../pages/headerPage';
import LoginPage from '../pages/loginPage';

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function(){
    getEnv();
    browser=await invokeBrowser();
    // browser=await chromium.launch({headless:false});
});
Before(async function( { pickle }) {
    const scenarioName = pickle.name + pickle.id;

    context=await browser.newContext()
    const page=await context.newPage();
    pageFixture.page=page;

    pageFixture.headerPage = new HeaderPage(page);
    pageFixture.loginPage = new LoginPage(page);
    pageFixture.logger = createLogger(options(scenarioName));
   
    


});
After(async function({ pickle, result }) {
    if (result?.status === Status.FAILED && pageFixture.page) {
        const img = await pageFixture.page.screenshot({
            path: `./screenshots/${pickle.name}.png`
        });
    }
    if (pageFixture.page) {
        await pageFixture.page.close();
    }
    await context.close();

});

AfterAll(async function(){
    pageFixture.logger?.end();
    await browser.close();
});