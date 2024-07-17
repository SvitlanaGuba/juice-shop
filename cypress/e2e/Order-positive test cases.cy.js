import homePage from '../support/pages/HomePage'
import loginPage from '../support/pages/LoginPage'
import user from "../fixtures/user.json";
import addAddressPage from "../support/pages/AddAddressInOrderPage"
import addressForm from "../fixtures/addressForm.json";
import {findProduct} from "../support/helper";
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

describe('Order products, positive test suite', () => {


    before(() => {
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

    it('Positive test', () => {

        cy.log("Search product by letter")
        mainPage.typeSearchField();

        cy.log("Helper")
        const productName = "OWASP Juice Shop Magnets";
        findProduct(productName);

        cy.log("Product validation in the product cart")
        mainPage.clickBasketButton();

        cy.log("Check Booking page");

        const bookingProductName = "OWASP Juice Shop Magnets";
        const productQuantity = 1;
        const productPrice = 15.99;
        const expectedTotalPrice = productPrice * productQuantity;

        orderPage.checkUserProductName(bookingProductName);
        orderPage.checkProductQuantity(productQuantity);
        orderPage.checkProductPrice(productPrice);
        orderPage.checkUserTotalPrice(expectedTotalPrice);
        orderPage.clickCheckoutButton();

        cy.log("Added new address")
        addAddressPage.clickAddNewAddressButton();
        addAddressPage.typeUserCountry();
        addAddressPage.typeUserName();
        addAddressPage.typeUserMobileNumber()
        addAddressPage.typeUserZipCode();
        addAddressPage.typeUserAddress();
        addAddressPage.typeUserCity();
        addAddressPage.typeUserState();
        addAddressPage.clickSubmitButton();

        cy.log("Select new address")
        selectAddress.clickSelectAddress();
        selectAddress.clickContinueButton();

        cy.log("Select Delivery speed")
        deliveryAddress.clickSelectDelivery();
        deliveryAddress.clickContinueButton();


        cy.log("Check My Payment Options")

        myPaymentOptions.clickOpenFullOptions();
        myPaymentOptions.typeUserNameField();
        myPaymentOptions.typeUserCard()
        myPaymentOptions.selectExpiryMonthField();
        myPaymentOptions.selectExpiryYearField();
        myPaymentOptions.clickSubmitButton();
        myPaymentOptions.clickAddUserData();
        myPaymentOptions.clickContinueButton();

        cy.log("Summary page")

        summaryPage.checkUserProductName(bookingProductName);
        summaryPage.checkProductQuantity(productQuantity);
        summaryPage.checkProductPrice(productPrice);
        summaryPage.checkUserTotalPrice(expectedTotalPrice);
        summaryPage.clickPlaceYourOrderAndPayButton();

        cy.log("Order Summary page")
        orderSummaryPage.checkBookingMessage();

    });



})
