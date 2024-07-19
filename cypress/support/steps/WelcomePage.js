import { registrationData } from "../../fixtures/registrationData"
import welcomePage from "../pages/WelcomePage"

const welcomPageSteps = {
    enterUserInfoWithoutRepeatedPassword(){
        welcomePage.getsignupName()
            .type(registrationData.userName)
        welcomePage.getsignupLastName()
            .type(registrationData.userLastName)
        welcomePage.getsignupEmail()
            .type(registrationData.email)
        welcomePage.getsignupPassword()
            .type(registrationData.password)
    },

    enterRepeatedPassword(){
        welcomePage.getsignupRepeatPassword()
            .type(registrationData.password)
    },

    verifyRegisterButtonIsDisabled(){
        welcomePage.getsignupRegisterButton()
            .should('be.disabled')
    },

    verifyRegisterButtonIsEnabled(){
        welcomePage.getsignupRegisterButton()
            .should('not.be.disabled')
    }
}

export default welcomPageSteps;