
class MainPage {

    constructor() {
        this.searchField = '#searchQuery';
        this.basketButton = '[routerlink="/basket"]';

        this.clickOnSearchField = '[aria-label="Click to search"]';
        this.errorForProductName = '[type="text"]';
        this.noResultsFound = '[class="mat-card-title"]';
        this.backToHomepageButton = '[aria-label="Back to homepage"]';
        this.userProduct = '[aria-label="Add to Basket"]';
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

    getClickOnSearchField() {
        return cy.get(this.clickOnSearchField);
    }

    getErrorForProductName() {
        return cy.get(this.errorForProductName);
    }

    getNoResultsFound() {
        return cy.get(this.noResultsFound);
    }

    getBackToHomepageButton() {
        return cy.get(this.backToHomepageButton);
    }

    getUserProduct() {
        return cy.get(this.userProduct);
    }

    typeSearchField() {
        this.getSearchField().type('OWASP{enter}');

    }

    typeErrorForProductName() {
        this.getErrorForProductName().type('gjhgkjhlkj{enter}', {force: true});

    }

    clickClickOnSearchField() {
        this.getClickOnSearchField().click;
    }

    checkNoResultsFound() {
        this.getNoResultsFound().should("contain.text", 'No results found');
    }

    clickBasketButton() {
        this.getBasketButton().click();
    }

    clickBackToHomepageButton() {
        this.getBackToHomepageButton().click();
    }

    clickUserProduct() {
        this.getUserProduct().eq(3).click();
    }

}

export default new MainPage();

