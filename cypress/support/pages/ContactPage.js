import commentText from "../../fixtures/commentText.json";

class ContactPage {

         constructor() {
             this.welcomePopUp = '[class="mat-focus-indicator close-dialog mat-raised-button mat-button-base mat-primary ng-star-inserted"]'
             this.authorField = '#mat-input-1';
             this.commitField = '#comment';
             this.resultForCaptcha = '#captchaControl';
             this.captchaText = '#captcha';
             this.submitButton = '#submitButton';
             this.ratingLine = '#rating';

             this.commentErrorMessage = '#mat-error-0';
             this.resultErrorMessage = '#mat-error-1';


     }

    visit() {
        cy.log("Open Contact page");
        cy.visit('/contact');
    }

    getWelcomePopUp() {
        return cy.get(this.welcomePopUp);
    }
    getAuthorField() {
        return cy.get(this.authorField);
    }

    getCommitField() {
        return cy.get(this.commitField);
    }

    getRatingLine() {
        return cy.get(this.ratingLine);
    }

    getResultForCaptcha() {
        return cy.get(this.resultForCaptcha);
    }

    getCaptchaText() {
        return cy.get(this.captchaText);
    }

    getSubmitButton() {
        return cy.get(this.submitButton);
    }

    getCommentErrorMessage() {
        return cy.get(this.commentErrorMessage);
    }

    getResultErrorMessage() {
        return cy.get(this.resultErrorMessage);
    }


    typeCommitFieldWithoutInput() {

        this.getCommitField().click();
        this.getResultForCaptcha().click();
        this.getCommentErrorMessage().should('contain.text', "Please provide a comment.");
    }


    typeResultForCaptchaWithoutInput() {
        this.getResultForCaptcha().click();
        this.getCommitField().click();
        this.getResultErrorMessage().should('contain.text', "Please enter the result of the CAPTCHA.");
    }

    checkAuthorField(){
        this.getAuthorField().should('be.disabled');
    }

    typeCommitField(){
        this.getCommitField().type(commentText.text);
    }

    clickWelcomePopUp() {
        this.getWelcomePopUp().click();
    }



    moveSliderLeft() {
        this.getRatingLine().then($slider => {
            const rect = $slider[0].getBoundingClientRect();

            const startX = rect.left + rect.width / 2;
            const startY = rect.top + rect.height / 2;

            const endX = startX - 50;

            this.getRatingLine()
                .trigger('mousedown', { button: 0, clientX: startX, clientY: startY })
                .trigger('mousemove', { clientX: endX, clientY: startY })
                .trigger('mouseup', { force: true });
            this.getRatingLine().invoke('val').should('not.equal', '1');
        });
    }

    solveCaptcha() {
        this.getCaptchaText().then($captcha => {
            const captchaText = $captcha.text();
            const result = eval(captchaText);
            this.getResultForCaptcha().type(result);
        });
    }

    clickSubmitButton() {
        this.getSubmitButton().click();
    }

}

export default new ContactPage();
