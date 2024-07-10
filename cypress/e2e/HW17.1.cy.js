describe ('Header and Footer Buttons', ()=> {
    beforeEach(() => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/') 
      });


    it ('HeaderButtons', ()=> {
        cy.get('.hero-descriptor_btn')    
    })

    it ('FooterButtonsFacebook', ()=> {
        cy.get('.icon.icon-facebook')
    })

    it ('FooterButtonsTelegram', ()=> {
        cy.get('.icon.icon-telegram')
    })

    it ('FooterButtonsYouTube', ()=> {
        cy.get('.icon.icon-youtube')
    })

    it ('FooterButtonsInstagram', ()=> {
        cy.get('.icon.icon-instagram')
    })

    it ('FooterButtonsLinkedIn', ()=> {
        cy.get('.icon.icon-linkedin')
    })
})

