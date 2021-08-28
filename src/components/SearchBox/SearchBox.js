import React, { useContext } from "react";
import Input from "../Input/Input";
import { useSearchContext } from "../../context/SearchContext";
import "./style.scss";
export default function SearchBar({ nameOfTheClass, showSearch }) {
  const [input, setSearchInput] = useSearchContext();
  return (
    <div className={nameOfTheClass}>
      {/* <div className={showSearch ? "search-box" : "inactive-search"}> */}
      <Input
        inputValue={input}
        onInputChange={setSearchInput}
        inputId="search"
        inputType="search"
        placeholder="Search"
        autoFocus={true}
      />
    </div>
  );
}
