import React, { useContext } from "react";

export default function Link(props) {
  return (
    <a href={props.href}>
      <i className={props.class}></i> {props.text}
    </a>
  );
}
