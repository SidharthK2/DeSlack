import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MoralisProvider } from "react-moralis";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MoralisProvider initializeOnMount={false}>
    <App />
  </MoralisProvider>
);
