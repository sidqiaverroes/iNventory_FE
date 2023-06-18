describe("Login Test", () => {
  beforeEach("Log in the user", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Login").click();
    cy.url().should("include", "/login");
  });

  it("Login with Incorrect email", () => {
    cy.get('input[name="email"]').type("sidqiaverroes");

    cy.get('input[name="password"]').type("sidqi123");

    cy.get("button").click();

    cy.get(".Toastify__toast-body")
      .should("exist")
      .and("contain", "Please enter a valid email");

    cy.wait(5000);
  });

  it("Login with correct inputs", () => {
    cy.get('input[name="email"]').type("sidqi.averroes26@gmail.com");

    cy.get('input[name="password"]').type("sidqi123");

    cy.get("button").click();

    cy.url().should("include", "/dashboard");
  });
});
