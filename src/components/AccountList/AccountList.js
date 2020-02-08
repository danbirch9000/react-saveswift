import React from "react";
import AccountListItem from "../AccountListItem/AccountListItem";
import PropTypes from "prop-types";

const AccountList = props => {
  const accountItems = props.accounts.map(item => {
    return (
      <div key={item.id}>
        <AccountListItem
          account={item}
        />
      </div>
    );
  });

  return (
    <div>
      {accountItems}
    </div>
  );
};

AccountList.propTypes = {
  accounts: PropTypes.array,
};

export default AccountList;