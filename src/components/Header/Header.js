import React from "react";
import {NavLink} from "react-router-dom";
import "./Header.scss";
import { ReactComponent as LogoSvg}
  from "../../assets/logos/SaveSwift.svg";
const Header = () => {
  return (
    <nav>
      <LogoSvg className="main-logo" />
      <div className="links">
        <NavLink to="/"
          className="text-link"
          activeClassName='text-link--active'
          exact>Home</NavLink>
        <NavLink to={{pathname:"/Accounts"}}
          exact
          activeClassName='text-link--active'
          className="text-link">Accounts</NavLink>
      </div>
    </nav>
  );
};

export default Header;
