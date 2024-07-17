import { registrationData } from "../fixtures/registrationData";

Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
    cy.get('.btn.btn-outline-white.header_signin').click()
    cy.get('#signinEmail').type(registrationData.email)
    cy.get('#signinPassword').type(registrationData.password, { sensitive: true })
    cy.get('.form-check-label').click()
    cy.get('.btn.btn-primary').contains('Login').click()
})

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
      options.log = false
      Cypress.log({
        $el: element,
        name: 'type',
        message: '*'.repeat(text.length),
      })
    }
      return originalFn(element, text, options)
  })
