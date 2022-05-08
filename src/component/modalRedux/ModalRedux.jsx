import { useSelector } from "react-redux";
import "./ModalRedux.css";

const ModalRedux = () => {
  const { isOpen, contents, xOnClick } = useSelector((state) => state.modal);
  return (
    <div className={isOpen ? "openModal modal" : "modal"}>
      {isOpen ? (
        <section>
          <header>
            <button type="button" className="close" onClick={xOnClick}>
              ❌
            </button>
          </header>
          <main>{contents}</main>
          <footer>
            <button type="button" className="close" onClick={xOnClick}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default ModalRedux;
