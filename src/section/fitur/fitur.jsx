import React from "react";
import { useTranslation } from "react-i18next";
import "remixicon/fonts/remixicon.css";

const iconList = [
  "ri-earth-line",
  "ri-global-line",
  "ri-sword-line",
  "ri-shield-check-line",
  "ri-landscape-line",
  "ri-gamepad-line",
  "ri-lightbulb-flash-line",
  "ri-mic-line"
];

const Features = () => {
  const { t } = useTranslation();
  const features = t("features.list", { returnObjects: true });

  return (
    <section id="fitur" className="dark:text-white text-black py-20 px-6">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">{t("features.title")}</h2>
        <p className="text-lg opacity-90">{t("features.desc")}</p>
      </div>

      <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col items-start shadow hover:shadow-lg transition duration-300"
          >
            <i className={`${iconList[index]} text-3xl text-sky-300 mb-4`}></i>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm opacity-80">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
