import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="6906516808-tjlns5hobmdv01v1l9n2sn9tvboc8fce.apps.googleusercontent.com">
      <ToastContainer className="w-24 z-50" />
      <App />
    </GoogleOAuthProvider>
  </StrictMode>
);
