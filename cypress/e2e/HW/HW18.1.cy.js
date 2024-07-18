import welcomePage from "../../support/pages/WelcomePage";
import welcomePageSteps from "../../support/steps/WelcomePage";


describe ('Sign up into Hillel', ()=> {
    beforeEach(() => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
        welcomePage.getsignupButton().click()
        
      });

    it ('Verify Register button is disabled', ()=> {
        welcomePageSteps.verifyRegisterButtonIsDisabled()
    })

    it ('Verify Register button is enabled', ()=> {
        welcomePageSteps.enterUserInfoWithoutRepeatedPassword()
        welcomePageSteps.enterRepeatedPassword()
        welcomePageSteps.verifyRegisterButtonIsEnabled()
    }) 


    it ('Verify user can signup into the system', ()=> {
        welcomePageSteps.enterUserInfoWithoutRepeatedPassword() 
        welcomePageSteps.enterRepeatedPassword()
        welcomePage.getsignupRegisterButton().click()
    })

    it ('Verify error on empty Name field', ()=> {
        welcomePage.getsignupName().focus()
        welcomePage.getsignupLastName().focus()
        cy.get('div:nth-of-type(1) > .invalid-feedback > p')
            .should('have.text', 'Name required')
    })

    it ('Verify that Name field was NOT trimmed', ()=> {
        welcomePage.getsignupName().type('  Kate  ')
        welcomePage.getsignupLastName().focus()
        cy.get('div:nth-of-type(1) > .invalid-feedback > p')
            .should('have.text', 'Name is invalid')
    })

    it ('Verify error about wrong data on Name field', ()=> {
        welcomePage.getsignupName().type('123')
        welcomePage.getsignupLastName().focus()
        cy.get('div:nth-of-type(1) > .invalid-feedback > p')
            .should('have.text', 'Name is invalid')
    })

    it ('Verify error about wrong lenght on Name field', ()=> {
        welcomePage.getsignupName().type('f')
        welcomePage.getsignupLastName().focus()
        cy.get('div:nth-of-type(1) > .invalid-feedback > p')
            .should('have.text', 'Name has to be from 2 to 20 characters long')
    })

    it ('Verify border color is red on Name field', ()=> {
        welcomePage.getsignupName().focus()
        welcomePage.getsignupLastName().focus()
        welcomePage.getsignupName()
            .should('have.css', 'border-color', 'rgb(220, 53, 69)')       
    })

    it ('Verify error on empty Last Name field', ()=> {
        welcomePage.getsignupLastName().focus()
        welcomePage.getsignupName().focus()
        cy.get('div:nth-of-type(2) > .invalid-feedback > p')
            .should('have.text', 'Last name required')
    })

    it ('Verify error about wrong data on Last Name field', ()=> {
        welcomePage.getsignupLastName().type('56')
        welcomePage.getsignupName().focus()
        cy.get('div:nth-of-type(2) > .invalid-feedback > p')
            .should('have.text', 'Last name is invalid')
        })

    it ('Verify error about wrong lenght on Last Name field', ()=> {
        welcomePage.getsignupLastName().type('h')
        welcomePage.getsignupName().focus()
        cy.get('div:nth-of-type(2) > .invalid-feedback > p')
            .should('have.text', 'Last name has to be from 2 to 20 characters long')
        })

    it ('Verify border color is red on Last Name field', ()=> {
        welcomePage.getsignupLastName().focus()
        welcomePage.getsignupName().focus()
        welcomePage.getsignupLastName()
            .should('have.css', 'border-color', 'rgb(220, 53, 69)')       
        })
 
    it ('Verify error on empty Email field', ()=> {
        welcomePage.getsignupEmail().focus()
        welcomePage.getsignupLastName().focus()
        cy.get('div:nth-of-type(3) > .invalid-feedback > p')
            .should('have.text', 'Email required')
        })

    it ('Verify error about wrong data on Email field', ()=> {
        welcomePage.getsignupEmail().type('g')
        welcomePage.getsignupName().focus()
        cy.get('div:nth-of-type(3) > .invalid-feedback > p')
            .should('have.text', 'Email is incorrect')
        })

    it ('Verify border color is red on Email field', ()=> {
        welcomePage.getsignupEmail().focus()
        welcomePage.getsignupLastName().focus()
        welcomePage.getsignupEmail()
            .should('have.css', 'border-color', 'rgb(220, 53, 69)')       
        })
   
    it ('Verify error on empty Password field', ()=> {
        welcomePage.getsignupPassword().focus()
        welcomePage.getsignupLastName().focus()
        cy.get('div:nth-of-type(4) > .invalid-feedback > p')
           .should('have.text', 'Password required')
       })

    it ('Verify error about wrong data on Password field', ()=> {
        welcomePage.getsignupPassword().type('12345')
        welcomePage.getsignupLastName().focus()
        cy.get('div:nth-of-type(4) > .invalid-feedback > p')
            .should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
        })

    it ('Verify border color is red on Password field', ()=> {
        welcomePage.getsignupPassword().focus()
        welcomePage.getsignupLastName().focus()
        welcomePage.getsignupPassword()
            .should('have.css', 'border-color', 'rgb(220, 53, 69)')  
        })
    
    it ('Verify error on empty Re-enter password field', ()=> {
        welcomePage.getsignupRepeatPassword().focus()
        welcomePage.getsignupLastName().focus()
        cy.get('div:nth-of-type(5) > .invalid-feedback > p')
           .should('have.text', 'Re-enter password required')
       })

    it ('Verify error about mismatching passwords on Re-enter password field', ()=> {
        welcomePage.getsignupRepeatPassword().type('123!@#qweQWG')
        welcomePage.getsignupLastName().focus()
        cy.get('div:nth-of-type(5) > .invalid-feedback > p')
           .should('have.text', 'Passwords do not match')
       })

    it ('Verify border color is red on  Re-enter password field', ()=> {
        welcomePage.getsignupRepeatPassword().focus()
        welcomePage.getsignupLastName().focus()
        cy.get('div:nth-of-type(5) > .invalid-feedback > p')
            .should('have.css', 'border-color', 'rgb(220, 53, 69)')  
    })
})

describe ('Log into Hillel', ()=> {

    it ('User can log into account with correct credentials', ()=> {
       cy.login();
})
})
    