import { useContext } from "react";
import { Search } from "lucide-react";
import { ThemeContext } from "../App";

export default function Hero() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className="w-[1220px] mx-auto px-4 py-6 ">
      <div
        className={`relative overflow-hidden rounded-3xl p-8 flex-row py-10 flex flex-col  items-center justify-between gap-8 transition-all duration-300 ${
          theme === "dark"
            ? "bg-[#131722] text-white border border-slate-800"
            : "bg-white text-slate-900 border border-gray-200"
        }`}
      >
        <div className="max-w-[450px]  text-left">
          <h1
            className={`text-5xl font-medium leading-tight uppercase tracking-tight ${
              theme === "dark" ? "text-indigo-500" : "text-indigo-950"
            }`}
          >
            Browse Million Products For Your Needs
          </h1>

          <div className="mt-8 flex items-center max-w-[320px]">
            <div
              className={`flex items-center w-full rounded-xl px-4 py-2.5 border transition-all ${
                theme === "dark"
                  ? "bg-[#0b0e14] border-slate-700 text-white"
                  : "bg-white border-gray-300 text-gray-900 shadow-sm"
              }`}
            >
              <input
                type="text"
                placeholder="I want to buy..."
                className="bg-transparent text-sm w-full focus:outline-none placeholder-gray-400"
              />
              <button className="p-1 text-gray-400 hover:text-indigo-500 transition">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-[50%] flex justify-center">
          <img
            src="https://koolkishan.github.io/react-ecommerce/static/media/home.629de4aa7e8ce767acf4.png"
            alt="Hero img"
            className="max-w-[50%] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
