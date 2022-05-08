import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    contents: null,
    xOnClick: null,
  },
  reducers: {
    modalActions: (state, action) => ({ ...state, ...action.payload }),
  },
});

export const modalActions = modalSlice.actions.modalActions;
export default modalSlice.reducer;
