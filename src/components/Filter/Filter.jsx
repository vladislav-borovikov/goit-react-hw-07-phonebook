import React from "react";

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contact:
      <input type="text" name="" value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;


