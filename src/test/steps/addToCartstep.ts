import { When, Then, } from '@cucumber/cucumber';
import { expect} from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';

When('the user searches for a {string}', async function (book) {
    
    await pageFixture.page.getByPlaceholder('Search books or authors').fill(book);
    await pageFixture.page.keyboard.press('Enter');
   
    await pageFixture.page.waitForLoadState('networkidle');
});

When('the user add the book to the cart', async function () {
    
    await pageFixture.page.locator('.card-body').first().click();
    await pageFixture.page.locator('button:has-text("Add to Cart")').click();
});

Then('the cart badge should get updated', async function () {
    
    const cartBadge = pageFixture.page.locator('.cart-badge');
    await expect(cartBadge).toBeVisible();
    const badgeText = await cartBadge.textContent();
    expect(parseInt(badgeText || '0')).toBeGreaterThan(0);
});