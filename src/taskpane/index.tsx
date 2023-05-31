import App from "/App";
import { AppContainer } from "react-hot-loader";
import React from "react";
import ReactDOM from "react-dom/client";
import { HookRouter as Router } from "react-router-dom";

let isOfficeInitialized = false;

const title = "Contoso Task Pane Add-in";
const root = ReactDOM.createRoot(document.getElementById("container"));

root.render(
  <AppContainer>
    <Router>
      <Component title={title} isOfficeInitialized={isOfficeInitialized} />
    </Router>
  </AppContainer>
);

/* Render application after Office initializes */
Office.onReady(() => {
  isOfficeInitialized = true;
  render(App);
});

if ((module as any).hot) {
  (module as any).hot.accept("./components/App", () => {
    const NextApp = require("./components/App").default;
    render(NextApp);
  });
}
