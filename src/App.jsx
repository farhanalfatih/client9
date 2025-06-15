import React from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Rank from "./section/Rank/Rank";
import Beranda from "./section/Beranda/Beranda";
import Tentangkami from "./section/tantangkami/tentangkami";
import Fitur from "./section/fitur/fitur";

const App = () => {
  return (
    // bg-sky-100
    <div className="min-h-screen flex flex-col  bg-sky-100">
      <Navbar />
      <div className=""></div>
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
  );
};

export default App;
