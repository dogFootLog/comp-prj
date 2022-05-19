import React from "react";
import "./Checkbox.css";

interface propsType {
  checked: boolean;
  labelText: string;
  onClick(e: React.ChangeEvent<HTMLInputElement>): void;
}
const Checkbox = ({
  checked = false,
  labelText = "",
  onClick = () => {},
}: propsType) => {
  return (
    <div className="checkbox-div">
      <input type="checkbox" checked={checked} onChange={(e) => onClick(e)} />{" "}
      {labelText}
    </div>
  );
};

export default Checkbox;
