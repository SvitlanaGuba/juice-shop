
class SummaryPage {

    constructor() {
        this.userProductName = '[class="mat-row cdk-row ng-star-inserted"]';
        this.productQuantity = 'app-purchase-basket span';
        this.productPrice = '[class="mat-cell cdk-cell cdk-column-price mat-column-price ng-star-inserted"]';
        this.userTotalPrice = '[class="mat-footer-cell price"]';
        this.placeYourOrderAndPayButton = '#checkoutButton';


    }

    visit() {
        cy.log("Open Booking page");
        cy.visit('/order-summary');
    }

    getUserProductName() {
        return cy.get(this.userProductName);
    }

    getProductQuantity() {
        return cy.get(this.productQuantity);
    }

    getProductPrice() {
        return cy.get(this.productPrice);
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

    checkProductQuantity(expectedQuantity) {
        this.getProductQuantity().should('contain.text', expectedQuantity.toString());
    }

    checkProductPrice(expectedPrice) {
        this.getProductPrice().should('contain.text', expectedPrice);
    }

    checkUserTotalPrice(expectedTotal) {
        this.getUserTotalPrice().should('contain.text', expectedTotal.toFixed(2));
    }

    clickPlaceYourOrderAndPayButton() {
        this.getPlaceYourOrderAndPayButton().click();
    }



}

export default new SummaryPage()

