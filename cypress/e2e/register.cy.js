describe("Register Test", () => {
  it("Visits the IVT App and do register activity", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Register").click();

    cy.url().should("include", "/register");

    cy.get('input[name="name"]').type("Farhan");

    cy.get('input[name="email"]').type("farhan@gmail.com");

    cy.get('input[name="password"]').type("farhan123");

    cy.get('input[name="password2"]').type("farhan123");

    cy.get("button").click();

    if (
      cy
        .get(".Toastify__toast-body")
        .should("exist")
        .and("contain", "User already registered")
    ) {
      cy.url(toast).should("include", "/register");
    } else {
      cy.url().should("include", "/dashboard");
    }
  });
});
