import { useContext } from "react";
import { Sun, Moon } from "lucide-react";
import { ThemeContext } from "../App";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      className={`sticky top-0 z-999 border-b transition-colors duration-300 ${
        theme === "dark"
          ? "bg-slate-900/90 border-slate-800 backdrop-blur-2xl text-white"
          : "bg-white/90 border-gray-200 backdrop-blur-2xl text-gray-900"
      }`}
    >
      <div className="w-[1220px] mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-black tracking-wider">
          ehya<span className="text-indigo-500">.</span>
        </h1>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-semibold tracking-wide">
            <li>
              <a
                href="#HOME"
                className="hover:text-indigo-500 transition-colors duration-200"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#LANDING"
                className="hover:text-indigo-500 transition-colors duration-200"
              >
                LANDING
              </a>
            </li>
            <li>
              <a
                href="#PAGES"
                className="hover:text-indigo-500 transition-colors duration-200"
              >
                PAGES
              </a>
            </li>
            <li>
              <a
                href="#DOCS"
                className="hover:text-indigo-500 transition-colors duration-200"
              >
                DOCS
              </a>
            </li>
            <li>
              <a
                href="#HELP"
                className="hover:text-indigo-500 transition-colors duration-200"
              >
                HELP
              </a>
            </li>
          </ul>
        </nav>

        <button
          onClick={toggleTheme}
          className={`p-2 rounded-xl border transition-all ${
            theme === "dark"
              ? "bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700"
              : "bg-gray-100 border-gray-200 text-slate-700 hover:bg-gray-200"
          }`}
        >
          {theme === "dark" ? (
            <Sun className="w-[20px] h-[20px]" />
          ) : (
            <Moon className="w-[20px] h-[20px]" />
          )}
        </button>
      </div>
    </header>
  );
}
