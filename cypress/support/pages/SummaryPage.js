
class SummaryPage {

    constructor() {
        this.userProductName = '[class="mat-row cdk-row ng-star-inserted"]';
        this.userTotalPrice = '[class="mat-footer-cell price"]';
        this.placeYourOrderAndPayButton = '#checkoutButton';//eq1


    }

    visit() {
        cy.log("Open Booking page");
        cy.visit('/payment/shop');
    }

    getUserProductName() {
        return cy.get(this.userProductName);
    }

    getUserTotalPrice() {
        return cy.get(this.userTotalPrice);
    }


    getPlaceYourOrderAndPayButton() {
        return cy.get(this.placeYourOrderAndPayButton);
    }


    checkUserProductName(expectedName) {
        this.getUserProductName().should('contain.text', expectedName);
    }

    checkUserTotalPrice(expectedPrice) {
        this.getUserTotalPrice().should('contain.text', expectedPrice);
    }

    clickPlaceYourOrderAndPayButton(){
        this.getPlaceYourOrderAndPayButton().click();
    }

    verifyUrl(expectedUrl) {
        cy.url().should('include', expectedUrl);
    }
}

export default new SummaryPage()

