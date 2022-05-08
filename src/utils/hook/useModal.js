import { useDispatch, useSelector } from "react-redux";
import { handleModals } from "../redux/modalSlice";

const useModal = () => {
  const modalState = useSelector((state) => state.modal);

  const dispatch = useDispatch();
  const modalHandler = ({ props }) => {
    dispatch(handleModals(props));
  };

  return [modalState, modalHandler];
};

export default useModal;
