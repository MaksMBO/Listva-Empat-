import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "../i18n/en.json";
import translationUK from "../i18n/uk.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    uk: {
      translation: translationUK,
    },
  },
  fallbackLng: "uk",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
