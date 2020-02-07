import "./App.css";
import React, { Component } from "react";
import AccountList from "./components/AccountList";
import {inject, observer} from "mobx-react";

class App extends Component {
  constructor(props) {
    super(props);
    this.props.storeAccounts.GET_ACCOUNTS();
  }

  render() {
      const store = this.props.storeAccounts;
      let output = "";
      if(store.accounts.loading){
         output = (
             <div>loading</div>
         )
      }else if(store.accounts.data){
      output = (
          <div>
            <AccountList accounts={store.accountsForUser} />
          </div>
      );
    }
    return output;
  }
}

export default inject('storeAccounts')(observer(App));