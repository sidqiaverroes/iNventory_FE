describe("Add Product Test", () => {
  beforeEach("Log in the user", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Login").click();
    cy.url().should("include", "/login");
    cy.get('input[name="email"]').type("farhan@gmail.com");
    cy.get('input[name="password"]').type("farhan123");
    cy.get("button").click();
    cy.url().should("include", "/dashboard");
  });

  it("Create new product", () => {
    cy.wait(2000);
    cy.contains("Add Product").click();
    cy.wait(1000);
    cy.get('input[name="name"]').type("Pulpen");
    cy.get('input[name="category"]').type("Alat Tulis");
    cy.get('input[name="price"]').type("5000");
    cy.get('input[name="quantity"]').type("2");

    cy.get("textarea").type("Pengujian Perangkat Lunak"); // yields <textarea>
    cy.contains("Save Product").click();
    cy.url().should("include", "/dashboard");
  });
});
