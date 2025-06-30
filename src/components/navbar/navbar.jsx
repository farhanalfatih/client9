import { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
import gambar from "../../assets/gambar.png";
import ModeToggle from "../ModeToggle";
import Bahasa from "../bahasa/bahasa";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const { t } = useTranslation();

  const handleClick = () => setShow(!show);
  let menuAktive = show ? "right-0" : "-right-full";

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 5);
      if (window.scrollY > 5) {
        setShow(false);
        setOpenSettings(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navbar fixed w-full z-50 transition-all duration-300 ${
        scroll
          ? "py-4 bg-background/80 backdrop-blur shadow-md"
          : "py-4 bg-transparent"
      } `}
    >
      <div className="container mx-auto px-4">
        <div className="navbarbox flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="logo">
            <img
              src={gambar}
              alt="Logo"
              className="w-20 object-contain drop-shadow-lg"
            />
          </a>

          {/* Menu */}
          <ul
            className={`flex lg:gap-8 md:static md:flex-row md:shadow-none md:bg-transparent
              md:w-auto md:h-full md:translate-y-0 gap-6 fixed ${menuAktive}
              top-0 w-full h-screen pt-24 md:pt-0 px-6 flex-col rounded-none shadow-lg bg-background font-bold
              text-foreground md:flex md:items-center items-start text-left transition-all duration-300`}
          >
            <li className="opacity-90 hover:opacity-100 px-3 py-1">
              <a href="#home" className="block">
                {t("navbar.home")}
              </a>
            </li>
            <li className="opacity-90 hover:opacity-100 px-3 py-1">
              <a href="#tentangkami" className="block">
                {t("navbar.about")}
              </a>
            </li>
            <li className="opacity-90 hover:opacity-100 px-3 py-1">
              <a href="#fitur" className="block">
                {t("navbar.features")}
              </a>
            </li>
            <li className="opacity-90 hover:opacity-100 px-3 py-1">
              <a href="#rank" className="block">
                {t("navbar.rank")}
              </a>
            </li>

            <li className="px-3 py-1">
              <a
                href="https://discord.gg/Rcmw5RN5m6"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
              >
                <i className="ri-discord-fill text-white mr-2"></i>
                {t("navbar.join_discord")}
              </a>
            </li>

            {/* ✅ Settings Dropdown */}
            <li className="relative px-3 py-1">
              <button
                onClick={() => setOpenSettings(!openSettings)}
                className="flex items-center gap-2 hover:opacity-90"
              >
                <i className="ri-settings-4-line text-xl" />
                <span>Settings</span>
                <i
                  className={`ri-arrow-down-s-line text-sm transition-transform duration-200 ${
                    openSettings ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openSettings && (
                <div className="absolute mt-2 right-0 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-md shadow-lg z-50 p-4 space-y-2 min-w-[180px]">
                  <Bahasa />
                  <ModeToggle />
                </div>
              )}
            </li>
          </ul>

          {/* Icon menu mobile */}
          <i
            className={`text-2xl md:hidden block cursor-pointer z-[60] transition-all duration-200 ${
              show ? "ri-close-line" : "ri-menu-3-line"
            }`}
            onClick={handleClick}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
