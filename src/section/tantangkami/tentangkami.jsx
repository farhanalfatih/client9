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
        <h2 className="dark:text-white text-4xl font-bold mb-4 text-black">Tentang Kami</h2>
        <p className="dark:text-white text-gray-600 text-lg leading-relaxed">
          <span className="text-amber-400 font-semibold">DragonsOof</span> adalah server Minecraft Indonesia yang telah berdiri sejak tahun 2022. Dibangun dan dikembangkan oleh <span className="font-semibold text-amber-400">DragonFix</span> bersama timnya, DragonsOof hadir sebagai komunitas dan terus berkembang untuk memberikan pengalaman bermain terbaik bagi para pemain.
        </p>

        <p className="dark:text-white text-gray-600 text-lg leading-relaxed">
          Kini, DragonsOof menghadirkan dua pilihan gamemode utama: <span className="text-amber-400 font-semibold">Survival</span> dan <span className="text-amber-400 font-semibold">Skyblock</span>, yang dirancang dengan sistem dan fitur eksklusif untuk menambah tantangan serta keseruan dalam bermain.
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
