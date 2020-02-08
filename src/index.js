import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "mobx-react";
import AccountsStore from "./store/accounts-store";
import { BrowserRouter } from "react-router-dom";
import "./sass/milligram/milligram.sass";

ReactDOM.render(
  <Provider storeAccounts={new AccountsStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById("root"));
