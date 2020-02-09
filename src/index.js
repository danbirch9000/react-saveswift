import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "mobx-react";
import AccountsStore from "./store/accounts-store";
import { BrowserRouter } from "react-router-dom";
import "./sass/milligram/milligram.sass";
import {withToastProvider} from "./components/Toast";

const AppWithToastProvider = withToastProvider(App);


ReactDOM.render(
  <Provider storeAccounts={new AccountsStore()}>
    <BrowserRouter>
      <AppWithToastProvider />
    </BrowserRouter>
  </Provider>, document.getElementById("root"));
