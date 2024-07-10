describe ('Registration form', ()=> {
    beforeEach(() => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/') 
      });

    it ('Verify field "Name" requirements ', ()=> {
        cy.get('.hero-descriptor_btn').click()    
    })

})

