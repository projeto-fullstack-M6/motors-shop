<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Global } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
>>>>>>> 93711afcc066a1c23f0d7c5e305d48f710397e92

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <Global />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
=======
      <App />
    </BrowserRouter>
  </React.StrictMode>

)
>>>>>>> 93711afcc066a1c23f0d7c5e305d48f710397e92
