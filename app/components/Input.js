'use client'
import React from "react";

const Input = ({ label, id, type, value, handleInputChange }) => {
  return (
    <div className="my-3">
      <label className="w-5" htmlFor={id}>
        {label}{" "}
      </label>
      <input
        className="border border-gray-200 rounded"
        type={type}
        value={value}
        id={id}
        onChange = {(e) => handleInputChange(e)}
      />
    </div>
  );
};

export default Input;
