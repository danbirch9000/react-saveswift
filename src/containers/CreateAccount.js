import React, { Component } from "react";
import {inject, observer} from "mobx-react";
import CreateAccountForm from "../components/Forms/CreateAccountForm";
class CreateAccount extends Component {
  constructor(props) {
    super(props);
    console.log("[CreateAccount.js] constructor");
  }
  componentDidMount() {
    console.log("[CreateAccount.js] componentDidMount", this.props);
  }
  render() {
    return (
      <CreateAccountForm/>
    );
  }
}


export default inject("storeAccounts")(observer(CreateAccount));