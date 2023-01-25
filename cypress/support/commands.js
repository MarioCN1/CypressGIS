// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add

// Login Helper command
Cypress.Commands.add('Login_GIS', () =>{
    const path = 'http://gis-staging.interstellar.prv:3000/account/login';
    cy.visit(path);
    cy.get('#email').type('mnavacerrada@pccwglobal.com');
    cy.get ('#password').type('MarioGIS81!');
    cy.get('#login').click();
        
})
// Logout Helper command

Cypress.Commands.add('Logout_GIS', () => {
    cy.get('.nav-right > :nth-child(4) > .btn-dropdown-toggle').click();
    cy.get('.dropdown-open > .dropdown-menu > :nth-child(3) > a').click();
    })