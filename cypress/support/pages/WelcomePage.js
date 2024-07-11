class WelcomePage {
    signupButton = '.hero-descriptor_btn'
    signupName ='#signupName'
    signupLastName = '#signupLastName'
    signupEmail = '#signupEmail'
    signupPassword = '#signupPassword'
    signupRepeatPassword = '#signupRepeatPassword'
    signupRegisterButton = '.modal-footer > .btn'


    getsignupButton() {
        return cy.get(this.signupButton)
    }

    
    getsignupName() {
        return cy.get(this.signupName)
    }

    getsignupLastName() {
        return cy.get(this.signupLastName)
    }

    getsignupEmail() {
        return cy.get(this.signupEmail)
    }

    getsignupPassword() {
        return cy.get(this.signupPassword)
    }

    getsignupRepeatPassword() {
        return cy.get(this.signupRepeatPassword)
    }

    getsignupRegisterButton() {
        return cy.get(this.signupRegisterButton)
    }
}

const welcomePage = new WelcomePage()
export default welcomePage;