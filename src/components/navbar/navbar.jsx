import { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
import gambar from "../../assets/gambar.png";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  let menuAktive = show ? "right-0" : "-right-full";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let scrollActive = scroll ? "py-6 bg-sky-100 shadow" : "py-4 ";

  return (
    <div className={`navbar fixed w-full ${scrollActive} z-50`}>
      <div className="container mx-auto px-4">
        <div className="navbarbox flex items-center justify-between">
          {/* Logo */}
          <div className="logo">
            <img
              src={gambar}
              alt="Logo"
              className="w-20 object-contain drop-shadow-lg"
            />
          </div>

          {/* Menu */}
          <ul
            className={`flex lg:gap-8 md:static md:flex-row md:shadow-none md:bg-transparent
    md:w-auto md:h-full md:translate-y-0 md:text-black gap-6 fixed ${menuAktive}
    top-0 w-3/4 h-full flex-col py-6 rounded-r-lg shadow-lg bg-sky-400 font-bold
    text-white md:flex md:items-center items-center text-center`} // 🧠 Tambah ini
          >
            <li className="font-medium opacity-90 hover:opacity-100 px-3 py-1">
              <a href="#home" className="block">
                Beranda
              </a>
            </li>
            <li className="font-medium opacity-90 hover:opacity-100 px-3 py-1">
              <a href="#about" className="block">
                Tentang Kami
              </a>
            </li>
            <li className="font-medium opacity-90 hover:opacity-100 px-3 py-1">
              <a href="#layanan" className="block">
                Fitur
              </a>
            </li>
            <li className="font-medium opacity-90 hover:opacity-100 px-3 py-1">
              <a href="#proyek" className="block">
                Rank
              </a>
            </li>


            <li>
              <a
                href=""
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 w-fit"
              >
                <i className="ri-discord-fill text-gray-800 mr-2"></i> Join Discord
              </a>
            </li>
          </ul>

          {/* Icon menu untuk mobile */}
          <i
            className={`text-2xl md:hidden block cursor-pointer z-50 transition-all duration-200 ${
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
