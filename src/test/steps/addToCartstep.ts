// import { When, Then, } from '@cucumber/cucumber';
// import { expect} from '@playwright/test';
// import { pageFixture } from '../../hooks/pageFixture';

// When('the user searches for a {string}', async function (book) {
    
//      await pageFixture.page.locator("//input[@type='search']").fill(book);
//     const option = await pageFixture.page.locator("mat-option[role='option'] span").first();
//     await option.waitFor({ state: 'visible' });
//     await option.click();
//          });


// When('the user add the book to the cart', async function () {
//     const addtoCart = await pageFixture.page.locator("(//span[@class='mdc-button__label'][normalize-space()='Add to Cart'])[1]").first();
//     await addtoCart.waitFor({ state: 'visible' });
//     await addtoCart.click();

//     const toast = pageFixture.page.locator("simple-snack-bar");
//     await expect(toast).toBeVisible();
//     await toast.waitFor({ state: 'hidden' });
//          });

// Then('the cart badge should get updated', async function () {
//    const badgelocator = await pageFixture.page.locator("//span[@id='mat-badge-content-0']").textContent();
//     const badgelocatorNumber = parseInt(badgelocator || '0', 10);
//     await expect(badgelocatorNumber).toBeGreaterThan(0);
//          });

import { Given, When, Then} from '@cucumber/cucumber';

import {expect} from '@playwright/test';

import { pageFixture } from '../../hooks/pageFixture';



Then('User search the book {string}', async function (book) {
    // await this.page.locator("input[type='search']").fill(book);
    await pageFixture.page.locator("//input[@type='search']").fill(book);
    const option = await pageFixture.page.locator("mat-option[role='option'] span").first();
    // await option.waitFor({ state: 'visible' });
    // await option.click();
    if (await option.isVisible()){
        await option.waitFor({ state: 'visible' });
    await option.click();
    }
 });

Then('User add the book to cart', async function () {
    // await this.page.locator("(//span[@class='mdc-button__label'][normalize-space()='Add to Cart'])[1]").click();
    const addtoCart = await pageFixture.page.locator("(//span[@class='mdc-button__label'][normalize-space()='Add to Cart'])[1]").first();
    await addtoCart.waitFor({ state: 'visible' });
    await addtoCart.click();

    const toast = pageFixture.page.locator("simple-snack-bar");
    await expect(toast).toBeVisible();
    await toast.waitFor({ state: 'hidden' });
         });

Then('User can view the book carted', async function () {
    // await this.page.locator("//div[@class='d-flex align-items-center']/button[2]").click();

    // await this.page.locator("//tbody[@role='rowgroup']/tr/td[2]/a").isVisible();
    const badgelocator = await pageFixture.page.locator("//span[@id='mat-badge-content-0']").textContent();
    const badgelocatorNumber = parseInt(badgelocator || '0', 10);
    await expect(badgelocatorNumber).toBeGreaterThan(0);
         });

Then('User dosent see the book that is provided', async function () {
     const searchValue = await pageFixture.page.locator("//div[@class='col mb-3']/div/div[1]/app-book-card/mat-card/mat-card-content/div/a/strong").textContent();
     expect(searchValue).not.toContain("The alchemist");
         });