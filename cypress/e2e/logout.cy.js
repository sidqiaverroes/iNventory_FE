describe("Logout Test", () => {
  it("Login and then logout", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Login").click();

    cy.url().should("include", "/login");

    cy.get('input[name="email"]').type("farhan@gmail.com");

    cy.get('input[name="password"]').type("farhan123");

    cy.get("button").click();

    cy.url().should("include", "/dashboard");

    cy.reload();

    cy.contains("Logout").click();

    cy.url().should("include", "/login");
  });
});
