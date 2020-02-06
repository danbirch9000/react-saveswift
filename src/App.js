import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import AccountList from "./components/AccountList"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: []
    };
    this.accountSearch();

  }

  async accountSearch() {
    const search = await axios.get("http://localhost:9000/accounts/auth0%7C5b941aa872d4bb47f9a32abd.json");
    this.setState({ accounts: Object.keys(search.data).map(o => {
      return {
        ...search.data[o],
        id: o
      };
    }) });
    console.log({state: this.state});
  }

  render() {
    return (
      <div>
        <p>{this.state.accounts.length}</p>
        <AccountList accounts={this.state.accounts} />
      </div>
    );
  }
}

export default App;