import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice.js";

export default configureStore({
  reducer: {
    modal: modalReducer,
  },
  middleware: (middleware) => middleware({ serializableCheck: false }),
});
