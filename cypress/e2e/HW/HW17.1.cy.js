describe ('Header and Footer Buttons', ()=> {
    beforeEach(() => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/') 
      });


    it ('HeaderButtons Sign up on Welcome page should be visible', ()=> {
        cy.get('.hero-descriptor_btn')    
    })

    it ('FooterButtonsFacebook on Welcome page should be visible', ()=> {
        cy.get('.icon.icon-facebook')
    })

    it ('FooterButtonsTelegram on Welcome page should be visible', ()=> {
        cy.get('.icon.icon-telegram')
    })

    it ('FooterButtonsYouTube on Welcome page should be visible', ()=> {
        cy.get('.icon.icon-youtube')
    })

    it ('FooterButtonsInstagram on Welcome page should be visible', ()=> {
        cy.get('.icon.icon-instagram')
    })

    it ('FooterButtonsLinkedIn on Welcome page should be visible', ()=> {
        cy.get('.icon.icon-linkedin')
    })
})

