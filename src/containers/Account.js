import React, { Component } from "react";
import {Link} from "react-router-dom";
import {inject, observer} from "mobx-react";
import PropTypes from "prop-types";
import AccountList from "../components/AccountList/AccountList";
import DataLoading from "../components/DataLoading/DataLoading";

class Account extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] componentDidMount", this.props);

  }
  componentDidCatch(error, errorInfo) {
    console.log({error, errorInfo});
  }

  componentDidMount() {
    this.props.storeAccounts.GET_ACCOUNTS();
  }

  render() {
    console.log("rendering ACCOUNT");
    let output = "";
    output = (
      <div>
        <Link to="/create-account" className="button">Create account</Link>
        <DataLoading
          state={this.props.storeAccounts.accounts}
          loadingMessage="Getting accounts..."
          slot={
            <AccountList accounts={this.props.storeAccounts.accountsForUser} 
            />}
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