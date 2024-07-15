
export function findProduct(productName) {


    cy.get('body').then((body) => {
        if (body.find(`[alt*="${productName}"]`).length > 0) {
            cy.get('.btn-basket').eq(9).click();
            cy.get('[class="fa-layers-counter fa-layers-top-right fa-3x warn-notification"]').should('not.be.empty');
            cy.get('[class="mat-simple-snack-bar-content"]').should('contain.text', "OWASP Juice Shop");
        } else {
            cy.get('[class="cc-btn cc-dismiss"]').click({ force: true });
          //  cy.get('[aria-label="Next page"]').contains('>').click({ force: true }); //ERROR
            findProduct(productName);
        }
    });
}

