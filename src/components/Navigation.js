import React, { useContext } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import NavItem from "./NavItem";
export default function Navigation(props) {
  return (
    <nav className="nav-links">
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
        <li>
          <NavItem linkTo="/search" iconClass="fas fa-search" text="Search" />
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
  );
}
