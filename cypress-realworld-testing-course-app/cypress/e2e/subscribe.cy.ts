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
  
  it("allows users to see an error message if the email is invalid", () => {
      const email = "invalid-email"
      cy.getById('email').type(email)
      cy.getByData('submit-button').click()
      cy.getByData('success-message')
          .should('not.exist') // this assertion will fail because the error message is visible
  
    })
  })
