
class DeliveryAddressPage {

    constructor() {

        this.selectDelivery = '[class="mat-radio-container"]';
        this.continueButton = '[aria-label="Proceed to delivery method selection"]';
    }

    visit() {
        cy.log("Open Booking page");
        cy.visit('/delivery-method');
    }

    getSelectDelivery() {
        return cy.get(this.selectDelivery);
    }

    getContinueButton() {
        return cy.get(this.continueButton);
    }


    clickSelectDelivery() {
        this.getSelectDelivery().eq(2).click();
    }

    clickContinueButton() {
        this.getContinueButton().click();
    }
    checkContinueButton() {
        this.getContinueButton().should('have.attr', 'disabled', 'true');
    }

}

export default new DeliveryAddressPage()

