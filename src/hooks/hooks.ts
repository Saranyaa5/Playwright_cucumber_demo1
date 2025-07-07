import { Before, After} from '@cucumber/cucumber';
import { Browser, Page, chromium } from '@playwright/test';
import {pageFixture} from "./pageFixture";

let browser: Browser;

Before(async function () {
    browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    pageFixture.page = page;
});

After(async function () {
    if (pageFixture.page && !pageFixture.page.isClosed()) {
        await pageFixture.page.close();
    }
    if (browser) {
        await browser.close();
    }
});