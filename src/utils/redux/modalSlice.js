import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    contents: null,
    xOnClick: null,
  },
  reducers: {
    handleModals: (state, action) => ({ ...state, ...action.payload }),
  },
});

export const handleModals = modalSlice.actions.handleModals;
export default modalSlice.reducer;
