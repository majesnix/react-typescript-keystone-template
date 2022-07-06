import React from "react";
import { render, waitFor } from "@testing-library/react";
import ExampleConsumer from "./ExampleConsumer";
import { StoreProvider } from "./StoreProvider";
import createStore from "../dataLayer/stores/createStore";
import { createServer, Server } from "miragejs";

let server: Server;

test("renders init text", async () => {
  server = createServer({ environment: "test" });
  server.get("http://localhost:3000/examples", () => [
    { id: "abc", header: "init" },
  ]);

  // create store and wrap component
  const store = createStore();
  const { getByText } = render(
    <StoreProvider value={store}>
      <ExampleConsumer />
    </StoreProvider>
  );
  await waitFor(() => getByText(/init/));
  expect(getByText(/init/)).toBeInTheDocument();
});
