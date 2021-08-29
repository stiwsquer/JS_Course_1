import React, { useContext } from "react";
import { BrowserRouter as NavLink, Link } from "react-router-dom";
export default function NavItem({
  linkTo,
  iconClass,
  text,
  onClickFunction,
  reference,
}) {
  return (
    // <li onClick={onClickFunction} ref={reference}>
    <Link to={linkTo}>
      <i className={iconClass}></i>
      {iconClass !== null && " "}
      {text}
    </Link>
    // </li>
  );
}
