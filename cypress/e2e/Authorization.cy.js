import homePage from '../support/pages/HomePage'
import loginPage from '../support/pages/LoginPage'
import {faker} from '@faker-js/faker';
import user from '../fixtures/user.json';
import createAccountPage from "../support/pages/CreateAccountPage";

//user.email = faker.internet.email();


describe('Successful registration and authorization', () => {


    beforeEach(() => {
        cy.log("Open login page");
        homePage.visit();
        homePage.clickWelcomePopUp();
        homePage.clickAccountButton();
        homePage.clickLoginButton();
    });

    it('Registration with valid data', () => {

        cy.log("Fill in the registration form");
        loginPage.fillLoginForm(user.email, user.password);// ERROR
        loginPage.checkLoginButton();
        loginPage.clickLoginButton();

    });

})
    describe('Negative registration and authorization', () => {

        user.email = faker.internet.email();

        beforeEach(() => {
            cy.log("Open login page");
            homePage.visit();
            homePage.clickWelcomePopUp();
            homePage.clickAccountButton();
            homePage.clickLoginButton();
        });

        it('Registration with valid data', () => {

            cy.log("Fill in the registration form");
            loginPage.fillLoginForm(user.email, user.password);
            loginPage.checkLoginButton();
            loginPage.clickLoginButton();
            loginPage.checkErrorMessage();

        });



    });



// describe('Negative Registration Test Suite', () => {
//     beforeEach(() => {
//         cy.log("Open account/login page");
//         homePage.visit();
//         homePage.clickWelcomePopUp();
//         homePage.clickAccountButton();
//         homePage.clickLoginButton();
//     });
//
//     it('Should not allow registration if answer field is empty', () => {
//         cy.log("Open account/create page");
//         loginPage.clickCustomerButton();
//
//         cy.log("Fill in the form without answer");
//         createAccountPage.typeUserEmail();
//         createAccountPage.typeUserPassword();
//         createAccountPage.typeUserRepeatPassword();
//         createAccountPage.selectUserSecurityQuestions();
//
//         cy.log("Verify register button is disabled");
//         createAccountPage.checkRegisterButtonIsDisabled();
//     });
// }

// describe('Successful authorization', () => {
//     beforeEach(() => {
//         cy.log("Open login page");
//         homePage.visit();
//         homePage.clickWelcomePopUp();
//         homePage.clickAccountButton();
//         homePage.clickLoginButton();
//     });
//
//     it('Registration with valid data', () => {
//         cy.log("Fill in the form")
//
//         loginPage.fillLoginForm(user.email, user.password);
//         loginPage.checkLoginButton();
//         loginPage.clickLoginButton();
//
//     })
//
// });