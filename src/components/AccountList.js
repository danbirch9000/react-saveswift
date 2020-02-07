import React from "react";
import AccountListItem from "./AccountListItem";
import PropTypes from "prop-types";

const AccountList = props => {
  console.log(props);
  const videoItems = props.accounts.map(item => {
    return (
      <AccountListItem
        account={item}
        key={item.id}
      />
    );
  });

  return (
    <div>
      {videoItems}
    </div>
  );
};

AccountList.propTypes = {
  accounts: PropTypes.array,
};

export default AccountList;