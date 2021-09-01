import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.scss";
 
export default function Button({
  children,
  type,
  nameOfTheClass,
  onClick,
  linkTo,
}) {

  return (
    <Link to={linkTo}>
      <button onClick={onClick} className={nameOfTheClass} type={type}>
        {children}
      </button>
    </Link>
  );
}
