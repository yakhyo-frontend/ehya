import { useContext, useState } from "react";
import { ThemeContext } from "../App";

export default function Subscribe() {
  const { theme } = useContext(ThemeContext);

  const cardStyle =
    theme === "dark"
      ? "bg-[#131722] text-white border-slate-800"
      : "bg-white text-slate-900 border-gray-200 shadow-sm";

  return (
    <section className="w-[1220px] mx-auto px-4 py-12">
      <div
        className={`rounded-3xl p-10 border flex items-center justify-between gap-8 transition-colors duration-300 ${cardStyle}`}
      >
        <div className="w-[40%] flex justify-center">
          <img
            src="https://koolkishan.github.io/react-ecommerce/static/media/promo.3f211a9c7969f112a2cb.png"
            alt="Never Miss a Promo"
            className="w-full w-[380px] object-contain"
          />
        </div>

        <div className="w-[60%] text-center flex flex-col items-center">
          <h2
            className={`text-2xl mb-3 ${
              theme === "dark" ? "text-cyan-300" : "text-indigo-950"
            }`}
          >
            Never Miss a Promo
          </h2>

          <p className="text-xs text-blue-500 w-[450px] mb-8 leading-relaxed">
            We always give our customers a promo for being loyal to us. Just
            subscribe to us :)
          </p>

          <form className="w-full w-[450px] bg-white rounded-2xl p-2 flex items-center justify-between shadow-md">
            <input
              type="email"
              placeholder="yourname@mail.com"
              required
              className="w-full px-4 text-xs text-gray-700 bg-transparent outline-none placeholder-gray-400"
            />
            <button
              type="submit"
              className="bg-[#1a1f2c] text-white text-xs px-6 py-3 rounded-xl transition hover:bg-slate-800"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
