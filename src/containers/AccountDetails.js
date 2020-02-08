import React, { Component } from "react";
import PropTypes from "prop-types";
import {inject, observer} from "mobx-react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {buildChart} from "../config/amcharts-utils";

am4core.useTheme(am4themes_animated);
class AccountDetails extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
  componentDidMount() {
    console.log("[App.js] componentDidMount", this.props);
    if(!this.props.storeAccounts.accounts.data){
      this.props.storeAccounts.GET_ACCOUNTS();
    }

    let chart = am4core.create("chartdiv", am4charts.XYChart);

    const account = this.props.storeAccounts.accountsForUser.filter(o =>{
      return o.id === this.props.match.params.id;
    });

    if(account.length){
      chart.data = account[0].history.map(item => {
        return {
          date: item.date,
          value: item.value
        };
      });
    }

    chart = buildChart(chart);

  }
  render() {
    const account = this.props.storeAccounts.accountsForUser.filter(o =>{
      return o.id === this.props.match.params.id;
    });
    let accountItems = "";
    if(account.length){
      accountItems = account[0].history.map(item => {
        return (
          <div className="account-item" key={item.id}>
            <span>{item.date}</span>
            <span>&pound;{item.value}</span>
          </div>
        );
      });
    }
    
    return (
      <div>
        <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
        {accountItems}
        <p>account details {this.props.match.params.id}</p>
      </div>
    );
  }
}

AccountDetails.propTypes = {
  match: PropTypes.object,
  storeAccounts: PropTypes.object
};

export default inject("storeAccounts")(observer(AccountDetails));