import React from "react";

const TentangKami = () => {
  return (
    <div id="tentangkami" className="flex flex-col md:flex-row items-center justify-center p-6 gap-8">
      {/* Kiri: Foto */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://placehold.co/600x400"
          alt="Tentang Kami"
          className="rounded-xl shadow-lg max-w-full h-auto"
        />
      </div>

      {/* Kanan: Teks */}
      <div className="md:w-8/12 w-full space-y-6">
        <h2 className=" dark:text-white text-4xl font-bold mb-4 text-black">Tentang Kami</h2>
        <p className=" dark:text-white text-gray-600 text-lg leading-relaxed">
          <span className="text-amber-400 font-semibold">DragonsOof</span>{" "}
          adalah server Minecraft survival 24/7 dengan mekanik custom dan fitur
          unik yang dirancang untuk menghadirkan pengalaman bermain yang beda
          dari yang lain. Server ini cocok buat kamu yang suka grind,
          eksplorasi, dan komunitas aktif!
        </p>

        <p className=" dark:text-white text-gray-600  text-lg leading-relaxed">
          Dari sistem{" "}
          <span className="text-amber-400 font-semibold">Custom Fishing</span>,{" "}
          <span className="text-amber-400 font-semibold">Global Event</span>,
          sampai{" "}
          <span className="text-amber-400 font-semibold">
            Battlepass & Land Protect
          </span>
          —semuanya bisa kamu nikmati tanpa harus top-up mahal. Semangat kami
          adalah menghadirkan gameplay yang seru, progresif, dan bisa dinikmati
          semua player.
        </p>

        <div className="mt-6 flex gap-4 flex-col sm:flex-row">
          <div className="bg-white text-slate-800 px-4 py-3 rounded-lg shadow flex items-center justify-between w-full sm:w-auto">
            <span className="mr-4 font-mono text-sm">DragonsOof.my.id</span>
            <button
              onClick={() => navigator.clipboard.writeText("DragonsOof.my.id")}
              className="text-sky-600 hover:text-sky-800 transition"
            >
              Salin
            </button>
          </div>

          <div className="bg-white text-slate-800 px-4 py-3 rounded-lg shadow flex items-center justify-between w-full sm:w-auto">
            <span className="mr-4 font-mono text-sm">Port: 19132</span>
            <button
              onClick={() => navigator.clipboard.writeText("19132")}
              className="text-sky-600 hover:text-sky-800 transition"
            >
              Salin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TentangKami;
