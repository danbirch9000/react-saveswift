import React from "react";
import PropTypes from "prop-types";
import "./Icon.scss";
import { ReactComponent as LoaderSvg} 
  from "../../assets/icons/circle-loader.svg";
import { ReactComponent as WarningSvg}
  from "../../assets/icons/circle-warning.svg";
import {ICON_TYPES} from "../../config/types";

const Icon = (props) => {
  let icon = "";

  switch (props.icon) {
  case ICON_TYPES.ERROR:
    icon = <WarningSvg />;
    break;
  case ICON_TYPES.LOADER:
    icon = <LoaderSvg />;
    break;
  default:
    icon = "";
  }

  return (
    <span className="icon icon-sm">
      {icon}
    </span>
  );
};

Icon.propTypes = {
  icon: PropTypes.string
};

export default Icon;