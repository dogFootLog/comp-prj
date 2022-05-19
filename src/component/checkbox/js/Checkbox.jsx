import React from "react";
import { bool, func, string } from "prop-types";
import "./Checkbox.css";

// git push test
const Checkbox = ({ checked = false, labelText = "", onClick = null }) => {
  return (
    <div className="checkbox-div">
      <input type="checkbox" checked={checked} onChange={onClick} /> {labelText}
    </div>
  );
};

Checkbox.propTypes = {
  checked: bool,
  labelText: string,
  onClick: func,
};

export default Checkbox;
