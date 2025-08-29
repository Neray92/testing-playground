describe("Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  


    context("Hero section", () => {
    it("the h1 contains the correct text", () => {
      cy.getByData("hero-heading").contains(
        "Testing Next.js Applications with Cypress"
      )
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
  
  context("Course section ", () => {
    it("Course: Testing Your First Next.js Application", () => {
      cy.getByData("course-0").find("a").contains("Get started").click() // on cible le lien dans le 1er cours
      cy.location("pathname").should("equal", "/testing-your-first-application")// on vérifie que le lien nous amène à la bonne page
    })
    it("Course: Testing Foundations", () => {
      cy.getByData("course-1").find("a").contains("Get started").click() // on cible le lien dans le 1er cours
      cy.location("pathname").should("equal", "/testing-foundations")// on vérifie que le lien nous amène à la bonne page
    })
       it("Course:Cypress Fundamentals", () => {
      cy.getByData("course-2").find("a").contains("Get started").click() // on cible le lien dans le 1er cours
      cy.location("pathname").should("equal", "/cypress-fundamentals")// on vérifie que le lien nous amène à la bonne page
    })
  })
})
})