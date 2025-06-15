import React from "react";
import CD from "../../components/cound";
import ImageKanan from "../../assets/gambar.png";
import { BoxReveal } from "../../components/magicui/box-reveal";

const Beranda = () => {
  return (
    <div className="relative mt-10 min-h-[500px] md:min-h-[600px] overflow-hidden">
      {/* CD sebagai background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <CD />
      </div>

      {/* Konten utama di atas background */}
      <div
        className="relative z-10 flex flex-col-reverse md:flex-row items-center
       justify-between h-full px-6 lg:mt-35 md:px-16 pt-8 md:pt-0"
      >
        {/* Teks di kiri */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 space-y-4">
          <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
              Selamat Datang di{" "}
              <span className="text-amber-400">DragonsOof</span>
            </h1>
          </BoxReveal>

          <BoxReveal boxColor={"#38bdf8"} duration={0.5}>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
              Main survival nggak lagi biasa-biasa aja! Nikmati fitur{" "}
              <span className="text-sky-400 font-semibold">
                Custom Survival
              </span>
              ,{" "}
              <span className="text-sky-400 font-semibold">
                Fishing & Economy
              </span>
              , <span className="text-sky-400 font-semibold">Land Protect</span>
              , dan{" "}
              <span className="text-sky-400 font-semibold">Battlepass</span>{" "}
              dalam dunia yang hidup 24/7. Bangun, bertahan, dan jadi legenda!
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#3b82f6"} duration={1.2}>
            <div
              className="mt-2 flex flex-col sm:flex-row gap-4 justify-center md:flex-row
              items-center"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300">
                <i className="ri-discord-fill text-gray-800 mr-2"></i> Join
                Discord
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300">
                Beli Rank
              </button>
            </div>
          </BoxReveal>
        </div>

        {/* Gambar PNG di kanan */}
        <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end lg:-translate-x-10 transition-transform duration-300">
            <img
              src={ImageKanan}
              alt="Gambar Kanan"
              className="w-52 sm:w-64 md:w-[500px] lg:w-[550px] object-contain drop-shadow-lg"
            />
          </div>
        </BoxReveal>
      </div>
    </div>
  );
};

export default Beranda;
