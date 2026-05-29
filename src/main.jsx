import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import keycloak from "./config/keycloak.js";

const isPreviewMode = import.meta.env.VITE_PREVIEW_MODE === "true";

const renderApp = () => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
};

if (isPreviewMode) {
  renderApp();
} else {
  keycloak
    .init({
      onLoad: "login-required",
      checkLoginIframe: false,
    })
    .then((authenticated) => {
      if (!authenticated) {
        keycloak.login();
        return;
      }

      localStorage.setItem("access_token", keycloak.token);
      renderApp();
    })
    .catch((error) => {
      console.error("Keycloak init failed:", error);
    });
}