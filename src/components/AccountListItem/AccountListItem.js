import React from "react";
import PropTypes from "prop-types";
import "./AccountListItem.scss";
import {Link} from "react-router-dom";
import { useToast } from "../Toast";

const AccountListItem = (props) => {  
  const toast = useToast();
  const showToast = () => toast.add("Toast created from child component!");
    
  return (
    <div className="account-list-item">
      <button onClick={showToast}>Show me a toast</button>

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
