import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const rankTiers = [
  {
    tier: "Tier 1",
    price: "Rp10.000",
    waNumber: "6281234567890",
    modes: [
      {
        mode: "Skyblock",
        rank: "Supporter",
        features: ["/fly", "/kit", "/warp"],
      },
      {
        mode: "Survival",
        rank: "Basic",
        features: ["/fly", "/kit", "/warp"],
      },
    ],
  },
  {
    tier: "Tier 2",
    price: "Rp25.000",
    waNumber: "6281234567890",
    modes: [
      {
        mode: "Skyblock",
        rank: "VIP",
        features: ["/fly", "/kit", "/warp", "/nick"],
      },
      {
        mode: "Survival",
        rank: "Callisto",
        features: ["/fly", "/kit", "/warp", "/home"],
      },
    ],
  },
  {
    tier: "Tier 9",
    price: "Rp100.000",
    waNumber: "6281234567890",
    modes: [
      {
        mode: "Skyblock",
        rank: "Immortal",
        features: ["/fly", "/kit", "/warp", "/fixall", "/nick", "/heal"],
      },
      {
        mode: "Survival",
        rank: "Zeus",
        features: ["/fly", "/kit", "/warp", "/feed", "/back", "/fixall"],
      },
    ],
  },
  {
    tier: "Tier 9",
    price: "Rp100.000",
    waNumber: "6281234567890",
    modes: [
      {
        mode: "Skyblock",
        rank: "Immortal",
        features: ["/fly", "/kit", "/warp", "/fixall", "/nick", "/heal"],
      },
      {
        mode: "Survival",
        rank: "Zeus",
        features: ["/fly", "/kit", "/warp", "/feed", "/back", "/fixall"],
      },
    ],
  },
  {
    tier: "Tier 9",
    price: "Rp100.000",
    waNumber: "6281234567890",
    modes: [
      {
        mode: "Skyblock",
        rank: "Immortal",
        features: ["/fly", "/kit", "/warp", "/fixall", "/nick", "/heal"],
      },
      {
        mode: "Survival",
        rank: "Zeus",
        features: ["/fly", "/kit", "/warp", "/feed", "/back", "/fixall"],
      },
    ],
  },
  
  {
    tier: "Tier 9",
    price: "Rp100.000",
    waNumber: "6281234567890",
    modes: [
      {
        mode: "Skyblock",
        rank: "Immortal",
        features: ["/fly", "/kit", "/warp", "/fixall", "/nick", "/heal"],
      },
      {
        mode: "Survival",
        rank: "Zeus",
        features: ["/fly", "/kit", "/warp", "/feed", "/back", "/fixall"],
      },
    ],
  },
  {
    tier: "Tier 9",
    price: "Rp100.000",
    waNumber: "6281234567890",
    modes: [
      {
        mode: "Skyblock",
        rank: "Immortal",
        features: ["/fly", "/kit", "/warp", "/fixall", "/nick", "/heal"],
      },
      {
        mode: "Survival",
        rank: "Zeus",
        features: ["/fly", "/kit", "/warp", "/feed", "/back", "/fixall"],
      },
    ],
  },
  {
    tier: "Tier 9",
    price: "Rp100.000",
    waNumber: "6281234567890",
    modes: [
      {
        mode: "Skyblock",
        rank: "Immortal",
        features: ["/fly", "/kit", "/warp", "/fixall", "/nick", "/heal"],
      },
      {
        mode: "Survival",
        rank: "Zeus",
        features: ["/fly", "/kit", "/warp", "/feed", "/back", "/fixall"],
      },
    ],
  },
  {
    tier: "Tier 9",
    price: "Rp100.000",
    waNumber: "6281234567890",
    modes: [
      {
        mode: "Skyblock",
        rank: "Immortal",
        features: ["/fly", "/kit", "/warp", "/fixall", "/nick", "/heal"],
      },
      {
        mode: "Survival",
        rank: "Zeus",
        features: ["/fly", "/kit", "/warp", "/feed", "/back", "/fixall"],
      },
    ],
  },


];

const Rank = () => {
  const [selectedTier, setSelectedTier] = useState(null);
  const [formData, setFormData] = useState({
    nama: "",
    nickname: "",
    note: "",
  });

  const beliSekarang = (tier) => {
    setSelectedTier(tier);
  };

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const kirimKeWA = () => {
    const { nama, nickname, note } = formData;

    if (!nama.trim() || !nickname.trim()) {
      alert("Nama dan Nickname Minecraft wajib diisi!");
      return;
    }

    const pesan = `Halo Admin, saya ingin membeli rank:

Tier: ${selectedTier.tier}
Harga: ${selectedTier.price}

Nama: ${nama}
Nickname Minecraft: ${nickname}
Catatan: ${note}`;

    const url = `https://wa.me/${selectedTier.waNumber}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
  };

  const closeModal = () => {
    setSelectedTier(null);
    setFormData({ nama: "", nickname: "", note: "" });
  };

  return (
    <div id="rank" className="px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="dark:text-white  text-black font-bold text-3xl">
          Pilih Rank Sesuai Mode Favoritmu
        </h1>
        <p className="dark:text-white text-black font-medium text-lg mt-2">
          Setiap Tier memiliki rank & fitur unik di Skyblock dan Survival.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {rankTiers.map((tier, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-white/10 backdrop-blur-sm rounded-xl shadow-md p-4 border hover:shadow-xl transition duration-300 text-sm"
          >
            <div>
              <h2 className=" dark:text-white text-lg font-bold text-black mb-2">{tier.tier}</h2>
              {tier.modes.map((mode, i) => (
                <div key={i} className="mb-3">
                  <h3 className=" dark:text-white font-semibold text-black">
                    {mode.mode}: <span className="text-indigo-600">{mode.rank}</span>
                  </h3>
                  <ul className=" dark:text-white list-disc list-inside text-gray-700 text-xs">
                    {mode.features.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-4 border-t pt-4 flex flex-col items-center justify-between">
              <p className="text-indigo-600 font-semibold mb-2">{tier.price}</p>
              <button
                onClick={() => beliSekarang(tier)}
                className="bg-indigo-600 text-white px-4 py-1.5 rounded-md hover:bg-indigo-700 transition w-full text-center text-sm"
              >
                Beli Sekarang
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedTier && (
          <motion.div
            className=" fixed inset-0 bg-white/40 backdrop-blur-sm flex items-center justify-center z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="dark:bg-black dark:text-white bg-white rounded-xl p-6 w-full max-w-md shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h2 className=" dark:text-white text-xl font-bold text-center mb-4 text-black">
                Pembelian {selectedTier.tier}
              </h2>
              <div className="space-y-3 text-sm">
                <input
                  type="text"
                  name="nama"
                  placeholder="Nama"
                  value={formData.nama}
                  onChange={handleInput}
                  className="w-full border p-2 rounded-md"
                />
                <input
                  type="text"
                  name="nickname"
                  placeholder="Nickname Minecraft"
                  value={formData.nickname}
                  onChange={handleInput}
                  className="w-full border p-2 rounded-md"
                />
                <textarea
                  name="note"
                  placeholder="Catatan (opsional)"
                  value={formData.note}
                  onChange={handleInput}
                  className="w-full border p-2 rounded-md"
                />
              </div>
              <div className="flex justify-between items-center mt-5">
                <button
                  onClick={closeModal}
                  className="text-gray-600 hover:underline"
                >
                  Batal
                </button>
                <button
                  onClick={kirimKeWA}
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                >
                  Kirim ke WhatsApp
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Rank;
