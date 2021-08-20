import React, { useContext } from "react";
import { SearchContext, useSearchContext } from "../context/SearchContext";
import Navigation from "./NavigationV2";

export default function Header(props) {
  const [input] = useSearchContext();

  return (
    <header className="main-head">
      <Navigation />
      <h1>{input}</h1>

      <section className="sections"></section>
    </header>
  );
}
