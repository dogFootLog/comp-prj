import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalSimple from "@/component/modalSimple/ModalSimple";
import { MockData } from "@/component/mock";
import { Page } from "@/layouts/page";
import { handleModals } from "@/redux/modalSlice";

const ModalSimplePage = () => {
  const [isOpen1, setIsOpen] = useState(false);
  const handleBtnClick = () => {
    setIsOpen(true);
  };
  const handleXClick = () => {
    setIsOpen(false);
  };
  /* redux modal */
  const { isOpen, contents, xOnClick } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const handleRedux = () => {
    dispatch(
      handleModals({ isOpen: true, contents: MockData, xOnClick: null })
    );

    console.log(isOpen, contents, xOnClick);
  };

  return (
    <Page>
      <button type="button" onClick={handleBtnClick}>
        click!
      </button>
      <ModalSimple isOpen={isOpen1} contents="aaa" xOnClick={handleXClick} />
      <button type="button" onClick={handleRedux}>
        click2!
      </button>
    </Page>
  );
};

export default ModalSimplePage;
