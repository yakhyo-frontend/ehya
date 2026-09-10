import { useState, createContext } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import PromoBanners from "./components/PromoBanners";
import WhyChooseUs from "./components/WhyChooseUs";
import CompareProduct from "./components/CompareProduct";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import Recommended from "./components/Recommended";

export const ThemeContext = createContext();

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`min-h-screen font-sans transition-colors duration-300 ${
          theme === "dark"
            ? "bg-slate-900 text-white"
            : "bg-gray-50 text-gray-900"
        }`}
      >
        <Navbar />
        <Hero />
        <PromoBanners />
        <Categories />
        <Recommended />
        <WhyChooseUs />
        <CompareProduct />
        <Subscribe />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
