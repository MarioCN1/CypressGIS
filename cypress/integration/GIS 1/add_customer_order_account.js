// Add Customer, order and account test steps
/// <reference types="cypress" />

import {LoginPage} from "../common/login_page"
const login_page = new LoginPage ()

it('GIS Login, Add Customer and Create Order', function(){
    login_page.navigate('http://gis-staging.interstellar.prv:3000/account/login');
    login_page.enterUsername('gis_administrator@pccwglobal.com');
    login_page.enterPassword('pCcwglob@L2022');
    login_page.clickLogin();
    cy.contains('Welcome to GIS Portal');
    cy.wait(7000)
   
//Add Customer
   cy.log('Add Customer'); 
   cy.visit('http://gis-staging.interstellar.prv:3000/portal/account/customers')
   cy.get('[href="/portal/account/customers/add"] > .btn').click()
   cy.get('#master_email').type('robotntwine1@outlook.com')
   cy.get('#name').type('MC Auto A1')
   cy.get('#former_name').type('MC Alias 1')
   cy.get('#pccwglobal_insight_company_code').type('QW899689')
   cy.get('#pccwglobal_signed_bdm_name').type('Mario N1')
   cy.get('#pccwglobal_signed_bdm_id').type('80990001')
   cy.get('#address_country').type('United Kingdom')
   cy.get('#address_city').type('Manchester')
   cy.get('#address_line_1').type('24 Robot Ave.')
   cy.get('#address_postcode').type('FR6 7TT')
   cy.get('#business_jurisdiction').type('United Kingdom')
   cy.get('#business_registration_number').type('UK223344')
   cy.get('#vat_number').type('VT556677')
   cy.get('#commercial_contact_name').type('Sussan Doyle')
   cy.get('#commercial_contact_phone').type('01189625639')
   cy.get('#commercial_contact_email').type('sdoyle@gis.com')
   cy.get('#financial_contact_name').type('Paul Doyle')
   cy.get('#financial_contact_phone').type('01189625639')
   cy.get('#financial_contact_email').type('pdoyle@gis.com')
   cy.get('#fault_reporting_contact_name').type('Ivan Doyle')
   cy.get('#fault_reporting_contact_phone').type('01189625639')
   cy.get('#fault_reporting_contact_email').type('idoyle@gis.com')
   cy.get('#billing_details').type('Direct Debit')
   cy.get('#bank_information').type('Manchester Bank')
   cy.get('#website').type('n/a')
   cy.get('#other_information').type('More stuff 1')
   cy.get('.btn-main').click()

//Create Order
   cy.log('Create Order'); 
   cy.visit('http://gis-staging.interstellar.prv:3000/portal/management/orders/add')
   cy.get('#customer_id').select('MC Cypress Co A')
   cy.get('#service_type').select('ITFS')
   cy.get('#jurisdiction').select('United Kingdom')
   cy.get('.btn-main').click()
   cy.get('.sky-icon-menu').click()
   cy.get('li > .btn').click()
   cy.get('.btn-main').click()
   cy.get('#number_quantity').type('15')
   cy.get('[type="checkbox"]').check({force: true})
   cy.get('#translation_number_format').select('E.164')
   cy.get('#additional_remarks').type('Additional words 1')
   cy.get('.btn-main').click()
   cy.get('input[type="checkbox"][id="terms_and_conditions"]').click({force:true});
   cy.get('.box-actions-footer > .btn-main').click()
   cy.get('.modal-footer > .btn-main').click()

//Create account
   cy.visit('http://gis-staging.interstellar.prv:3000/portal/account/accounts')
   cy.get('a > .btn').click()
   cy.get('#account_type_id').select('Pccwglobal Sales')
   cy.get('#email').type('botGIS3@outlook.com')
   cy.get('.btn-main').click()

})