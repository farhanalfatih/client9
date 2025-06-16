import React from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Rank from "./section/Rank/Rank";
import Beranda from "./section/Beranda/Beranda";
import Tentangkami from "./section/tantangkami/tentangkami";
import Fitur from "./section/fitur/fitur";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-sky-100 text-black dark:bg-black dark:text-white relative overflow-hidden">
      
      {/* Background gradasi untuk DARK MODE */}
      <div className="hidden dark:block absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-b from-blue-900/30 via-blue-800/20 to-transparent blur-3xl"></div>
      </div>

      {/* Konten utama (di atas background gradasi) */}
      <div className="relative z-10">
        <Navbar />

        <main className="flex-1 mt-[90px]">
          <div className="">
            <Beranda />
          </div>

          <div className="mt-10">
            <Tentangkami />
          </div>

          <div className="mt-10">
            <Fitur />
          </div>

          <div className="mt-10">
            <Rank />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
