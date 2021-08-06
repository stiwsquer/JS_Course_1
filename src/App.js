import React from "react";
import "./styles/style.scss";
import Layout from "./components/Layout";
import { SearchContextProvider } from "./context/SearchContext";
function App() {
  return (
    <SearchContextProvider>
      <Layout />
    </SearchContextProvider>
  );
}

export default App;
