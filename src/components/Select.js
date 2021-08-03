import React from "react";

export default function Select({
  labelText,
  isRequired,
  selectId,
  handleChange,
  options,
  placeholder,
}) {
  return (
    <div className="select-wrapper">
      <label htmlFor={selectId}>{labelText}</label>

      <div>
        {isRequired && (
          <select
            placeholder={placeholder}
            name={selectId}
            id={selectId}
            onChange={handleChange}
            required
          >
            {options.map((item) => {
              return (
                <option key={item.value} value={item.value}>
                  {item.text}
                </option>
              );
            })}
          </select>
        )}
        {!isRequired && (
          <select
            placeholder={placeholder}
            name={selectId}
            id={selectId}
            value={value}
            onChange={handleChange}
          >
            {countryOptions.map((item) => {
              return (
                <option key={item.value} value={item.value}>
                  {item.text}
                </option>
              );
            })}
          </select>
        )}
      </div>
    </div>
  );
}
