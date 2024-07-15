
class MainPage {

    constructor() {
        this.searchField = '#searchQuery';
        this.basketButton = '[routerlink="/basket"]';

    }

    visit() {
        cy.log("Open main page");
        cy.visit('/search');
    }

    getSearchField() {
        return cy.get(this.searchField);
    }


    getBasketButton() {
        return cy.get(this.basketButton);
    }


    typeSearchField() {
        this.getSearchField().type('OWASP{enter}');

    }

    clickBasketButton() {
        this.getBasketButton().click();
    }
}

export default new MainPage();

