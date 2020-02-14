import React, { Component } from "react";
import {inject, observer} from "mobx-react";
import {Route} from "react-router-dom";
import Account from "./containers/Account";
import PropTypes from "prop-types";
import AccountDetails from "./containers/AccountDetails/AccountDetails";
import CreateAccount from "./containers/CreateAccount";
import Home from "./containers/Home";
import Header from "./components/Header/Header";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.storeAccounts.GET_GOALS();
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <Route path="/" exact component={Home}/>
          <Route path="/accounts" exact component={Account}/>
          <Route path="/accounts/:id" exact component={AccountDetails}/>
          <Route path="/create-account" exact component={CreateAccount}/>
        </div>
      </div>
    );
  }
}
App.propTypes = {
  storeAccounts: PropTypes.object
};
export default inject("storeAccounts")(observer(App));