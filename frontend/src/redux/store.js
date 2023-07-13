import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import langReducer from "../features/langSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    lang: langReducer
  }
});
