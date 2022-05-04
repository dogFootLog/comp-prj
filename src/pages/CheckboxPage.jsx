import React, { useEffect, useState } from "react";
import { Checkbox } from "../component/checkbox";
import "./css/CheckboxPage.css";

const CheckboxPage = () => {
  const [checkedAll, setCheckedAll] = useState(false);
  const [checkedValues, setCheckedValues] = useState({
    checked1: false,
    checked2: false,
  });

  const onIndividualCheck = (e, idValue) => {
    setCheckedValues((prev) => ({ ...prev, [idValue]: e.target.checked }));
  };

  useEffect(() => {
    const keys = Object.keys(checkedValues);

    setCheckedAll(
      keys.filter((key) => checkedValues[key]).length === keys.length
    );
  }, [checkedValues]);

  const onTotalCheck = (e) => {
    setCheckedAll(e.target.checked);
    setCheckedValues({
      checked1: e.target.checked,
      checked2: e.target.checked,
    });
  };
  return (
    <div className="checkbox-page">
      <div className="total-box">
        <Checkbox
          id="checkboxAll"
          checked={checkedAll}
          labelText="전체 선택"
          onClick={onTotalCheck}
        />
      </div>
      <div className="individual-box">
        <Checkbox
          id="checkbox1"
          checked={checkedValues.checked1}
          labelText="선택 1"
          onClick={(e) => onIndividualCheck(e, "checked1")}
        />
        <Checkbox
          id="checkbox2"
          checked={checkedValues.checked2}
          labelText="선택 2"
          onClick={(e) => onIndividualCheck(e, "checked2")}
        />
      </div>
    </div>
  );
};

export default CheckboxPage;
