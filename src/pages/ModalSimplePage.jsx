import { useState, useCallback } from "react";
import ModalSimple from "@/component/modalSimple/ModalSimple";
import { MockData } from "@/component/mock";
import { Page } from "@/layouts/page";
import { useModal } from "@/utils/hook";

const ModalSimplePage = () => {
  const [isOpen1, setIsOpen] = useState(false);
  const handleBtnClick = () => {
    setIsOpen(true);
  };
  const handleXClick = () => {
    setIsOpen(false);
  };

  const { handleModals } = useModal();
  const handleRedux = useCallback(
    () =>
      handleModals({
        isOpen: true,
        contents: MockData,
        xOnClick: null,
      }),
    []
  );

  return (
    <Page>
      <button type="button" onClick={handleBtnClick}>
        click!
      </button>
      <ModalSimple isOpen={isOpen1} contents="simple" xOnClick={handleXClick} />
      <button type="button" onClick={handleRedux}>
        click2!
      </button>
    </Page>
  );
};

export default ModalSimplePage;
