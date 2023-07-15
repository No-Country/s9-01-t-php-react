import { languageLogin, languageRegister } from "./helpers";

export const languages = (lang = "es") => {
  return {
    language: lang,
    login: languageLogin(lang),
    register: languageRegister(lang),
    landing: {}
  };
};
