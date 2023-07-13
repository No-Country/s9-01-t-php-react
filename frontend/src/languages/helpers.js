import { login_br, login_en, login_es } from "./login_model";

export const languageLogin = lang => {
  if (lang === "es") return login_es;
  if (lang === "br") return login_br;
  if (lang === "en") return login_en;
};
