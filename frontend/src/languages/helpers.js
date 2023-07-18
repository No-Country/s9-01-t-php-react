import { login_br, login_en, login_es } from "./login_model";
import { register_br, register_en, register_es } from "./register_model";

export const languageLogin = lang => {
  if (lang === "es") return login_es;
  if (lang === "br") return login_br;
  if (lang === "en") return login_en;
  else return login_es;
};
export const languageRegister = lang => {
  if (lang === "es") return register_es;
  if (lang === "br") return register_br;
  if (lang === "en") return register_en;
  else return register_es;
};
