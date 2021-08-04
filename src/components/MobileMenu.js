import React from "react";
import NavItem from "./NavItem";

export default function MobileMenu(props) {
  return (
    <div>
      <ul className="mobile-menu">
        <li onClick={() => props.setShowMenu(!props.showMenu)}>
          <NavItem
            linkTo="/signIn"
            iconClass="fas fa-sign-in-alt"
            text="Sign in"
          />
        </li>
        <li onClick={() => props.setShowMenu(!props.showMenu)}>
          <NavItem linkTo="/register" text="Register" />
        </li>
        <li onClick={() => props.setShowMenu(!props.showMenu)}>
          <NavItem linkTo="/search" iconClass="fas fa-search" text="Search" />
        </li>
      </ul>
    </div>
  );
}
