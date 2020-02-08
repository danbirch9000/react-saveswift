import React from "react";
import {NavLink} from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <nav>
      <h3>Header</h3>
      <NavLink to="/"
        className="button"
        activeClassName='button-active'
        exact>Home</NavLink>
      <NavLink to={{pathname:"/Accounts"}}
        exact
        activeClassName='button-active'
        className="button">Accounts</NavLink>
    </nav>
  );
};

export default Header;
