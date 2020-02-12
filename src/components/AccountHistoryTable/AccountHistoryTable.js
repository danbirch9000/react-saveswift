import React from "react";
import PropTypes from "prop-types";
import {observer} from "mobx-react";
import moment from "moment";

const AccountHistoryTable = observer((props) => {
  console.log("AccountHistoryTable", props.accountsForUser);
  const account = props.accountsForUser.filter(o =>{
    return o.id === props.match.params.id;
  });
  let accountItems = "";
  if(account.length){
    accountItems = account[0].history.map(item => {
      return (
        <div className="account-item" key={item.id}>
          <span>{moment(item.date).format("DD-MM-YYYY")}</span>
          <span>&pound;{item.value}</span>
        </div>
      );
    });
  }
  return (
    <div>
      <h3>Account history</h3>
      <div className="account-history">
        {accountItems}
      </div>
    </div>
  );
});

AccountHistoryTable.propTypes = {
  storeAccounts: PropTypes.object
};

export default AccountHistoryTable;