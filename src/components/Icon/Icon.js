import React from "react";
import PropTypes from "prop-types";
import "./Icon.scss";
import { ReactComponent as LoaderSvg} 
  from "../../assets/icons/circle-loader.svg";
const Icon = () => {
  return (
    <span className="icon icon-sm"><LoaderSvg/></span>
  );
};

Icon.propTypes = {
  message: PropTypes.string
};

export default Icon;