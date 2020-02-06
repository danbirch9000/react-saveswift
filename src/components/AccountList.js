import React from "react";
import AccountListItem from "./AccountListItem";

const AccountList = props => {
  console.log(props);
  // eslint-disable-next-line react/prop-types
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

export default AccountList;