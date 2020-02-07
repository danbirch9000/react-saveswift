import React from "react";
import PropTypes from "prop-types";

const AccountListItem = (props) => {

  const accountItems = props.account.history.map(item => {
    return (
      <div key={item.id}>
        {item.date} - &pound;{item.value}
      </div>
    );
  });

  return (
    <div>
      <p>{props.account.name}</p>
      {accountItems}
    </div>
  );
};

AccountListItem.propTypes = {
  account: PropTypes.object
};
export default AccountListItem;
