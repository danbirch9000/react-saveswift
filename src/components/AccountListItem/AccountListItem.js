import React from "react";
import PropTypes from "prop-types";
import "./AccountListItem.scss";
import {Link} from "react-router-dom";

const AccountListItem = (props) => {
  return (
    <div className="account-list-item">
      <h3>{props.account.name}</h3>
      <Link to={{pathname:`/Accounts/${props.account.id}`}}
        className="button">Go</Link>
    </div>
  );
};

AccountListItem.propTypes = {
  account: PropTypes.object
};
export default AccountListItem;
