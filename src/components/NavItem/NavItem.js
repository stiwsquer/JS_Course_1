import React, { useContext } from "react";
import { BrowserRouter as NavLink, Link } from "react-router-dom";
export default function NavItem(props) {
  return (
    <Link to={props.linkTo}>
      <i className={props.iconClass}></i>
      {props.iconClass !== null && " "}
      {props.text}
    </Link>
  );
}
