import { useState } from "react";
import HookState from "@/component/hookTest/HookState";
import { Page } from "@/layouts/page";

const HookTest = () => {
  const [visible, setVisible] = useState(true);

  const onChangeVisible = () => {
    setVisible(!visible);
  };
  return (
    <Page>
      <button type="button" onClick={onChangeVisible}>
        Change Visibility
      </button>
      {visible && <HookState />}
    </Page>
  );
};

export default HookTest;
