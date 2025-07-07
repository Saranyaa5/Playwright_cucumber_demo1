import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';

Given('User navigates to the application', async function () {
  await pageFixture.page.goto("https://bookcart.azurewebsites.net/", { 
    waitUntil: 'networkidle',
    timeout: 30000 
  });
});
    
// Given('User click on the login link', async function () {
//    await page.locator('//a[@id="login"]').click(); 
//          });
When('User click on the login link', async function () {
  await pageFixture.page.waitForSelector('text=Login', { timeout: 10000 });
  await pageFixture.page.click('text=Login');
});

Given('User enter the username as {string}', async function (username) {
  await pageFixture.page.waitForSelector('input[placeholder="Username"]', { timeout: 10000 });
  await pageFixture.page.getByPlaceholder('Username').fill(username);
});

Given('the user enter the password as {string}', async function (password) {
  await pageFixture.page.waitForSelector('input[placeholder="Password"]', { timeout: 10000 });
  await pageFixture.page.getByPlaceholder('Password').fill(password);
});

When('User click on the login button', async function () {
  await pageFixture.page.waitForSelector('button:has-text("Login")', { timeout: 10000 });
  await pageFixture.page.click('button:has-text("Login")');
});

Then('Login should be successful', async function () {
  const username = await pageFixture.page.locator("(//span[@class='mdc-button__label'])[2]/span").textContent();
  expect(username).toContain('Sara@123');
});

Then('Login should fail', async function () {
  const failureMessage = pageFixture.page.locator("//mat-error[@id='mat-mdc-error-0']");
  await expect(failureMessage).toBeVisible();
});