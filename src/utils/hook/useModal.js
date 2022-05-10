import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "@/redux/modalSlice";

const useModal = () => {
  const modalState = useSelector((state) => state.modal);

  const dispatch = useDispatch();
  const handleModals = (popupArgs) => {
    dispatch(modalActions(popupArgs));
  };

  return { state: modalState, handleModals };
};

export default useModal;
