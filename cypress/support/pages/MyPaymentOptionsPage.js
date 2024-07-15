
class MyPaymentOptionsPage {

    constructor() {
        this.selectPaymentOptions = '[class="mat-radio-inner-circle"]';
        this.continueButton = '[aria-label="Proceed to review"]';
        this.userBalance = '[class="confirmation card-title"]';
       // this.payNanButton ='[class="mat-focus-indicator btn mat-raised-button mat-button-base mat-primary"]';

    }

    visit() {
        cy.log("Open Booking page");
        cy.visit('/payment/shop');
    }

    getSelectPaymentOptions() {
        return cy.get(this.selectPaymentOptions);
    }

    getContinueButton() {
        return cy.get(this.continueButton);
    }


    getUserBalance() {
        return cy.get(this.userBalance);
    }

    // getPayNanButton() {
    //     return cy.get(this.payNanButton);
    // }


    clickSelectPaymentOptions() {
        this.getSelectPaymentOptions().click();
    }

    clickContinueButton(){
        this.getContinueButton().click();
    }

    checkUserBalance(){
        this.getUserBalance().should('contain', 10.00 );
    }

    // clickPayNanButton(){
    //     this.getPayNanButton().click();
    // }

    checkContinueButton() {
        this.getContinueButton().should('have.attr', 'disabled', 'true');
    }


}

export default new MyPaymentOptionsPage()

