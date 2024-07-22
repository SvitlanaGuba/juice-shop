
class HomePage {

    constructor() {

        this.welcomePopUp = '[class="mat-focus-indicator close-dialog mat-raised-button mat-button-base mat-primary ng-star-inserted"]'
        this.accountButton = '#navbarAccount';
        this.loginButton = '#navbarLoginButton';
    }

    visit() {
        cy.visit('/');
    }

    getWelcomePopUp() {
        return cy.get(this.welcomePopUp);
    }

    getAccountButton() {
        return cy.get(this.accountButton);
    }

    getLoginButton() {
        return cy.get(this.loginButton);
    }


    clickWelcomePopUp() {
        this.getWelcomePopUp().click();
    }


    clickAccountButton() {
        this.getAccountButton().click();
    }


    clickLoginButton() {
        this.getLoginButton().click();
    }


}

export default new HomePage();