import { useState } from "react";
import { Dropdown } from "@/component/dropdown";
import { Page } from "@/layouts/page";
import "./css/DropdownPage.css";

const DropdownPage = () => {
  const [value, setValue] = useState("");
  const [autowidth, setAutowidth] = useState(false);
  const items = [
    { value: "10", label: "TEN" },
    { value: "20", label: "TWENTY" },
    { value: "30", label: "THIRTY" },
  ];

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <section>
      <Page>
        <div className="button-wrap">
          <button type="button" onClick={() => setAutowidth(true)}>
            Auto-Width
          </button>
          <button type="button" onClick={() => setAutowidth(false)}>
            NO-Auto-Width
          </button>
        </div>
        <Dropdown
          labelText="Age"
          items={items}
          onChange={onChange}
          autowidth={autowidth}
        />
        {!!value && <h5>당신의 나이는 {value}살입니다</h5>}
      </Page>
    </section>
  );
};

export default DropdownPage;
