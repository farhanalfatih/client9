import { useTranslation } from "react-i18next";
import idFlag from "../../assets/flags/bendera.webp";
import enFlag from "../../assets/flags/bendera.webp";
import { useState } from "react";

const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(i18n.language || "id");

  const languages = [
    { code: "id", label: "Indonesia", flag: idFlag },
    { code: "en", label: "English", flag: enFlag },
  ];

  const handleChangeLang = (lang) => {
    i18n.changeLanguage(lang.code);
    setSelectedLang(lang.code);
    setOpen(false);
  };

  const currentLang = languages.find((l) => l.code === selectedLang);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 px-3 py-1 border border-gray-300 dark:border-zinc-600 rounded-md bg-white dark:bg-zinc-900 text-sm hover:shadow-md"
      >
        <img src={currentLang.flag} alt={currentLang.label} className="w-5 h-3" />
        <span>{currentLang.label}</span>
        <i className="ri-arrow-down-s-line text-lg" />
      </button>

      {open && (
        <div className="absolute z-50 mt-2 w-40 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-md shadow-lg">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleChangeLang(lang)}
              className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-zinc-800"
            >
              <img src={lang.flag} alt={lang.label} className="w-5 h-3" />
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
