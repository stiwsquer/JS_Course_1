import React, { useContext } from "react";
import Navigation from "./Navigation";
// import { SearchContext } from "../context/SearchContext";

export default function Header(props) {
  // const [input] = useContext(SearchContext);
  return (
    <header className="main-head">
      <Navigation />
      {/* <h1>Hello {input}</h1> */}
      <section className="sections"></section>
    </header>
  );
}
