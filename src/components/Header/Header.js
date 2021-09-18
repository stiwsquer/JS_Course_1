import React from "react";
import { useSearchContext } from "../../context/SearchContext";
import Navigation from "../Navigation/NavigationV2";
import "./style.scss";

export default React.memo(function Header() {
  const [input] = useSearchContext();

  return (
    <header className="main-head">
      <Navigation />
      <h1>{input}</h1>

      <section className="sections"></section>
    </header>
  );
});
