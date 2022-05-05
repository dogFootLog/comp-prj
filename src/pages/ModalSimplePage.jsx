/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from "react";
import ModalSimple from "../component/modalSimple/ModalSimple";
import { MockData } from "../component/mock";

const ModalSimplePage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleBtnClick = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <button type="button" onClick={handleBtnClick}>
        click!
      </button>
      <ModalSimple isOpen={isOpen} contents={MockData} />
    </div>
  );
};

export default ModalSimplePage;
