import React from "react";
import diamond from "../../assets/gambar.png";
import emerald from "../../assets/image1.png";
import { useTranslation } from "react-i18next";

const products = [
  {
    name: "Ranks",
    image: diamond,
    price: "Rp.9.900",
    link: "https://store.dragonsoof.com/ranks",
  },
  {
    name: "Gems",
    image: emerald,
    price: "Rp.1.000",
    link: "https://store.dragonsoof.com/",
  },
];

const OurProducts = () => {
  const { t } = useTranslation();

  return (
    <div id="rank" className="py-16 text-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-gray-200 mb-10">
        {t("products.title")}
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-6">
        {products.map((product) => (
          <a
            key={product.name}
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <div className="bg-white dark:bg-[#252533] p-6 rounded-xl shadow-md w-[250px] text-center border border-gray-300 dark:border-gray-600 hover:scale-105 transition-transform duration-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 mx-auto mb-6"
              />
              <h3 className="text-xl font-bold text-orange-400">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {t("products.start_from")} <span>{product.price}</span>
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
