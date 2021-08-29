import React from "react";
import "./style.scss";

export default function Button({ children, type }) {
  return <button type={type}>{children}</button>;
}
