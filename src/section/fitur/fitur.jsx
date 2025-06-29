import React from "react";
import 'remixicon/fonts/remixicon.css';


const features = [
  {
    title: "Custom Fishing",
    desc: "Nikmati sistem mancing yang unik dan seru, beda dari server biasa!",
    icon: "ri-fish-line",
  },
  {
    title: "Global Event",
    desc: "Rasakan petualangan epik dengan event besar penuh tantangan dan hadiah langka!",
    icon: "ri-earth-line",
  },
  {
    title: "Custom Survival Mechanic",
    desc: "Pengalaman survival baru dengan mekanik yang menantang dan fresh!",
    icon: "ri-tools-line",
  },
  {
    title: "RPG Wannabe",
    desc: "Level, skill, dan progres ala game RPG. Bikin main jadi makin immersive!",
    icon: "ri-sword-line",
  },
  {
    title: "Land Protect",
    desc: "Lindungi wilayah kamu dari grief! Sistem klaim tanah yang mudah dan aman.",
    icon: "ri-shield-check-line",
  },
  {
    title: "Economy & Battlepass",
    desc: "Dapatkan reward dari sistem ekonomi & battlepass yang aktif dan update!",
    icon: "ri-trophy-line",
  },
  {
    title: "Custom World",
    desc: "Jelajahi dunia unik yang dirancang indah, dengan bioma yang belum pernah kamu temui!",
    icon: "ri-landscape-line",
  },
  {
    title: "Gameplay Imersif",
    desc: "Dari ekonomi dinamis hingga interaksi sosial — dunia Minecraft terasa hidup!",
    icon: "ri-gamepad-line",
  },
  {
    title: "Brand New Experience",
    desc: "Gebrakan baru dengan plugin dan mekanisme inovatif yang ubah cara main Minecraft!",
    icon: "ri-lightbulb-flash-line",
  },
  {
    title: "Crossplatform (Java & Bedrock)",
    desc: "Main bareng tanpa batas! Java & Bedrock bisa gabung dalam satu server!",
    icon: "ri-device-line",
  },
  {
    title: "Voice Chat & EmoteCraft",
    desc: "Komunikasi langsung dan ekspresi karakter bebas dengan mod Voice & EmoteCraft!",
    icon: "ri-mic-line",
  },
];

const Features = () => {
  return (
    <section id="fitur" className=" dark:text-white  text-black py-20 px-6">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">fitur unggulan server kami</h2>
        <p className="text-lg opacity-90">
          Kami menghadirkan pengalaman Minecraft survival yang seru, aman, dan adil untuk semua pemain!
        </p>
      </div>

      <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col items-start shadow hover:shadow-lg transition duration-300"
          >
            <i className={`${feature.icon} text-3xl text-sky-300 mb-4`}></i>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm opacity-80">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
