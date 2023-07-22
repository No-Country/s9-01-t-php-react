import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import langReducer from "../features/langSlice";
import certificateReducer from "../features/certificateSlice";
import templateReducer from "../features/templateSlice";
import logoReducer from "../features/logosSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    lang: langReducer,
    certificate: certificateReducer,
    templates: templateReducer,
    logos: logoReducer
  }
});
