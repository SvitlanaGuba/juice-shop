import {faker} from '@faker-js/faker';
import contactPage from "../support/pages/ContactPage";
import commentText from "../fixtures/commentText.json";


describe('Positive test suite for Contact Form', () => {
    beforeEach(() => {
        contactPage.visit();
    });

    it('Should submit the contact form successfully', () => {

        commentText.text = faker.lorem.text().slice(0, 50);

        contactPage.clickWelcomePopUp();
        contactPage.checkAuthorField();
        contactPage.typeCommitField();
        contactPage.moveSliderLeft();
        contactPage.solveCaptcha();
        contactPage.clickSubmitButton();
     });


})

describe('Positive test suite for Contact Form', () => {
    beforeEach(() => {
        contactPage.visit();
    });

    it('Check Error message', () => {

            contactPage.clickWelcomePopUp();
            contactPage.typeCommitFieldWithoutInput();
            contactPage.typeResultForCaptchaWithoutInput();

        });


})