import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "mobx-react";
import AccountsStore from "./store/accounts.store";

ReactDOM.render(<Provider storeAccounts={new AccountsStore()}><App /></Provider>, document.getElementById("root"));

