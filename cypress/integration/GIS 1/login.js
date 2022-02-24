/// Loging test script steps
/// <reference types="cypress" />

import {LoginPage} from "../common/login_page"

describe('All login test', function(){
    const login_page = new LoginPage ()

it('GIS Login Test valid credentials', function(){
    login_page.navigate('http://gis-staging.interstellar.prv:3000/account/login');
    login_page.enterUsername('gis_administrator@pccwglobal.com');
    login_page.enterPassword('pCcwglob@L2022');
    login_page.clickLogin();
    cy.contains('Welcome to GIS Portal');
})

it('GIS Login Test invalid User', function(){
    login_page.navigate('http://gis-staging.interstellar.prv:3000/account/login');
    login_page.enterUsername('gis_administrator@pccwg888lobal.com');
    login_page.enterPassword('pCcwglob@L2022');
    login_page.clickLogin();
    cy.on('window:alert', (txt) =>{
        expect(txt).to.be.equal('Unauthorized: Username or password is invalid.')
    })
    
})

it('GIS Login Test invalid Password', function(){
    login_page.navigate('http://gis-staging.interstellar.prv:3000/account/login');
    login_page.enterUsername('gis_administrator@pccwglobal.com');
    login_page.enterPassword('pCcwglob@L2022FFG');
    login_page.clickLogin();
    cy.on('window:alert', (txt) =>{
        expect(txt).to.be.equal('Unauthorized: Username or password is invalid.')
    })

})


})
