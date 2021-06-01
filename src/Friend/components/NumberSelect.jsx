import React from "react";

const NumberSelect = ({ value, options, postfix, onChange }) => {
  return (
    <div>
      <select
        onChange={(e) => {
          const value = Number(e.currentTarget.value);
          onChange(value);
        }}
        value={value}
      >
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      {postfix}
    </div>
  );
};

export default NumberSelect;
