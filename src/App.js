import React, { Component } from "react";
import Account from "./containers/Account";
import AccountDetails from "./containers/AccountDetails";
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import "./App.scss";

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
  }

  render() {
    console.log("[App.js] render");
    return (
      <div>
        <Header/>
        <div className="container">
          <Route path="/Accounts" exact component={Account}/>
          <Route path="/Accounts/:id" exact component={AccountDetails}/>
        </div>
      </div>
    );
  }
  
  
}

export default App;