import React, { useContext } from "react";
import { AppContext, AppContextProvider } from "../context/app-context";
import { AppContext } from "../context/app-context";

export default function NameDisplay() {
  const [name] = useContext(AppContext);

  return (
    <div>
      <h1>Witaj {name}</h1>
    </div>
  );
}
