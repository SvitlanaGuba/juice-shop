import homePage from '../support/pages/HomePage'
import loginPage from '../support/pages/LoginPage'
import {faker} from '@faker-js/faker';
import user from '../fixtures/user.json';
import createAccountPage from "../support/pages/CreateAccountPage";




describe('Successful registration and authorization', () => {

    user.email = faker.internet.email();
    user.word = faker.word.noun();

    beforeEach(() => {
        cy.log("Open login page");
        homePage.visit();
        homePage.clickWelcomePopUp();
        homePage.clickAccountButton();
        homePage.clickLoginButton();

        cy.log("Open account/create page");
        loginPage.clickCustomerButton();

        cy.log("Fill in the form for registration");
        createAccountPage.typeUserEmail();
        createAccountPage.typeUserPassword();
        createAccountPage.typeUserRepeatPassword();
        createAccountPage.selectUserSecurityQuestions();
        createAccountPage.typeUserAnswer();

        cy.log("Submit the form");
        createAccountPage.clickRegisterButton();
    });

    it('Registration with valid data', () => {

        cy.log("Fill in the authorization form");
        loginPage.fillLoginForm(user.email, user.password);
        loginPage.checkRememberMeButton();
        loginPage.clickLoginButton();

    });

})
    describe('Negative test for registration and authorization', () => {


        beforeEach(() => {
            cy.log("Open home page");
            homePage.visit();
            homePage.clickWelcomePopUp();
            homePage.clickAccountButton();
            homePage.clickLoginButton();

        });

        it('Check error message', () => {

            const invalidEmail = "invalid@example.com";
            const invalidPassword = "wrongpassword";

            cy.log("Fill in the authorization form");
            loginPage.fillLoginForm(invalidEmail, invalidPassword);
            loginPage.checkRememberMeButton();
            loginPage.clickLoginButton();
            loginPage.checkErrorMessage();

        });



    });
