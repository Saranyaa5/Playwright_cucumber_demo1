import {expect,Page,Locator} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { error } from "console";

export default  class LoginPage{
    private base:PlaywrightWrapper;
    private loginBtn: Locator;

    constructor(private page:Page){
        this.base=new PlaywrightWrapper(page);
        this.loginBtn=this.page.locator("//button[@class='mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base']");
    }

    private Elements={
        userInput:"Username",
        passwordInput:"Password",
        errorMessage: "alert"
    };

    async enterUserName(user:string){
        await this.page.getByLabel(this.Elements.userInput).fill(user);
    }

    async enterPassword(password:string){
        await this.page.getByLabel(this.Elements.passwordInput).fill(password);
    }

    async clcikLoginButton(){
        await this.loginBtn.click();
    }

    async getErrorMessage(){
        return this.page.locator("//mat-error[@id='mat-mdc-error-0']");
        // return this.page.getByRole("alert");
    }

    async loginUser(user: string, password: string){
        await this.enterUserName(user);
        await this.enterPassword(password);
        await this.clcikLoginButton();
    }

}