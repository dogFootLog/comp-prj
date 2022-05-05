import { bool, node, string, oneOfType } from "prop-types";
import "./ModalSimple.css";

const ModalSimple = ({ isOpen = false, contents }) => {
  return (
    isOpen && (
      <div className="modal-wrap">
        <div className="modal-inner">{contents}</div>
      </div>
    )
  );
};

ModalSimple.propTypes = {
  isOpen: bool,
  contents: oneOfType([string, node]),
};

export default ModalSimple;
