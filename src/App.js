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
      if(this.props.storeAccounts.accounts.loading){
         return (
             <div>loading</div>
         )
      }else if(this.props.storeAccounts.accounts.data){
      return (
          <div>
            <AccountList accounts={this.props.storeAccounts.accounts.data} />
          </div>
      );
    }
    else{
      return null
    }
  }
}

export default inject('storeAccounts')(observer(App));