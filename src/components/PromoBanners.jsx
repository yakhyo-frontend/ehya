import React, { useContext } from "react";
import { ThemeContext } from "../App";

export default function PromoBanners() {
  const { theme } = useContext(ThemeContext);

  const cardStyle =
    theme === "dark"
      ? "bg-[#131722] text-white border-slate-800"
      : "bg-white text-slate-900 border-gray-200 shadow-sm";

  return (
    <section className="w-[1220px] mx-auto px-4 py-6">
      <div className="flex gap-6 mb-6">
        <div
          className={`w-[65%] rounded-3xl p-8 border flex flex-col justify-between items-center text-center transition-all duration-300 relative overflow-hidden ${cardStyle}`}
        >
          <div>
            <h2
              className={`text-3xl mb-3 ${
                theme === "dark" ? "text-cyan-300" : "text-indigo-950"
              }`}
            >
              Free Delivery
            </h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-5 py-2 rounded-full transition">
              Learn More
            </button>
          </div>

          <div className="mt-8 flex justify-center w-full">
            <img
              src="https://koolkishan.github.io/react-ecommerce/static/media/service1.ef943db3db7e7b40efdc.png"
              alt="Free Delivery"
              className="h-56 object-contain"
            />
          </div>
        </div>

        <div
          className={`w-[35%] rounded-3xl p-8 border flex flex-col justify-between items-center text-center transition-all duration-300 ${cardStyle}`}
        >
          <div>
            <p className="text-[10px] text-blue-500 tracking-widest uppercase">
              EHYAVERSARRY MONTHLY DEALS
            </p>
            <h3
              className={`text-2xl mt-2 mb-2 ${
                theme === "dark" ? "text-cyan-300" : "text-indigo-950"
              }`}
            >
              Free Delivery
            </h3>
            <a
              href="#"
              className="text-xs text-blue-500 hover:underline inline-flex items-center gap-1"
            >
              LEARN MORE →
            </a>
          </div>

          <div className="mt-6 flex justify-center w-full">
            <img
              src="https://koolkishan.github.io/react-ecommerce/static/media/service4.1a1de13d00a71dbeddc1.png"
              alt="Monthly Deals"
              className="h-[195px] object-contain"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        <div
          className={`w-[50%] rounded-3xl p-8 border flex items-center justify-between gap-4 transition-all duration-300 ${cardStyle}`}
        >
          <div className="text-left">
            <h3
              className={`text-2xl mb-2 ${
                theme === "dark" ? "text-cyan-300" : "text-indigo-950"
              }`}
            >
              Disc Up to 25%
            </h3>
            <a
              href="#"
              className="text-xs text-blue-500 hover:underline inline-flex items-center gap-1"
            >
              LEARN MORE →
            </a>
          </div>

          <img
            src="https://koolkishan.github.io/react-ecommerce/static/media/service2.41b64b1be02a7bdb33a5.png"
            alt="Discount"
            className="w-[50%] h-[160px] object-contain"
          />
        </div>

        <div
          className={`w-[50%] rounded-3xl p-8 border flex items-center justify-between gap-4 transition-all duration-300 ${cardStyle}`}
        >
          <div className="text-left">
            <h3
              className={`text-2xl mb-2 ${
                theme === "dark" ? "text-cyan-300" : "text-indigo-950"
              }`}
            >
              Free 5GB Data
            </h3>
            <a
              href="#"
              className="text-xs text-blue-500 hover:underline inline-flex items-center gap-1"
            >
              LEARN MORE →
            </a>
          </div>

          <img
            src="https://koolkishan.github.io/react-ecommerce/static/media/service3.dafd497d2b067714b70b.png"
            alt="Free Data"
            className="w-[50%] h-[160px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
