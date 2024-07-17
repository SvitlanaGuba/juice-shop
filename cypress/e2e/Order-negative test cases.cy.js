import homePage from '../support/pages/HomePage'
import loginPage from '../support/pages/LoginPage'
import user from "../fixtures/user.json";
import addAddressPage from "../support/pages/AddAddressInOrderPage"
import addressForm from "../fixtures/addressForm.json";
import mainPage from "../support/pages/MainPage";
import orderPage from "../support/pages/OrderPage";
import {faker} from '@faker-js/faker';
import selectAddress from '../support/pages/SelectAddressPage'
import deliveryAddress from "../support/pages/DeliveryAddressPage";
import myPaymentOptions from "../support/pages/MyPaymentOptionsPage";
import summaryPage from "../support/pages/SummaryPage";
import createAccountPage from "../support/pages/CreateAccountPage"
import orderSummaryPage from "../support/pages/OrderSummaryPage";

user.email = faker.internet.email();
user.word = faker.word.noun();

user.name = faker.person.firstName();


addressForm.country = faker.location.country();
addressForm.userName = faker.person.firstName();
addressForm.address = faker.location.streetAddress();
addressForm.city = faker.location.city();
addressForm.state = faker.location.state();

describe('Order products, negative test suite', () => {


    beforeEach(() => {
        cy.log("Open home page");
        homePage.visit();
        homePage.clickWelcomePopUp();
        homePage.clickAccountButton();
        homePage.clickLoginButton();

        cy.log("Open account/create page");
        loginPage.clickCustomerButton({force: true});

        cy.log("Fill in the form for registration");
        createAccountPage.typeUserEmail();
        createAccountPage.typeUserPassword();
        createAccountPage.typeUserRepeatPassword();
        createAccountPage.selectUserSecurityQuestions();
        createAccountPage.typeUserAnswer();

        cy.log("Submit the form");
        createAccountPage.clickRegisterButton();


        cy.log("Fill in the registration form");
        loginPage.fillLoginForm(user.email, user.password);
        loginPage.checkRememberMeButton();
        loginPage.clickLoginButton();


    });

    it('Negative test', () => {
        cy.log("Search product by invalid name")
        mainPage.clickClickOnSearchField();
        mainPage.typeErrorForProductName();
        mainPage.checkNoResultsFound();
        mainPage.clickBackToHomepageButton();

        cy.log("Check error message and disabled buttons")
        mainPage.clickUserProduct();
        mainPage.clickBasketButton();
        orderPage.clickCheckoutButton();
        addAddressPage.checkContinueButton();
        addAddressPage.clickAddNewAddressButton();
        addAddressPage.typeUserCountry();
        addAddressPage.typeUserName();
        addAddressPage.typeUserMobileNumber()
        addAddressPage.typeUserAddress();
        addAddressPage.typeUserCity();
        addAddressPage.typeUserState();
        addAddressPage.checkSubmitButton();
        addAddressPage.typeUserZipCode();
        addAddressPage.clickSubmitButton();
        selectAddress.checkContinueButton();
        selectAddress.clickSelectAddress();
        selectAddress.clickContinueButton();
        deliveryAddress.checkContinueButton();
        deliveryAddress.clickSelectDelivery();
        deliveryAddress.clickContinueButton();
        myPaymentOptions.checkContinueButton();










        // cy.log("Helper")
        // const productName = "OWASP Juice Shop";
        // findProduct(productName);
        //
        // cy.log("Product validation in the product cart")
        // mainPage.clickBasketButton();
        //
        // cy.log("Check Booking page");
        //
        // const bookingProductName = "OWASP Juice Shop";
        // const productQuantity = 1;
        // const productPrice = 15.99;
        // const expectedTotalPrice = productPrice * productQuantity;
        //
        // orderPage.checkUserProductName(bookingProductName);
        // orderPage.checkProductQuantity(productQuantity);
        // orderPage.checkProductPrice(productPrice);
        // orderPage.checkUserTotalPrice(expectedTotalPrice);
        // orderPage.clickCheckoutButton();
        //
        // cy.log("Added new address")
        //
        //
    });



})





//     it('Negative test cases for main page', () => {
//
//         cy.log("Search product by invalid name")
//         mainPage.clickClickOnSearchField();
//         mainPage.typeErrorForProductName();
//         mainPage.checkNoResultsFound();
//         mainPage.clickBackToHomepageButton();
//
//         cy.log("Helper")
//         const productName = "OWASP Juice Shop Magnets";
//         findProduct(productName);
//
//         cy.log("Product validation in the product cart")
//         mainPage.clickBasketButton();
//
//         cy.log("Check Booking page");
//
//         const bookingProductName = "OWASP Juice Shop Magnets";
//         const productQuantity = 1;
//         const productPrice = 15.99;
//         const expectedTotalPrice = productPrice * productQuantity;
//
//         orderPage.checkUserProductName(bookingProductName);
//         orderPage.checkProductQuantity(productQuantity);
//         orderPage.checkProductPrice(productPrice);
//         orderPage.checkUserTotalPrice(expectedTotalPrice);
//         orderPage.clickCheckoutButton();
//
//         cy.log("Added new address")
//
//         // cy.log("Added new address")
//         // addAddressPage.clickAddNewAddressButton();
//         // addAddressPage.typeUserCountry();
//         // addAddressPage.typeUserName();
//         // addAddressPage.typeUserMobileNumber();
//
//
//     })
// })

// describe('Negative Test Suite', () => {
//     beforeEach(() => {
//         cy.log("Open home page");
//         homePage.visit();
//         homePage.clickWelcomePopUp();
//         homePage.clickAccountButton();
//         homePage.clickLoginButton();
//
//         cy.log("Open account/create page");
//         loginPage.clickCustomerButton({force: true});
//
//         cy.log("Fill in the form for registration");
//         createAccountPage.typeUserEmail();
//         createAccountPage.typeUserPassword();
//         createAccountPage.typeUserRepeatPassword();
//         createAccountPage.selectUserSecurityQuestions();
//         createAccountPage.typeUserAnswer();
//
//         cy.log("Submit the form");
//         createAccountPage.clickRegisterButton();
//
//
//         cy.log("Fill in the registration form");
//         loginPage.fillLoginForm(user.email, user.password);
//         loginPage.checkRememberMeButton();
//         loginPage.clickLoginButton();
//
//     });
//
//     it.skip('Negative test cases for add address page', () => {
//
//         cy.log("Added new address")
//         addAddressPage.clickAddNewAddressButton();
//         addAddressPage.typeUserCountry();
//         addAddressPage.typeUserName();
//         addAddressPage.typeUserMobileNumber();
//
//
//     })
// })
//






        //
        // cy.log("Added new address")
        // addAddressPage.clickAddNewAddressButton();
        // addAddressPage.typeUserCountry();
        // addAddressPage.typeUserName();
        // addAddressPage.typeUserMobileNumber()
        //







    //
    //
    //
    // it('Negative test cases for add address page', () => {
    //
    //     beforeEach(() => {
    //         cy.log("Open home page");
    //         homePage.visit();
    //         homePage.clickWelcomePopUp();
    //         homePage.clickAccountButton();
    //         homePage.clickLoginButton();
    //
    //         cy.log("Open account/create page");
    //         loginPage.clickCustomerButton({force: true});
    //
    //         cy.log("Fill in the form for registration");
    //         createAccountPage.typeUserEmail();
    //         createAccountPage.typeUserPassword();
    //         createAccountPage.typeUserRepeatPassword();
    //         createAccountPage.selectUserSecurityQuestions();
    //         createAccountPage.typeUserAnswer();
    //
    //         cy.log("Submit the form");
    //         createAccountPage.clickRegisterButton();
    //
    //
    //         cy.log("Fill in the registration form");
    //         loginPage.fillLoginForm(user.email, user.password);
    //         loginPage.checkRememberMeButton();
    //         loginPage.clickLoginButton();
    //
    //     });
    //
    //
    //
    //
    //     cy.log("Added new address")
    //     addAddressPage.clickAddNewAddressButton();
    //     addAddressPage.typeUserCountry();
    //     addAddressPage.typeUserName();
    //     addAddressPage.typeUserMobileNumber()
    //   //  addAddressPage.typeUserZipCode();
    //     addAddressPage.typeUserAddress();
    //     addAddressPage.typeUserState();
    //
    //     //   cy.log("Verify form with empty field");
    //     //   addAddressPage.checkSubmitButton();
    //     //
    //     //   cy.log("Unselected new address")
    //     // //  selectAddress.checkContinueButton();//ОШИБКА
    //
    // })
    //
    //
    //
    //












        // cy.log("Product validation in the product cart")
        // mainPage.clickBasketButton();
        //
        // cy.log("Check Booking page");
        // const bookingProductName = "OWASP Juice Shop Magnets";
        // const productQuantity = 0;
        // const productPrice = 15.99;
        // const expectedTotalPrice = productPrice * productQuantity;
        //
        // orderPage.checkUserProductName(bookingProductName);
        // orderPage.checkProductPrice(productPrice);
        // orderPage.checkUserTotalPrice(expectedTotalPrice);
        // orderPage.clickCheckoutButton();
        //
        // cy.log("Added new address")
        // addAddressPage.clickAddNewAddressButton();
        // addAddressPage.typeUserCountry();
        // addAddressPage.typeUserName();
        // addAddressPage.typeUserMobileNumber()
        // addAddressPage.typeUserZipCode();
        // addAddressPage.typeUserAddress();
        // addAddressPage.typeUserState();

      //   cy.log("Verify form with empty field");
      //   addAddressPage.checkSubmitButton();
      //
      //   cy.log("Unselected new address")
      // //  selectAddress.checkContinueButton();//ОШИБКА
      //
      //   cy.log("Unselected delivery")
      //   //  deliveryAddress.checkContinueButton();//ОШИБКА
      //
      //   cy.log("Unselected pay way")
      // //  myPaymentOptions.checkContinueButton();//ОШИБКА
 //   });

