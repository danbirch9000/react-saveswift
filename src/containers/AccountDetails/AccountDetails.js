import React, { Component } from "react";
import PropTypes from "prop-types";
import {inject, observer} from "mobx-react";

import "./AccountDetails.scss";
import AccountHistoryTable from 
  "../../components/AccountHistoryTable/AccountHistoryTable";
import DataLoading from "../../components/DataLoading/DataLoading";
import LineChart from "../../components/LineChart/LineChart";
class AccountDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {chartData: null};
  }
  async componentDidMount() {
    if(!this.props.storeAccounts.accounts.data){
      await this.props.storeAccounts.GET_ACCOUNTS();
      this.setChartData();
    }else{
      this.setChartData();
    }
  }
  setChartData = () => {
    const account = this.props.storeAccounts.accountsForUser.filter(o =>{
      return o.id === this.props.match.params.id;
    });
    if(account.length){
      this.setState({
        chartData: account[0].history.map(item => {
          return {
            date: item.date,
            value: item.value
          };
        })
      });
    }
  }

  render() {
    const output = <div className="row">
      <div className="column column-75">
        <LineChart chartData={this.state.chartData}/>
      </div>
      <div className="column column-25">
        <AccountHistoryTable
          accountsForUser={this.props.storeAccounts.accountsForUser}
          match={this.props.match}
        />
      </div>
    </div>;
    return (
      <DataLoading
        state={this.props.storeAccounts.accounts}
        loadingMessage="Getting accounts..."
        slot={output}
      />
    );
  }
}

AccountDetails.propTypes = {
  match: PropTypes.object,
  storeAccounts: PropTypes.object
};

export default inject("storeAccounts")(observer(AccountDetails));