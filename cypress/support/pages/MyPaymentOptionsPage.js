
import user from "../../fixtures/user.json";

class MyPaymentOptionsPage {

    constructor() {

        this.openFullOptions = '#mat-expansion-panel-header-0 span';
        this.userNameField = '#cdk-accordion-child-0 input';
        this.userCard = '#cdk-accordion-child-0 input';
        this.expiryMonthField = '[appearance="outline"]';
        this.chooseExpiryMonth = '[appearance="outline"] select';
        this.expiryYearField = '[appearance="outline"]';
        this.chooseYearField = '[appearance="outline"] select';
        this.submitButton = '#submitButton';
        this.addUserData = '[class="mat-radio-container"]';
        this.continueButton = '[aria-label="Proceed to review"]';
    }

    visit() {
        cy.log("Open Booking page");
        cy.visit('/payment/shop');
    }


    getOpenFullOptions() {
        return cy.get(this.openFullOptions);
    }
    getUserNameField() {
        return cy.get(this.userNameField);
    }
    getUserCard() {
        return cy.get(this.userCard);
    }

    getExpiryMonthField() {
        return cy.get(this.expiryMonthField);
    }


    getExpiryYearField() {
        return cy.get(this.expiryYearField);
    }

    getChooseExpiryMonth() {
        return cy.get(this.chooseExpiryMonth);
    }

    getChooseExpiryYearField() {
        return cy.get(this.chooseYearField);
    }


    getSubmitButton() {
        return cy.get(this.submitButton);
    }

    getAddUserData() {
        return cy.get(this.addUserData);
    }

    getContinueButton() {
        return cy.get(this.continueButton);
    }


    clickOpenFullOptions() {
    this.getOpenFullOptions().eq(1).click();
    }

    typeUserNameField(){
        this.getUserNameField().eq(0).should('exist').type(user.name);
    }

    typeUserCard(){
        this.getUserCard().eq(1).type(user.userCard);
    }

    selectExpiryMonthField(){
        this.getExpiryMonthField().eq(2).click();
        this.getChooseExpiryMonth().eq(0).select(1);
    }


    selectExpiryYearField(){
        this.getExpiryYearField().eq(3).click();

        this.getChooseExpiryYearField().should('have.length.greaterThan', 0);
        this.getChooseExpiryYearField().find('option').should('contain', '2080');
        this.getChooseExpiryYearField().eq(1).select('2080').should('have.value', '2080');
    }

    clickSubmitButton() {
        this.getSubmitButton().click();
    }

    clickAddUserData() {
        this.getAddUserData().click();
    }

    clickContinueButton() {
        this.getContinueButton().click();
    }


    checkContinueButton() {
        this.getContinueButton().should('be.disabled');
    }

}

export default new MyPaymentOptionsPage()

