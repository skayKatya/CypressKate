import garagePageSteps from "../../support/steps/GaragePage"

const login = Cypress.env('login')
const password = Cypress.env('password')

 
// describe ('Log into Hillel', ()=> {
    
//     it ('User can log into account with correct credentials', ()=> {
//         cy.visit('/')
//         cy.get('.btn.btn-outline-white.header_signin').click()
//         cy.get('#signinEmail').type(login)
//         cy.get('#signinPassword').type(password, { sensitive: true })
//         cy.get('.form-check-label').click()
//         cy.get('.btn.btn-primary').contains('Login').click()
//       })
// })

describe ('Verifying garage page', ()=> {
    beforeEach(() => {
        cy.visit('/')
        cy.get('.btn.btn-outline-white.header_signin').click()
        cy.get('#signinEmail').type(login)
        cy.get('#signinPassword').type(password, { sensitive: true })
        cy.get('.btn.btn-primary').contains('Login').click()
        })

    it('user can add a car into a garage', ()=> {
        garagePageSteps.addCar()
    })

    it('user can add fuel expense to the car', ()=> {
        garagePageSteps.addCar()
        garagePageSteps.addFuelExpense()
    })

});