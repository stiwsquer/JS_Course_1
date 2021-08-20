import React, { useContext } from "react";
import Input from "./Input";
import { useSearchContext } from "../context/SearchContext";
export default function SearchBar({ nameOfTheClass }) {
  const [input, setSearchInput] = useSearchContext();

  return (
    <div className={nameOfTheClass}>
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
