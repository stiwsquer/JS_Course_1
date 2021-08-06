import React from "react";

/**
 * TODO: labelText -> children
 */

export default function Input({
  labelText,
  isRequired,
  inputId,
  inputType,
  placeholder,
  inputValue,
  onInputChange,
}) {
  return (
    <div className="input-wrapper">
      <label htmlFor={inputId}>{labelText}</label>
        <input
          id={inputId}
          type={inputType}
          placeholder={placeholder}
          value={inputValue}
          onChange={onInputChange}
          required={isRequired}
        />
    </div>
  );
}
