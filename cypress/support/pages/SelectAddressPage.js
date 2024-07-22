
class SelectAddressPage {

    constructor() {

        this.selectAddress = '[class="mat-radio-container"]';
        this.continueButton = '[aria-label="Proceed to payment selection"]';
    }

    visit() {
        cy.log("Open Booking page");
        cy.visit('/address/select');
    }

    getSelectAddress() {
        return cy.get(this.selectAddress);
    }

    getContinueButton() {
        return cy.get(this.continueButton);
    }


    clickSelectAddress() {
        this.getSelectAddress().eq(0).click();
    }

    clickContinueButton() {
        this.getContinueButton().click();
    }
    checkContinueButton() {
        this.getContinueButton().should("be.visible");
    }
}

export default new SelectAddressPage()

