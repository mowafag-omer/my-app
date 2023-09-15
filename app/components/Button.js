'user client'
import React from "react";

const Button = ({ children, handelSubmit }) => {
  return (
    <button
      className="border border-gray-200 rounded p-2 shadow-sm"
      type="submit"
      onClick={handelSubmit}
    >
      {children}
    </button>
  );
};

export default Button;
