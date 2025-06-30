import React from "react";
import "remixicon/fonts/remixicon.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <footer className="dark:bg-black dark:text-white bg-sky-100 text-black p-10 flex flex-wrap justify-between gap-5">
        {/* Media Sosial */}
        <div className="min-w-[250px]">
          <h3 className="text-xl mb-4 border-b-2 border-gray-400 inline-block pb-1">
            {t("footer.social")}
          </h3>
          <div className="flex gap-4">
            <a
              href="https://www.tiktok.com/@keyhardd"
              aria-label="Tiktok"
              className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded-full text-white text-lg hover:bg-gray-800 transition-colors"
            >
              <i className="ri-tiktok-fill"></i>
            </a>
            <a
              href="https://www.instagram.com/Dragon.Fix"
              aria-label="Instagram"
              className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded-full text-white text-lg hover:bg-gray-800 transition-colors"
            >
              <i className="ri-instagram-fill"></i>
            </a>
            <a
              href="https://www.youtube.com/@DragonFix"
              aria-label="YouTube"
              className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded-full text-white text-lg hover:bg-gray-800 transition-colors"
            >
              <i className="ri-youtube-fill"></i>
            </a>
          </div>
        </div>

        {/* Kontak */}
        <div className="min-w-[250px]">
          <h3 className="text-xl mb-4 border-b-2 border-gray-400 inline-block pb-1">
            {t("footer.contact")}
          </h3>
          <ul>
            <p className="text-sm mb-2">{t("footer.location")}</p>
            <li className="text-sm mb-2 hover:underline">
              <a href="https://wa.me/6285326972099">
                <span>+62</span> 853-2697-2099
              </a>
            </li>
          </ul>
        </div>

        {/* Navigasi Section */}
        <div className="min-w-[250px]">
          <h3 className="text-xl mb-4 border-b-2 border-gray-400 inline-block pb-1">
            {t("footer.section")}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:underline">
                {t("navbar.home")}
              </a>
            </li>
            <li>
              <a href="#tentangkami" className="hover:underline">
                {t("navbar.about")}
              </a>
            </li>
            <li>
              <a href="#fitur" className="hover:underline">
                {t("navbar.features")}
              </a>
            </li>
            <li>
              <a href="#rank" className="hover:underline">
                {t("navbar.rank")}
              </a>
            </li>
          </ul>
        </div>
      </footer>

      <div className="dark:bg-black dark:text-white bg-sky-100 text-black text-center text-xs py-3">
        © 2025 dragonsoof. {t("footer.rights")}
      </div>
    </>
  );
};

export default Footer;
