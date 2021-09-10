import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.scss";

export default function Button({ children, type, nameOfTheClass, onClick }) {
  return (
    <button onClick={onClick} className={nameOfTheClass} type={type}>
      {children}
    </button>
  );
}
