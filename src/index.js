import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import { StateProvider } from "./components/contex/GlobalState";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StateProvider>
  <Router>  <App /></Router>
  
  </StateProvider>,
  rootElement
);
