import {
  languageAbout,
  languageFooter,
  languageLogin,
  languageNavbar,
  languagePlans,
  languageRegister,
  languageTemplate,
  languagelandingSection1,
  languagelandingSection2,
  languagelandingSection3
} from "./helpers";

export const languages = (lang = "es") => {
  return {
    language: lang,
    login: languageLogin(lang),
    register: languageRegister(lang),
    navbar: languageNavbar(lang),
    about: languageAbout(lang),
    plans: languagePlans(lang),
    template: languageTemplate(lang),
    footer: languageFooter(lang),
    landingSection1: languagelandingSection1(lang),
    landingSection2: languagelandingSection2(lang),
    landingSection3: languagelandingSection3(lang),

    landing: {}
  };
};
