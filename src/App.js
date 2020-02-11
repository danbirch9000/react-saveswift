import React, { Component } from "react";
import Account from "./containers/Account";
import {inject, observer} from "mobx-react";
import AccountDetails from "./containers/AccountDetails";
import CreateAccount from "./containers/CreateAccount";
import Home from "./containers/Home";
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import "./App.scss";
import PropTypes from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
    
  // static getDerivedStateFromProps(props, state){
  //   console.log("[App.js] getDerivedStateFromProps", props);
  //   return state;
  // }
  //
  componentDidMount() {
    console.log("[App.js] componentDidMount", this.props);
    this.props.storeAccounts.GET_GOALS();

  }

  render() {
    console.log("[App.js] render");
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