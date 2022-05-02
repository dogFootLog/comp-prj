import React from "react";
import { bool, string } from "prop-types";

const Checkbox = ({ checked = false, labelText = "" }) => {
  return (
    <>
      <input type="checkbox" checked={checked} /> {labelText}
    </>
  );
};

Checkbox.propTypes = {
  checked: bool,
  labelText: string,
};

export default Checkbox;
