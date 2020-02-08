import React, { Component } from "react";
import Account from "./containers/Account";
import {Route, NavLink} from "react-router-dom";
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
        <nav>
          <h3>Header</h3>
        </nav>
        <NavLink to="/" 
          className="button"
          activeClassName='button-active'
          exact>Home</NavLink>
        <NavLink to={{pathname:"/Accounts"}} 
          exact 
          activeClassName='button-active'
          className="button">Accounts</NavLink>
        {/*<Route path="/Accounts" exact render={()=> <h1>Acc</h1>}/>*/}
        <Route path="/Accounts" exact component={Account}/>
      </div>
    );
  }
  
  
}

export default App;