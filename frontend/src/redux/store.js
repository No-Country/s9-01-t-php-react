import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import langReducer from "../features/langSlice";
import certificateReducer from "../features/certificateSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    lang: langReducer,
    certificate: certificateReducer
  }
});
