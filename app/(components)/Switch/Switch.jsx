// Switch.js

import React from "react";

const Switch = ({ checked, onChange }) => {
  return (
    <div
      className={`relative inline-block w-16 h-6 bg-gray-300 rounded-full p-1 duration-300 ease-in-out ${
        checked ? "bg-yellow-400" : ""
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={`toggle-checkbox absolute block w-8 h-8 rounded-full appearance-none cursor-pointer ${
          checked ? "right-0" : "left-0"
        }`}
      />
      <label
        htmlFor="toggle"
        className="toggle-label block overflow-hidden h-8 rounded-full bg-white cursor-pointer"
      />
    </div>
  );
};

export default Switch;
