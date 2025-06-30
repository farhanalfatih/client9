import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./components/bahasa/en.json";
import translationID from "./components/bahasa/id.json";

const resources = {
  en: { translation: translationEN },
  id: { translation: translationID },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("i18nextLng") || "id", // baca dari localStorage
  fallbackLng: "id",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
