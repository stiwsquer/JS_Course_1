import React from "react";

export default function Input({
  labelText,
  isRequired,
  inputId,
  inputType,
  placeholder,
}) {
  return (
    <div className="input-wrapper">
      <label htmlFor={inputId}>{labelText}</label>
      {isRequired && (
        <input
          id={inputId}
          type={inputType}
          placeholder={placeholder}
          required
        />
      )}
      {!isRequired && (
        <input id={inputId} type={inputType} placeholder={placeholder} />
      )}
    </div>
  );
}
