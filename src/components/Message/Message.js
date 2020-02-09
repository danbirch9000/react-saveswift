import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import "./Message.scss";

const Message = (props) => {
  return (
    <div className="alert-message alert-message-info">
      <Icon />
      <div className="alert-message-inner">
        {props.message}
      </div>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.string
};

export default Message;