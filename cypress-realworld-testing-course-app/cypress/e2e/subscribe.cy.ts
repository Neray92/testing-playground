describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("allows users to subscribe to the email list", () => {
    const email = "test@mail.com"
    cy.getById('email').type(email)
    cy.getByData('submit-button').click()
    cy.getByData('success-message')
      .should('be.visible')
      .and('contain', `Success: ${email} has been successfully subscribed`)
  })
  
  it("does NOT allow an invalid email addressd", () => {
      const email = "invalid-email"
      cy.getById('email').type(email)
      cy.getByData('submit-button').click()
      cy.getByData('success-message')
          .should('not.exist') // this assertion will fail because the error message is visible
  
    })

   it("does NOT allow already subscribed email addresses", () => { 
      const email = "john@example.com"
      cy.getById('email').type(email)
      cy.getByData('submit-button').click()
      cy.getByData('server-error-message')
          .should('be.visible')
          .and('contain', `Error: ${email} already exists. Please use a different email address.`)
    })
  
  })
