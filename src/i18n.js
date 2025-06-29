import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Data bahasa
const resources = {
  en: {
    translation: {
      welcome: "Welcome to our server!",
      feature_title: "Features",
      buy_now: "Buy Now",
    },
  },
  id: {
    translation: {
      welcome: "Selamat datang di server kami!",
      feature_title: "Fitur",
      buy_now: "Beli Sekarang",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "id", // default bahasa
  fallbackLng: "en", // fallback kalau tidak ada terjemahan
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
