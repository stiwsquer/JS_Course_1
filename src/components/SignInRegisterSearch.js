import React from "react";
import NavItem from "./NavItem";
import OutsideAlerter from "./OutsideAlerter";

export default function SignInRegisterSearch({
  mobileMenuStyle,
  setShowMenu,
  showMenu,
  setShowSerch,
  showSearch,
  nameOfTheClass,
  searchRef,
}) {
  const handleShowMenu = () => setShowMenu((prev) => !prev);
  return (
    <ul className={nameOfTheClass}>
      <li onClick={handleShowMenu}>
        <NavItem
          linkTo="/signIn"
          iconClass="fas fa-sign-in-alt"
          text="Sign in"
        />
      </li>
      <li className="vertical-line">|</li>
      <li onClick={handleShowMenu}>
        <NavItem linkTo="/register" text="Register" />
      </li>
      <li className="vertical-line">|</li>

      <li
        onClick={() => {
          setShowMenu(!showMenu);
          setShowSerch((prev) => !prev);
        }}
        ref={searchRef}
      >
        <NavItem linkTo="#" iconClass="fas fa-search" text="Search" />
      </li>
    </ul>
  );
}
