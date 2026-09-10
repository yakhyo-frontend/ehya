import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Recommended() {
  const { theme } = useContext(ThemeContext);

  const products = [
    {
      id: 1,
      title: "The best Anti Aging Cream with cheap price",
      img: "https://koolkishan.github.io/react-ecommerce/static/media/recommend1.5bd81bcf812955b151da.jpg",
    },
    {
      id: 2,
      title: "Best budget Headphone for RPG Gamers",
      img: "https://koolkishan.github.io/react-ecommerce/static/media/recommend2.57503139a740387ee10a.jpg",
    },
    {
      id: 3,
      title: "Have a much project? You must have this Savage Laptop",
      img: "https://koolkishan.github.io/react-ecommerce/static/media/recommend3.98616ba71d6aa6d52e43.jpeg",
    },
    {
      id: 4,
      title: "Bored work from home. You can make juice for your health",
      img: "https://koolkishan.github.io/react-ecommerce/static/media/recommend4.f83f5f8e43ff53c8e31c.jpg",
    },
  ];

  return (
    <section className="w-[1220px] mx-auto px-4 py-8 text-center">
      <h2
        className={`text-2xl mb-8 ${
          theme === "dark" ? "text-cyan-300" : "text-indigo-950"
        }`}
      >
        Recommended for You
      </h2>

      <div className="flex gap-6 justify-center">
        {products.map((item) => (
          <div
            key={item.id}
            className="w-[25%] flex flex-col items-center justify-start text-center"
          >
            <div className="w-full h-[250px] mb-4 rounded-xl overflow-hidden flex items-center justify-center bg-gray-100">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-blue-500 w-[220px]">{item.title}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <button
          className={`text-xs px-6 py-2 rounded-full border transition-colors ${
            theme === "dark"
              ? "border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
              : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          }`}
        >
          Show All
        </button>
      </div>
    </section>
  );
}
