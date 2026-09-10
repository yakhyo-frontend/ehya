import { useContext } from "react";
import { ThemeContext } from "../App";
import { Settings, Zap } from "lucide-react";

export default function CompareProduct() {
  const { theme } = useContext(ThemeContext);

  const laptops = [
    {
      id: 1,
      name: "Asus Zenbook Pro",
      model: "UX-430 US",
      processor: "Intel® Core™ i3 7100U Processor",
      os: "Windows 10 Pro for business",
      img: "https://koolkishan.github.io/react-ecommerce/static/media/compare1.972a3e996eff0f50e640.png",
    },
    {
      id: 2,
      name: "Lenevo Legion",
      model: "Y545 2022",
      processor: "Intel® Core™ i7 9100U Processor",
      os: "Windows 10 Pro for Enterprise",
      img: "https://koolkishan.github.io/react-ecommerce/static/media/compare2.906c545a8776c7cdf6b0.png",
    },
    {
      id: 3,
      name: "Acer Swift Air",
      model: "SF-313 51",
      processor: "Intel® Core™ i3 7100X Processor",
      os: "Windows 10 Pro for business",
      img: "https://koolkishan.github.io/react-ecommerce/static/media/compare1.972a3e996eff0f50e640.png",
    },
    {
      id: 4,
      name: "Lenevo Thinkpad Y51",
      model: "X1 2022",
      processor: "Intel® Core™ i5 8000C Processor",
      os: "Windows 10 Pro for business",
      img: "https://koolkishan.github.io/react-ecommerce/static/media/compare2.906c545a8776c7cdf6b0.png",
    },
  ];

  const cardStyle =
    theme === "dark"
      ? "bg-[#131722] text-white border-slate-800"
      : "bg-white text-slate-900 border-gray-200 shadow-sm";

  return (
    <section className="w-[1220px] mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2
          className={`text-2xl ${
            theme === "dark" ? "text-cyan-300" : "text-indigo-950"
          }`}
        >
          Compare the Product
        </h2>
        <button
          className={`text-xs px-5 py-2 rounded-full border transition-colors ${
            theme === "dark"
              ? "border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
              : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          }`}
        >
          New Comparison
        </button>
      </div>

      <div className="flex gap-6">
        {laptops.map((item) => (
          <div
            key={item.id}
            className={`w-[25%] rounded-2xl p-6 border flex flex-col items-center text-center transition-colors duration-300 ${cardStyle}`}
          >
            <div className="h-[160px] flex items-center justify-center mb-4">
              <img
                src={item.img}
                alt={item.name}
                className="h-full w-full object-contain"
              />
            </div>

            <h3
              className={`text-[15px] mb-1 ${
                theme === "dark" ? "text-cyan-300" : "text-indigo-950"
              }`}
            >
              {item.name}
            </h3>
            <p className="text-xs text-blue-500 mb-4">{item.model}</p>

            <hr className="w-full border-gray-700 mb-6 border-1" />

            <div className="mb-6 flex flex-col items-center">
              <div className="w-[24px] h-[24px] mb-2 border border-blue-400 rounded flex items-center justify-center text-[10px] text-blue-400">
                <Zap />
              </div>
              <span className="text-xs text-blue-400 mb-2">Processor</span>
              <p className="text-xs text-blue-500 leading-relaxed px-2">
                {item.processor}
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-6 h-6 mb-2 border border-blue-400 rounded-full flex items-center justify-center text-[10px] text-blue-400">
                <Settings />
              </div>
              <span className="text-xs text-blue-400 mb-2">
                Operating System
              </span>
              <p className="text-xs text-blue-500 leading-relaxed px-2">
                {item.os}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
