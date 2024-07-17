
class OrderSummaryPage {

    constructor() {
        this.bookingMessage = '[class="confirmation"]';



    }

    visit() {
        cy.log("Open Booking page");
        cy.visit('/order-completion');
    }

    getBookingMessage() {
        return cy.get(this.bookingMessage);
    }


    checkBookingMessage() {
        this.getBookingMessage().should('contain.text', 'Thank you for your purchase!');
    }

}

export default new OrderSummaryPage()

