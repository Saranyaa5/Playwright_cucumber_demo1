import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';

Given('User navigates to the application', async function () {
  await pageFixture.page.goto("https://bookcart.azurewebsites.net/")
         });
    
// Given('User click on the login link', async function () {
//    await page.locator('//a[@id="login"]').click(); 
//          });
When('User click on the login link', async function () {
     await pageFixture.page.locator("//div[@class='d-flex align-items-center']/button[2]").click();
});

Given('User enter the username as {string}', async function (username) {
  await pageFixture.page.getByPlaceholder('Username').fill(username);
         });

Given('the user enter the password as {string}', async function (password) {
  await pageFixture.page.locator("(//div[@class='mat-mdc-notch-piece mdc-notched-outline__notch'])[2]/label").fill(password);

         });

When('User click on the login button', async function () {
        await pageFixture.page.locator("//button[@class='mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base']").click();
         });

Then('Login should be successful', async function () {
  const username = await pageFixture.page.locator("(//span[@class='mdc-button__label'])[2]/span").textContent();
    expect(username).toContain('Sara@123');
  

         });

Then('Login should fail', async function () {
  const failureMessage = await pageFixture.page.locator("//mat-error[@id='mat-mdc-error-0']");
    await failureMessage.isVisible();
    
});