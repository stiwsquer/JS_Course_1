import React from "react";
import "./style.scss";
export default React.memo(function Select({
  isRequired,
  selectId,
  handleChange,
  options,
  placeholder,
  children,
}) {
  return (
    <div className="select-wrapper">
      <label htmlFor={selectId}>{children}</label>

      <select
        placeholder={placeholder}
        name={selectId}
        id={selectId}
        onChange={handleChange}
        required={isRequired}
      >
        {options.map((item) => {
          return (
            <option key={item.key} value={item.value}>
              {item.text}
            </option>
          );
        })}
      </select>
    </div>
  );
});
