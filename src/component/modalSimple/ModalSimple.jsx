import { bool, node, string, oneOfType, func } from "prop-types";
import "./ModalSimple.css";

const ModalSimple = ({ isOpen = false, contents, xOnClick = null }) => {
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

ModalSimple.propTypes = {
  isOpen: bool,
  contents: oneOfType([string, node]),
  xOnClick: func,
};

export default ModalSimple;
