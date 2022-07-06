import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createServer, Response } from "miragejs";

// @ts-ignore
if (window.Cypress) {
  // If your app makes requests to domains other than / (the current domain), add them
  // here so that they are also proxied from your app to the handleFromCypress function.
  // For example: let otherDomains = ["https://my-backend.herokuapp.com/"]
  let otherDomains: string[] = [];
  let methods = ["get", "put", "patch", "post", "delete"];

  createServer({
    environment: "test",
    routes() {
      for (const domain of ["/", ...otherDomains]) {
        for (const method of methods) {
          // @ts-ignore
          this[method](`${domain}*`, async (schema, request) => {
            // @ts-ignore
            let [status, headers, body] = await window.handleFromCypress(
              request
            );

            return new Response(status, headers, body);
          });
        }
      }

      // If your central server has any calls to passthrough(), you'll need to duplicate them here
      // this.passthrough('https://analytics.google.com')
    },
  });
}

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
