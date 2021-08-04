import React, { useContext } from "react";
import Input from "./Input";
import { SearchContext } from "../context/SearchContext";
export default function SearchBar({
  showSearch,
  setShowSerch,
  focus,
  setFocus,
}) {
  const [input, setInput] = useContext(SearchContext);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search-box">
      {/* Why is it not working? */}
      {/* <Input
        inputValue={input}
        onInputChange={handleChange}
        inputId="search"
        inputType="search"
        placeholder="Search"
      /> */}

      <input
        placeholder="Search"
        type="text"
        value={input}
        onChange={handleChange}
        onBlur={() => {
          // setFocus(false);
          setShowSerch(false);
        }}
        // autoFocus={focus}
      />
    </div>
  );
}
