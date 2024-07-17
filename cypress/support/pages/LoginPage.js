class LoginPage {
    signinButton = '.btn.btn-outline-white.header_signin'
    signinEmail = '.signinEmail'
    signinPassword = '.signinPassword'
    rememberCheckbox = '.form-check-label'
    loginButton = '.modal-footer > .btn.btn-primary'

  getsigninButton() {
    return cy.get(this.signinButton)
  }

  getsigninEmail() {
    return cy.get(this.signinEmail)
  }

  getsigninPassword() {
    return cy.get(this.signinPassword)
  }

  getrememberCheckbox() {
    return cy.get(this.rememberCheckbox)
  }

  getloginButton() {
    return cy.get(this.loginButton)
  }
}

const loginPage = new LoginPage()
export default loginPage;