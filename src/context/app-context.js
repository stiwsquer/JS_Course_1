import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [input, setInput] = useState("");

  return (
    <AppContext.Provider value={[input, setInput]}>
      {props.children}
    </AppContext.Provider>
  );
};
