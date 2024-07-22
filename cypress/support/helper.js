
export function findProduct(productName) {
    cy.get('body').then((body) => {
        if (body.find(`[alt*="${productName}"]`).length > 0) {
            cy.get('.btn-basket').eq(9).click();
            cy.get('[class="fa-layers-counter fa-layers-top-right fa-3x warn-notification"]').should('not.be.empty');
            cy.get('[class="mat-simple-snack-bar-content"]').should('contain.text', "OWASP Juice Shop Magnets");
        } else {
            cy.get('[class="cc-btn cc-dismiss"]').click({force: true});


            cy.get('button[aria-label="Next page"]').then($button => {
                if (!$button.is(':disabled')) {
                    cy.get('button[aria-label="Next page"]').click({force: true});


                    findProduct(productName);
                }
            });
        }
    });
}
