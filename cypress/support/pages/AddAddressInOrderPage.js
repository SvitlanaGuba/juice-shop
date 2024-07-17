
import addressForm from "../../fixtures/addressForm.json";

class AddAddressInOrderPage {

    constructor() {
        this.addNewAddressButton = '[routerlink="/address/create"]';
        this.userCountry = '[placeholder="Please provide a country."]';
        this.userName = '[data-placeholder="Please provide a name."]';
        this.userMobileNumber ='[data-placeholder="Please provide a mobile number."]';
        this.userZipCode = '[data-placeholder="Please provide a ZIP code."]';
        this.userAddress ='[placeholder="Please provide an address."]';
        this.userCity = '[placeholder="Please provide a city."]';
        this.userState = '#mat-input-9';
        this.submitButton = '#submitButton';
        this.continueButton = '[aria-label="Proceed to payment selection"]';


    }

    visit() {
        cy.log("Open Booking page");
        cy.visit('/address/create');
    }

    getAddNewAddressButton() {
        return cy.get(this.addNewAddressButton);
    }

    getUserCountry() {
        return cy.get(this.userCountry);
    }


    getUserName() {
        return cy.get(this.userName);
    }

    getUserMobileNumber() {
        return cy.get(this.userMobileNumber);
    }

    getUserZipCode() {
        return cy.get(this.userZipCode);
    }

    getUserAddress() {
        return cy.get(this.userAddress);
    }

    getUserCity() {
        return cy.get(this.userCity);
    }

    getUserState() {
        return cy.get(this.userState);
    }


    getSubmitButton() {
        return cy.get(this.submitButton);
    }

    getContinueButton() {
        return cy.get(this.continueButton);
    }



    clickAddNewAddressButton() {
        this.getAddNewAddressButton().click();
    }

    typeUserCountry(){
        this.getUserCountry().type(addressForm.country);
    }

    typeUserName(){
        this.getUserName().type(addressForm.userName);
    }

    typeUserMobileNumber(){
        this.getUserMobileNumber().type(addressForm.mobileNumber, { force: true });
    }


    typeUserZipCode(){
        this.getUserZipCode().type(addressForm.zipCode);
    }


    typeUserAddress(){
        this.getUserAddress().type(addressForm.address);
    }


    typeUserCity(){
        this.getUserCity().type(addressForm.city, { force: true });
    }


    typeUserState(){
        this.getUserState().type(addressForm.state);
    }

    clickSubmitButton() {
        this.getSubmitButton().click();
    }

    checkSubmitButton() {
        this.getSubmitButton().should('be.disabled');
    }

    checkContinueButton() {
        this.getContinueButton().should('be.disabled');
    }


}

export default new AddAddressInOrderPage()

