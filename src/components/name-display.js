import React, { useContext } from "react";
import { AppContext } from "../context/app-context";

export default function NameDisplay() {
  const [name] = useContext(AppContext);

  return (
    <section className="name-display">
      <h1>Hello {name}</h1>
    </section>
  );
}
