import React, { Component } from "react";
import {inject, observer} from "mobx-react";
import PropTypes from "prop-types";
import AccountList from "../components/AccountList/AccountList";


class Account extends Component {
  constructor(props) {
    super(props);
    this.props.storeAccounts.GET_ACCOUNTS();
  }
  componentDidMount() {
    console.log("[App.js] componentDidMount", this.props);
  }
  render() {
    const store = this.props.storeAccounts;
    let output = "";
    if(store.accounts.loading){
      output = (
        <div>loading</div>
      );
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

Account.propTypes = {
  storeAccounts: PropTypes.object
};

export default inject("storeAccounts")(observer(Account));