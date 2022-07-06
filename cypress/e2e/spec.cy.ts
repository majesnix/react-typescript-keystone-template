import { createServer, Server } from "miragejs";

describe("init spec", () => {
  let server: Server;

  beforeEach(() => {
    server = createServer({ environment: "test", logging: true });
    cy.configureCypressTestingLibrary({});
  });

  it("should load init text", () => {
    server.get("http://localhost:3000/examples", () => {
      return [{ id: "abc", header: "init" }];
    });

    cy.visit("/");

    cy.findAllByText("init").should("exist");
  });
});
