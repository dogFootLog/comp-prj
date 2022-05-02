import React, { useState } from "react";
import { Checkbox } from "../component";

const CheckboxPage = () => {
  const [checkedAll, setCheckedAll] = useState(false);
  return (
    <div className="checkbox-page">
      <Checkbox checked={checkedAll} labelText="테스트" />
    </div>
  );
};

export default CheckboxPage;
