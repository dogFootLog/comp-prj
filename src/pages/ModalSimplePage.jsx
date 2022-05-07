/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from "react";
import ModalSimple from "../component/modalSimple/ModalSimple";
import { MockData } from "../component/mock";
import "./css/ModalSimplePage.css";

const ModalSimplePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleBtnClick = () => {
    setIsOpen(true);
  };
  const handleXClick = () => {
    setIsOpen(false);
  };
  return (
    <div className="page-wrap">
      <button type="button" onClick={handleBtnClick}>
        click!
      </button>
      <ModalSimple
        isOpen={isOpen}
        contents={MockData}
        xOnClick={handleXClick}
      />
    </div>
  );
};

export default ModalSimplePage;
