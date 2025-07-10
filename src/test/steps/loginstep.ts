import { Given, When, Then} from '@cucumber/cucumber';

import {chromium , Page , Browser , expect} from '@playwright/test';

import { pageFixture } from '../../hooks/pageFixture';
let browser: Browser;
// let page: Page;


Given('User navigates to the application', async function(){
    // browser = await chromium.launch({headless:false});
    // const context = await browser.newContext();
    // page = await context.newPage();
    // await pageFixture.page.goto('https://bookcart.azurewebsites.net/')

    const baseUrl = process.env.BASEURL;
    if (!baseUrl) throw new Error('BASEURL is not defined in the environment variables');
    await pageFixture.page!.goto(baseUrl);
    pageFixture.logger?.info(`Navigated to ${baseUrl}`);
         });

         
Given('User click on the login link', async function () {
    // await pageFixture.page.locator("//div[@class='d-flex align-items-center']/button[2]").click();
    // await pageFixture.headerPage!.clickLoginLink();
    await pageFixture.headerPage!.loginLink();
         });


  
Given('User enter the username as {string}', async function (string) {
    // await pageFixture.page.getByPlaceholder('Username').fill(string);
    await pageFixture.loginPage!.enterUserName(string);

         });


Given('User enter the password as {string}', async function (string) {
    // await pageFixture.page.locator("(//div[@class='mat-mdc-notch-piece mdc-notched-outline__notch'])[2]/label").fill(string);
    await pageFixture.loginPage!.enterPassword(string);
         });


When('User click on the login button', async function () {
    // await pageFixture.page.locator("//button[@class='mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base']").click();
    await pageFixture.loginPage!.clcikLoginButton();
    // await pageFixture.headerPage!.verifyLoginSuccess();
         });


Then('Login should be success', async function () {
    const userMenu = pageFixture.page!.locator("(//span[@class='mdc-button__label'])[2]/span");
    await expect(userMenu).toBeVisible();
    const username = await userMenu.textContent();
    console.log("Username is " + username);
    pageFixture.logger?.info(`Username is ${username}`);
    // expect(username).toContain(' Sara@123');
    
         });

Then('Login should fail', async function () {
    // const failureMessage = await pageFixture.page.locator("//mat-error[@id='mat-mdc-error-0']");
    // await failureMessage.isVisible();
    const error=await pageFixture.loginPage!.getErrorMessage();
    await expect(error).toBeVisible();
    
         });


