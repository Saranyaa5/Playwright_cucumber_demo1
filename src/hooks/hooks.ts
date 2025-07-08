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

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function(){
    browser=await chromium.launch({headless:false});
});
Before(async function(){
    context=await browser.newContext()
    const page=await context.newPage();
    pageFixture.page=page;
});
After(async function({ pickle, result }) {
    if (result?.status === Status.FAILED) {
        const img = await pageFixture.page.screenshot({
            path: `./screenshots/${pickle.name}.png`
        });
    }
    await pageFixture.page.close();
    await context.close();
});

AfterAll(async function(){
    await browser.close();
});