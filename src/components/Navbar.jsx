import { useContext } from "react";
import { Sun, Moon } from "lucide-react";
import { ThemeContext } from "../App";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      className={`sticky top-0 z-999 border-b transition-colors duration-300 ${
        theme === "dark"
          ? "bg-slate-900 border-slate-800 backdrop-blur-2xl text-slate-200"
          : "bg-white border-gray-200 backdrop-blur-2xl text-slate-900"
      }`}
    >
      <div className="w-[1220px] mx-auto px-4 h-16 flex items-center justify-between">
        <h1
          className={`text-2xl font-black tracking-wider ${theme === "dark" ? "text-slate-200" : "text-slate-700"}`}
        >
          ehya
          <span className="text-indigo-500">.</span>
        </h1>

        <nav>
          <ul className="flex items-center gap-8 text-sm font-semibold tracking-wide">
            <li>
              <a
                href="#HOME"
                className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-500 after:transition-all hover:after:w-full"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#LANDING"
                className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-500 after:transition-all hover:after:w-full"
              >
                LANDING
              </a>
            </li>
            <li>
              <a
                href="#PAGES"
                className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-500 after:transition-all hover:after:w-full"
              >
                PAGES
              </a>
            </li>
            <li>
              <a
                href="#DOCS"
                className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-500 after:transition-all hover:after:w-full"
              >
                DOCS
              </a>
            </li>
            <li>
              <a
                href="#HELP"
                className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-500 after:transition-all hover:after:w-full"
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
              : "bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-300"
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
