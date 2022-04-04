describe("App test", function () {
  it("open site", () => {
    cy.visit("http://localhost:3000");
  });

  it("input", function () {
    cy.get("input").type("bulbasaur");
  });

  it("click submit", function () {
    cy.get("#submit").click();
    // cy.get("#learnmore").click();
  });

  it("click on pokemon", function () {
    // cy.get("#submit").click();
    cy.contains("Learn More").click();
  });

  it("close modal", function () {
    // cy.get("#submit").click();
    cy.contains("Close Modal").click();
  });

  it("empty input", function () {
    // cy.get("#submit").click();
    cy.contains("Clear").click();
  });
});
