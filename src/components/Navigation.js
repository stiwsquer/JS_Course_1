import React, { useState, useContext } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";
import SearchBox from "./SearchBox";

export default function Navigation(props) {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSerch] = useState(false);
  // const [focus, setFocus] = useState(true);

  let mobileMenu;
  if (showMenu === true) {
    mobileMenu = <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />;
  }

  let searchBar;
  if (showSearch === true) {
    searchBar = (
      <SearchBox
        // focus={focus}
        // setFocus={setFocus}
        showSearch={showSearch}
        setShowSerch={setShowSerch}
      />
    );
  }

  return (
    <>
      <nav className="nav-links">
        <span className="burger" onClick={() => setShowMenu(!showMenu)}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </span>
        {mobileMenu}
        <ul className="signIn-register-search">
          <li>
            <NavItem
              linkTo="/signIn"
              iconClass="fas fa-sign-in-alt"
              text="Sign in"
            />
          </li>
          <li className="vertical-line">|</li>
          <li>
            <NavItem linkTo="/register" text="Register" />
          </li>
          <li className="vertical-line">|</li>
          <li
            onClick={() => {
              // setFocus(!focus);
              setShowSerch(!showSearch);
            }}
          >
            <NavItem linkTo="#" iconClass="fas fa-search" text="Search" />
          </li>
        </ul>

        <ul className="logo-cart">
          <li>
            <h1 className="logo">
              <NavItem linkTo="/" text="DressUp" />
            </h1>
          </li>
          <li>
            <NavItem linkTo="#" iconClass="fas fa-shopping-cart" text="Cart" />
          </li>
        </ul>
      </nav>
      {searchBar}
    </>
  );
}
