import user from "../../fixtures/user.json";

class CreateAccountPage {

    constructor() {
        this.userEmail = '#emailControl'
        this.userPassword = '#passwordControl';
        this.userRepeatPassword ='#repeatPasswordControl';
        this.userSecurityQuestions = '[name="securityQuestion"]';
        this.userAnswer ='#securityAnswerControl';
        this.registerButton = '#registerButton';
        this.registrationSuccessMessage = '.mat-snack-bar-container';

    }

    visit() {
        cy.log("Open Create Account page");
        cy.visit('/register');
    }


    getUserEmail() {
        return cy.get(this.userEmail);
    }

    getUserPassword() {
        return cy.get(this.userPassword);
    }


    getUserRepeatPassword() {
        return cy.get(this.userRepeatPassword);
    }


    getUserSecurityQuestions() {
        return cy.get(this.userSecurityQuestions);
    }


    getUserAnswer() {
        return cy.get(this.userAnswer);
    }

    getRegisterButton() {
        return cy.get(this.registerButton);
    }

    getRegistrationSuccessMessage() {
        return cy.get(this.registrationSuccessMessage);
    }

    typeUserEmail(){
        this.getUserEmail().type(user.email);
    }

    typeUserPassword(){
        this.getUserPassword().type(user.password);
    }

    typeUserRepeatPassword(){
        this.getUserRepeatPassword().type(user.repeatPassword);
    }

    selectUserSecurityQuestions() {
        this.getUserSecurityQuestions().click();
        cy.get('.mat-option-text').contains(user.securityQuestions).click();
    }

    typeUserAnswer(){
        this.getUserAnswer().type(user.answer);
    }



    clickRegisterButton() {
        this.getRegisterButton().click();
    }

    checkRegistrationSuccessMessage() {
        this.getRegistrationSuccessMessage().should('contain', 'Registration completed successfully.');
    }

    checkRegisterButtonIsDisabled() {
        this.getRegisterButton().should('be.disabled');
    }


}

export default new CreateAccountPage();