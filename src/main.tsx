import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Global } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Providers } from "./providers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <Global />
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
