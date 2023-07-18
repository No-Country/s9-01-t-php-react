import { createSlice } from "@reduxjs/toolkit";
import { languages } from "../languages/languages";

const initialLang = () => {
  let lang = "es";
  const langStorage = localStorage.getItem("language");
  if (langStorage) {
    lang = langStorage;
  }
  return languages(lang);
};

const lang = createSlice({
  name: "lang",
  initialState: initialLang(),
  reducers: {
    changeLang: (state, action) => {
      const lang = action.payload;
      localStorage.setItem("language", lang);
      return languages(lang);
    }
  }
});

export const { changeLang } = lang.actions;
export default lang.reducer;
