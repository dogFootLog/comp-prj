import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "@/redux/modalSlice";

const useModal = () => {
  const modalState = useSelector((state) => state.modal);

  const dispatch = useDispatch();
  const handleModals = (props) => {
    dispatch(modalActions(props));
  };

  return { state: modalState, handleModals };
};

export default useModal;
