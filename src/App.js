import React from "react";
import "./styles/style.scss";
import { AppContextProvider } from "./context/app-context";
import NameDisplay from "./components/name-display";
import NameInput from "./components/name-input";

function App() {
  return (
    <AppContextProvider>
      <div className="main">
        <NameDisplay />
        <NameInput />
      </div>
    </AppContextProvider>
  );
}

export default App;
