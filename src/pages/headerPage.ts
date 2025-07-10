import {expect,Page,Locator} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class HeaderPage{
    private base:PlaywrightWrapper;
    constructor(private page:Page){
        this.base=new PlaywrightWrapper(page);
    }

    private headerPageElements={
        searchInput: "Scearch books or authors",
        cartBtn: "button.mat-focus-indicator.mat-icon-button",
        cartValue: "#mat-badge-content-0",
        userMenu:"//button[contains(@class,'mat-focus-indicator mat-menu-trigger')]",
        myOrder:"//button[text()='My Orders' and @role='menuitem']",
        logoutLink:"//button[text()='Logout' and @role='menuitem']"
    }

   

    async loginLink(){
        return this.page.locator("//div[@class='d-flex align-items-center']/button[2]").click();
    }

    async clickLoginButton(){
        return this.page.locator("//button[@color='primary' and text()='Login']").click();
    }

    async clcikOnUserMenu(){
        await this.base.waitAndClick(this.headerPageElements.userMenu)
    }

    async logoutUser(){
        await this.clcikOnUserMenu();
        await this.base.navigateTo(this.headerPageElements.logoutLink)

    }
    
    async verifyLoginSuccess(){
        await expect(this.page.locator(this.headerPageElements.userMenu)).toBeVisible();
    }


}