describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it('open the app page and verify that h1 contains the correct text', () => {
    cy.get('[data-test="hero-heading"]').contains('Testing Next.js Applications with Cypress') // forme basique 
    cy.getByData('hero-heading').contains('Testing Next.js Applications with Cypress') // forme avec la commande personnalisée (plus propre)  
  })


it("the features on the homepage are correct", () => {
    cy.get("dt").eq(0).contains("4 Courses")
    cy.get("dt").eq(1).contains("25+ Lessons")
    cy.get("dt").eq(2).contains("Free and Open Source")
    
      cy.get('dt').each(($el) => {
        cy.log($el.text())
      })
    })
  
    it("fill the subscribe form and submit", () => {
      cy.getById('email').type("test@mail.com")
    })
  })