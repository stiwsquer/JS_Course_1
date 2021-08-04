import React from "react";

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
      {isRequired && (
        <input
          id={inputId}
          type={inputType}
          placeholder={placeholder}
          value={inputValue}
          onChange={onInputChange}
          required
        />
      )}
      {!isRequired && (
        <input id={inputId} type={inputType} placeholder={placeholder} />
      )}
    </div>
  );
}
