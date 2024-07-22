

class LoginPage {

    constructor() {

        this.customerButton = '#newCustomerLink';

        this.loginEmailInputField = '#email';
        this.passwordInputField = '#password';
        this.rememberMeButton = '#rememberMe-input';
        this.loginButton = '#loginButton';
        this.errorMessage = '[class="mat-card mat-focus-indicator mat-elevation-z6"]';



    }

    visit() {
        cy.log("Open login page");
        cy.visit('/login');
    }

    getCustomerButton() {
        return cy.get(this.customerButton);
    }

    getLoginEmailInputField() {
        return cy.get(this.loginEmailInputField);
    }

    getPasswordInputField() {
        return cy.get(this.passwordInputField);
    }

    getRememberMeButton() {
        return cy.get(this.rememberMeButton);
    }


    getLoginButton() {
        return cy.get(this.loginButton);
    }

    getErrorMessage() {
        return cy.get(this.errorMessage);
    }

    clickCustomerButton(){
        cy.log("Redirect to the registration page");
        this. getCustomerButton().click();
    }

    fillLoginForm(email, password) {
        this.getLoginEmailInputField().type(email);
        this.getPasswordInputField().type(password);
    }



    checkRememberMeButton() {
        this.getRememberMeButton().check({ force: true });
    }

    clickLoginButton() {
        this.getLoginButton().click();
    }


    checkErrorMessage() {
        this.getErrorMessage().should("contain", 'Invalid email or password');
    }
}

export default new LoginPage();

