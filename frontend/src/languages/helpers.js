import { register_br, register_en, register_es } from "./register_model";
import { login_br, login_en, login_es } from "./login_model";
import { about_br, about_en, about_es } from "./about_model";
import { plans_br, plans_en, plans_es } from "./plans_model";
import { template_br, template_en, template_es } from "./template_model";
import { footer_br, footer_en, footer_es } from "./footer_model";
import {
  landingSection1_br,
  landingSection1_en,
  landingSection1_es
} from "./LandingSection1_model";
import { navbar_br, navbar_en, navbar_es } from "./navbar_model";
import {
  landingSection2_br,
  landingSection2_en,
  landingSection2_es
} from "./LandingSection2_model";
import {
  landingSection3_br,
  landingSection3_en,
  landingSection3_es
} from "./LandingSection3_model";
import {
  landingSection5_br,
  landingSection5_en,
  landingSection5_es
} from "./LandingSection5_model";
import {
  landingSection4_br,
  landingSection4_en,
  landingSection4_es
} from "./LandingSection4_model";

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

export const languageAbout = lang => {
  if (lang === "es") return about_es;
  if (lang === "br") return about_br;
  if (lang === "en") return about_en;
  else return about_es;
};

export const languagePlans = lang => {
  if (lang === "es") return plans_es;
  if (lang === "br") return plans_br;
  if (lang === "en") return plans_en;
  else return plans_es;
};

export const languageTemplate = lang => {
  if (lang === "es") return template_es;
  if (lang === "br") return template_br;
  if (lang === "en") return template_en;
  else return template_es;
};

export const languageFooter = lang => {
  if (lang === "es") return footer_es;
  if (lang === "br") return footer_br;
  if (lang === "en") return footer_en;
  else return footer_es;
};

export const languageNavbar = lang => {
  if (lang === "es") return navbar_es;
  if (lang === "br") return navbar_br;
  if (lang === "en") return navbar_en;
  else return navbar_es;
};

export const languagelandingSection1 = lang => {
  if (lang === "es") return landingSection1_es;
  if (lang === "br") return landingSection1_br;
  if (lang === "en") return landingSection1_en;
  else return landingSection1_es;
};

export const languagelandingSection2 = lang => {
  if (lang === "es") return landingSection2_es;
  if (lang === "br") return landingSection2_br;
  if (lang === "en") return landingSection2_en;
  else return landingSection2_es;
};

export const languagelandingSection3 = lang => {
  if (lang === "es") return landingSection3_es;
  if (lang === "br") return landingSection3_br;
  if (lang === "en") return landingSection3_en;
  else return landingSection3_es;
};

export const languagelandingSection4 = lang => {
  if (lang === "es") return landingSection4_es;
  if (lang === "br") return landingSection4_br;
  if (lang === "en") return landingSection4_en;
  else return landingSection4_es;
};

export const languagelandingSection5 = lang => {
  if (lang === "es") return landingSection5_es;
  if (lang === "br") return landingSection5_br;
  if (lang === "en") return landingSection5_en;
  else return landingSection5_es;
};
