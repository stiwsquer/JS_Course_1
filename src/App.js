import React from "react";
import "./App.css";
import { AppContextProvider } from "./context/app-context";
import NameDisplay from "./components/name-display";
import NameInput from "./components/name-input";

function App() {
  return (
    <AppContextProvider>
      <NameDisplay />
      <NameInput />
    </AppContextProvider>
  );
}

export default App;
