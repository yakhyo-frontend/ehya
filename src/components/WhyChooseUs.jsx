import { useContext } from "react";
import { ThemeContext } from "../App";

export default function WhyChooseUs() {
  const { theme } = useContext(ThemeContext);

  const features = [
    {
      id: 1,
      title: "Have Most Stock",
      desc: "We have many stock until next year to supply you needs.",
    },
    {
      id: 2,
      title: "100% Secure",
      desc: "You don't need to worry when transaction is on our platform now.",
    },
    {
      id: 3,
      title: "24/7 Support",
      desc: "If any problem use our platform you cantact use free.",
    },
    {
      id: 4,
      title: "Free Delivery",
      desc: "Wherever you are, we make sure you get free delivery service.",
    },
  ];

  const cardStyle =
    theme === "dark"
      ? "bg-[#131722] text-white border-slate-800"
      : "bg-white text-slate-900 border-gray-200 shadow-sm";

  return (
    <section className="w-[1220px] mx-auto px-4 py-12 text-center">
      <h2
        className={`text-2xl mb-2 ${
          theme === "dark" ? "text-cyan-300" : "text-indigo-950"
        }`}
      >
        Why Choose us than others?
      </h2>
      <p className="text-xs text-blue-500 w-[570px] mx-auto mb-10">
        Many reasons why customer choose us than other ecommerce. We have some
        plus point that maybe other can't have.
      </p>

      <div className="flex items-center gap-8">
        <div className="w-[40%] flex justify-center">
          <img
            src="https://koolkishan.github.io/react-ecommerce/static/media/choose.c107f6a3f0a3a62d88c4.png"
            alt="Why Choose Us"
            className="w-[380px] object-contain"
          />
        </div>

        <div className="w-[60%] flex flex-row gap-6">
          {features.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl p-6 border flex flex-col items-center justify-center text-center transition-all duration-300 ${cardStyle}`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-[50px] h-[50px] mb-3 object-contain"
              />
              <h3
                className={`text-[15px] mb-2 ${
                  theme === "dark" ? "text-cyan-300" : "text-indigo-950"
                }`}
              >
                {item.title}
              </h3>
              <p className="text-xs text-blue-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
