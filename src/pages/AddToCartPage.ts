import {expect,Page,Locator} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class AddToCartPage{
    private base:PlaywrightWrapper;

    constructor(private page:Page){
    this.base=new PlaywrightWrapper(page);
    
}
  private AddtoCartPageElements={
    searchbox: "//input[@type='search']",
    Book: "mat-option[role='option'] span",
    addtocartBtn:"(//span[@class='mdc-button__label'][normalize-space()='Add to Cart'])[1]",
    cart: "//div[@class='d-flex align-items-center']/button[2]"
  }

  async searchBook(book: string) {
  
    await this.base.fill(this.AddtoCartPageElements.searchbox, book);
    // const option = this.page.locator(this.AddtoCartPageElements.Book);
    // if (await option.isVisible()) {
    //   await option.click();
    // }
  }

  async clickAddToCart(){
    await this.base.waitAndClick(this.AddtoCartPageElements.addtocartBtn);
    const addtocart= await this.page.locator("(//span[@class='mdc-button__label'][normalize-space()='Add to Cart'])[1]").first();
    await addtocart.waitFor({state: 'visible'});
    await addtocart.click();

    const toast = this.page.locator("simple-snack-bar");
    await expect(toast).toBeVisible();
    await toast.waitFor({ state: 'hidden' });
  }

  async verifyBookCarted() {
    await this.base.waitAndClick(this.AddtoCartPageElements.cart);
    await this.page.locator("//tbody[@role='rowgroup']/tr/td[2]/a").isVisible();
    const badgelocator = await this.page.locator("//span[@id='mat-badge-content-0']").textContent();
    const badgelocatorNumber = parseInt(badgelocator || '0', 10);
    await expect(badgelocatorNumber).toBeGreaterThan(0);
  }


    
}

