//Reports menu test steps
/// <reference types="cypress" />
import {LoginPage} from "../common/login_page"
const login_page = new LoginPage ()

it('Menus navigation', ()=>{    
cy.Login_GIS();        
cy.log('Call Overview');
    //Call overview
        cy.get(':nth-child(5) > .btn-dropdown-toggle').click();
        cy.get('.dropdown-open > .dropdown-menu > :nth-child(1) > a').click();
        cy.contains('Carriers');
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
        
cy.wait(2000);
cy.Logout_GIS();        
})
 





