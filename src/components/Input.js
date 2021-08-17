import React from "react";

export default function Input({
  isRequired,
  inputId,
  inputType,
  placeholder,
  inputValue,
  onInputChange,
  autoFocus,
  children,
}) {
  return (
    <div className="input-wrapper">
      <label htmlFor={inputId}>{children}</label>

      <input
        id={inputId}
        type={inputType}
        placeholder={placeholder}
        value={inputValue}
        onChange={onInputChange}
        required={isRequired}
        autoFocus={autoFocus}
      />
    </div>
  );
}
