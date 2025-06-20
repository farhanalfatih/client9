import React from "react";
import "remixicon/fonts/remixicon.css";

const Footer = () => {
  return (
    <>

      <footer className="dark:bg-black dark:text-white bg-sky-100 text-black p-10 flex flex-wrap justify-between gap-5">
        {/* Bagian Media Sosial */}
        <div className="min-w-[250px]">
          <h3 className="text-xl mb-4 border-b-2 border-gray-400 inline-block pb-1">
            Social Media
          </h3>
            <div className="flex gap-4">
            <a
              href="https://www.tiktok.com/@allnaaaaaaa"
              aria-label="TIKTOK"
              className="w-10 h-10 bg-gray-700 flex items-center justify-center
                            rounded-full text-white text-lg hover:bg-gray-800 transition-colors"
            >
              <i className="ri-tiktok-fill"></i>
            </a>
             <a
              href="https://www.tiktok.com/@allnaaaaaaa"
              aria-label="TIKTOK"
              className="w-10 h-10 bg-gray-700 flex items-center justify-center
                            rounded-full text-white text-lg hover:bg-gray-800 transition-colors"
            >
              <i class="ri-youtube-fill"></i>
            </a>
             <a
              href="https://www.tiktok.com/@allnaaaaaaa"
              aria-label="TIKTOK"
              className="w-10 h-10 bg-gray-700 flex items-center justify-center
                            rounded-full text-white text-lg hover:bg-gray-800 transition-colors"
            >
              <i class="ri-instagram-fill"></i>
            </a>
          </div>
        </div>

        <div className="min-w-[250px]">
          <h3 className="text-xl mb-4 border-b-2 border-gray-400 inline-block pb-1">
            Contact
          </h3>
          <ul>
            <li className="text-sm  mb-2 hover:underline">
              <a href="">sasasasasasasa@gmail.com</a>
            </li>
            <li className="text-sm  mb-2 hover:underline">
              <a href=""><span>+62</span> 000 000 000</a>
            </li>
          </ul>
        </div>

        {/* Bagian Kosong (Placeholder) */}
        <div className="min-w-[250px]">
          <h3 className="text-xl mb-4 border-b-2 border-gray-400 inline-block pb-1">
            Section
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:underline">
                Beranda
              </a>
            </li>
            <li>
              <a href="#tentangkami" className="hover:underline">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#fitur" className="hover:underline">
                Fitur
              </a>
            </li>
            <li>
              <a href="#rank" className="hover:underline">
                Rank
              </a>
            </li>
          </ul>
        </div>
      </footer>

      {/* Bagian Copyright */}
      <div className=" dark:bg-black dark:text-white bg-sky-100  text-black text-center text-xs py-3">
        Copyright &copy; dragonsoof 2025. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
