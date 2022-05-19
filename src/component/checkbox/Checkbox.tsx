import React from "react";
import "./Checkbox.css";

interface propsType {
  checked: boolean;
  labelText: string;
  onClick(): void;
}
const Checkbox = ({
  checked = false,
  labelText = "",
  onClick = (/* e: React.ChangeEvent<HTMLInputElement> */) => {},
}: propsType) => {
  return (
    <div className="checkbox-div">
      <input type="checkbox" checked={checked} onChange={onClick} />
      {labelText}
    </div>
  );
};

export default Checkbox;
