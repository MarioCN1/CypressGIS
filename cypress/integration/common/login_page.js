/// Login page methods/actions login page
export class LoginPage{

    loginPage_user = '#email'
    loginPage_password = '#password'
    loginPage_loginButton = '#login'

    navigate(url){
        cy.visit(url)
    }
    enterUsername(username){
        cy.get(this.loginPage_user).type(username)
    }
    enterPassword(password){
        cy.get (this.loginPage_password).type(password)
    }
    clickLogin(){
        cy.get(this.loginPage_loginButton).click()
    }
   
}