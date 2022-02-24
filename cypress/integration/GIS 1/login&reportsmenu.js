//Reports menu test steps
/// <reference types="cypress" />

import {LoginPage} from "../common/login_page"
const login_page = new LoginPage ()
it('Login and Reports', function(){
    login_page.navigate('http://gis-staging.interstellar.prv:3000/account/login');
    login_page.enterUsername('gis_administrator@pccwglobal.com');
    login_page.enterPassword('pCcwglob@L2022');
    login_page.clickLogin();
    cy.contains('Welcome to GIS Portal');

cy.log('Call Overview');
    //Call overview
        cy.get(':nth-child(5) > .btn-dropdown-toggle').click();
        cy.get('.dropdown-open > .dropdown-menu > :nth-child(1) > a').click();
cy.log('Call Statistics');
        //Call statistics
        cy.get(':nth-child(5) > .btn-dropdown-toggle').click();
        cy.get('.dropdown-open > .dropdown-menu > :nth-child(2) > a').click();
cy.log('Call Records');
        //Call records
        cy.get(':nth-child(5) > .btn-dropdown-toggle').click();
        cy.get('.dropdown-open > .dropdown-menu > :nth-child(3) > a').click();
cy.log('Number Overview');
        //Number overview
       cy.get(':nth-child(5) > .btn-dropdown-toggle').click();
       cy.get('.dropdown-open > .dropdown-menu > :nth-child(4) > a').click();
            
       
  
})


