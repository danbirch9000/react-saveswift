import React, {useState} from "react";

import {NavLink} from "react-router-dom";
import "./Header.scss";
import { ReactComponent as LogoSvg}
  from "../../assets/logos/SaveSwift.svg";
import { ReactComponent as BurgerSvg}
  from "../../assets/icons/burger.svg";
const Header = () => {
  
  const [showLinks, setShowLinks] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    setShowLinks(!showLinks);
  }
  function hideMenu(e){
    e.stopPropagation();
    setShowLinks(false);
  }
  return (
    <div>
      <nav>
        <div className="logos">
          <LogoSvg className={"main-logo"} />
          <BurgerSvg onClick={handleClick} className="burger-icon" />
        </div>
        <div className={`links ${showLinks ? "active" : ""}`}>
          <NavLink to="/"
            className="text-link"
            activeClassName='text-link--active'
            onClick={hideMenu}
            exact>Home</NavLink>
          <NavLink to={{pathname:"/Accounts"}}
            exact
            activeClassName='text-link--active'
            onClick={hideMenu}
            className="text-link">Accounts</NavLink>
        </div>
      </nav>
    </div>

  );
};

export default Header;
