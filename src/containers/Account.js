import React, { Component } from "react";
import {inject, observer} from "mobx-react";
import PropTypes from "prop-types";
import AccountList from "../components/AccountList/AccountList";
import DataLoading from "../components/DataLoading/DataLoading";

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
    output = (
      <div>
        <DataLoading
          state={store.accounts}
          loadingMessage="Getting accounts..."
          slot={<AccountList accounts={store.accountsForUser} />}
        />
      </div>
    );
    return output;
  }
}

Account.propTypes = {
  storeAccounts: PropTypes.object
};

export default inject("storeAccounts")(observer(Account));