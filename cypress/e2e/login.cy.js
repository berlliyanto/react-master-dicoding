/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when username or password is empty
 *   - should display alert when username and password are wrong
 *   - should display homepage when username and password are correct
 */

describe("Login spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5000/login");
  });

  it("should display login page correctly", () => {
    cy.get('input[placeholder="Input Email"]').should("be.visible");
    cy.get('input[placeholder="Input Password"]').should("be.visible");
    cy.get("button")
      .contains(/^Login$/)
      .should("be.visible");
  });

  it("should display alert when username or password is empty", () => {
    cy.get("button")
      .contains(/^Login$/)
      .click();

    cy.contains("Data tidak boleh kosong").should("be.visible");
  });

  it("should display alert when username and password are wrong", () => {
    cy.get('input[placeholder="Input Email"]').type("baji@email.com");
    cy.get('input[placeholder="Input Password"]').type("opapsda");

    cy.get("button")
      .contains(/^Login$/)
      .click();

    cy.contains("email or password is wrong").should("be.visible");
  });

  it('should display homepage when username and password are correct', () => {
    cy.get('input[placeholder="Input Email"]').type("baji@email.com");
    cy.get('input[placeholder="Input Password"]').type("123456");

    cy.get("button")
      .contains(/^Login$/)
      .click();

      cy.get('header').contains(/^Dicoding Forum App$/).should('be.visible');
      cy.get('div').contains('Logout').should('be.visible');
  })
});
