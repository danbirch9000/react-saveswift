import React from "react";
import PropTypes from "prop-types";
import "./AccountListItem.scss";

const AccountListItem = (props) => {

  const accountItems = props.account.history.map(item => {
    return (
      <div className="account-item" key={item.id}>
        <span>{item.date}</span>
        <span>&pound;{item.value}</span>
      </div>
    );
  });

  return (
    <div className="account-list-item">
      <h3>{props.account.name}</h3>
      {accountItems}
    </div>
  );
};

AccountListItem.propTypes = {
  account: PropTypes.object
};
export default AccountListItem;
