import { useCallback } from "react";
import { useModal } from "@/utils/hook";
import "./ModalRedux.css";

const ModalRedux = () => {
  const { isOpen, contents, xOnClick } = useModal().state;
  const { handleModals } = useModal();
  const handleXClick = useCallback(() => {
    xOnClick && xOnClick();
    handleModals({ isOpen: false, contents: null, xOnClick: null });
  }, [handleModals]);

  return (
    <div className={isOpen ? "openModal modal" : "modal"}>
      {isOpen ? (
        <section>
          <header>
            <button type="button" className="close" onClick={handleXClick}>
              ❌
            </button>
          </header>
          <main>{contents}</main>
          <footer>
            <button type="button" className="close" onClick={handleXClick}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default ModalRedux;
