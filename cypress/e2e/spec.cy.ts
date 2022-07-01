describe("init spec", () => {
  beforeEach(() => {
    cy.configureCypressTestingLibrary({});
    cy.visit("/");
  });

  it("should load init text", () => {
    cy.findAllByText("Init").should("exist");
  });
});
