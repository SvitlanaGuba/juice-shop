import homePage from '../support/pages/HomePage'
import loginPage from '../support/pages/LoginPage'
import {faker} from '@faker-js/faker';
import user from '../fixtures/user.json';
import createAccountPage from "../support/pages/CreateAccountPage";


user.email = faker.internet.email();
user.word = faker.word.noun();

describe('Registration positive test suite', () => {
    beforeEach(() => {
        cy.log("Open home page");
        homePage.visit();
        homePage.clickWelcomePopUp();
        homePage.clickAccountButton();
        homePage.clickLoginButton();
    });

    it('Registration with valid data', () => {
        cy.log("Open account/create page");
        loginPage.clickCustomerButton();

        cy.log("Fill in the form");
        createAccountPage.typeUserEmail();
        createAccountPage.typeUserPassword();
        createAccountPage.typeUserRepeatPassword();
        createAccountPage.selectUserSecurityQuestions();
        createAccountPage.typeUserAnswer();


        cy.log("Submit the form");
        createAccountPage.clickRegisterButton();

        cy.log("Verify registration");
        createAccountPage.checkRegistrationSuccessMessage();


    });
});

describe('Negative Registration Test Suite', () => {
    beforeEach(() => {
        cy.log("Open account/login page");
        homePage.visit();
        homePage.clickWelcomePopUp();
        homePage.clickAccountButton();
        homePage.clickLoginButton();
    });

    it('Registration if answer field is empty', () => {
        cy.log("Open account/create page");
        loginPage.clickCustomerButton();

        cy.log("Fill in the form without answer");
        createAccountPage.typeUserEmail();
        createAccountPage.typeUserPassword();
        createAccountPage.typeUserRepeatPassword();
        createAccountPage.selectUserSecurityQuestions();

        cy.log("Verify register button is disabled");
        createAccountPage.checkRegisterButtonIsDisabled();
    });
});