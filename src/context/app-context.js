import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [input, setInput] = useState("");

  return (
    <AppContext.Provider value={[input, setInput]}>
      {children}
    </AppContext.Provider>
  );
};
