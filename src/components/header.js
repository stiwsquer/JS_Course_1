import React, { useContext } from "react";
import Navigation from "./Navigation";
export default function Header(props) {
  return (
    <header className="main-head">
      <Navigation />
      <section className="sections"></section>
    </header>
  );
}
