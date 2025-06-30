import React from "react";
import { useTranslation, Trans } from "react-i18next";
import Gambar from "../../assets/aboutimg.jpg";

const TentangKami = () => {
  const { t } = useTranslation();

  return (
    <div id="tentangkami" className="flex flex-col md:flex-row items-center justify-center p-6 gap-8">
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={Gambar}
          alt={t("tentangKami.title")}
          className="rounded-xl shadow-lg max-w-full h-auto"
        />
      </div>

      <div className="md:w-8/12 w-full space-y-6">
        <h2 className="dark:text-white text-4xl font-bold mb-4 text-black">
          {t("tentangKami.title")}
        </h2>

        <p className="dark:text-white text-gray-600 text-lg leading-relaxed">
          <Trans i18nKey="tentangKami.p1" components={{ 0: <span className="text-amber-400 font-semibold" />, 1: <span className="font-semibold text-amber-400" /> }} />
        </p>

        <p className="dark:text-white text-gray-600 text-lg leading-relaxed">
          <Trans i18nKey="tentangKami.p2" components={{ 0: <span className="text-amber-400 font-semibold" />, 1: <span className="text-amber-400 font-semibold" /> }} />
        </p>

        <div className="mt-6 flex gap-4 flex-col sm:flex-row">
          <div className="bg-white text-slate-800 px-4 py-3 rounded-lg shadow flex items-center justify-between w-full sm:w-auto">
            <span className="mr-4 font-mono text-sm">{t("tentangKami.ip")}</span>
            <button
              onClick={() => navigator.clipboard.writeText(t("tentangKami.ip"))}
              className="text-sky-600 hover:text-sky-800 transition"
            >
              {t("tentangKami.salin")}
            </button>
          </div>

          <div className="bg-white text-slate-800 px-4 py-3 rounded-lg shadow flex items-center justify-between w-full sm:w-auto">
            <span className="mr-4 font-mono text-sm">{t("tentangKami.port")}</span>
            <button
              onClick={() => navigator.clipboard.writeText("19132")}
              className="text-sky-600 hover:text-sky-800 transition"
            >
              {t("tentangKami.salin")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TentangKami;
