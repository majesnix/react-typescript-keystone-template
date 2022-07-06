import React from "react";
import { render, waitFor } from "@testing-library/react";
import App from "./App";
import { createServer, Server } from "miragejs";

let server: Server;

test("renders init text", async () => {
  server = createServer({ environment: "test" });
  server.get("http://localhost:3000/examples", () => [{ id: "abc", header: "init" }]);

  const { getByText } = render(<App />);
  await waitFor(() => getByText(/init/));
  expect(getByText(/init/)).toBeInTheDocument();
});
