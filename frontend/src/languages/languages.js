import { languageLogin } from "./helpers";

export const languages = lang => {
  return { language: lang, login: languageLogin(lang), register: {}, landing: {} };
};
