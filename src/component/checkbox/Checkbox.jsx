import React from "react";

const Checkbox = ({ checked = false, labelText = "" }) => {
  return (
    <>
      <label>
        <input type="checkbox" checked={checked} />
        {labelText}
      </label>
    </>
  );
};

export default Checkbox;
