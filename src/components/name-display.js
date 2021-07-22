import React, { useContext } from "react";
import { AppContext } from "../context/app-context";

export default function NameDisplay() {
  const [name] = useContext(AppContext);

  return (
    <section>
      <h1>Witaj {name}</h1>
    </section>
  );
}
