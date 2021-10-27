import type { Page } from '@playwright/test';

export class AuthPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('https://pen-stage.udata.id/page/loginsdvc');
    }

    async login(email: string, password: string) {
        await this.page.type('[placeholder="Email or Username"]', email);
        await this.page.type('[placeholder="Password"]', password);
        await this.page.click('text=Login');
    }
    async logout(){
        await this.page.hover('#nav-fixed-by-skala > li > a');
        await this.page.click('#nav-fixed-by-skala > li > a');
        await this.page.click('text=Logout');
        await this.page.click('a:has-text("Ya")');
    }
    async loginUsername(email: string){
        await this.page.type('[placeholder="Email or Username"]', email);
    }
    async loginPassword(password: string){
        await this.page.type('[placeholder="Password"]', password);
    }
    async loginButton(){
        await this.page.click('text=Login');
    }
    async usernameBox(){
        await this.page.hover('#email');
        await this.page.click('#email');
    }
    async passwordBox(){
        await this.page.hover('#password');
        await this.page.click('#password');
    }
    
}
