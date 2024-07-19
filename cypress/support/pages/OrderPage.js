
class OrderPage {

    constructor() {
        this.userProductName = '[class="mat-cell cdk-cell cdk-column-product mat-column-product ng-star-inserted"]';
        this.productQuantity = '[style="font-size: initial;"]';
        this.productPrice = '.cdk-column-price';
        this.userTotalPrice = '#price';
        this.checkoutButton = '#checkoutButton';
    }

    visit() {
        cy.log("Open Booking page");
        cy.visit('/basket');
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

    getCheckoutButton() {
        return cy.get(this.checkoutButton);
    }

    checkUserProductName(expectedName) {
        this.getUserProductName().should('contain.text', expectedName);
    }

    checkProductQuantity(expectedQuantity) {
        this.getProductQuantity().should('contain.text', expectedQuantity.toString());
    }

    checkProductPrice(expectedPrice) {
        this.getProductPrice().eq(1).should('contain.text', expectedPrice);
    }

    checkUserTotalPrice(expectedTotal) {
        this.getUserTotalPrice().should('contain.text', expectedTotal.toFixed(2));
    }

    clickCheckoutButton() {
        this.getCheckoutButton().click({force: true});
    }
}

export default new OrderPage();