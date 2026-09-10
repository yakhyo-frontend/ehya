import React, { useContext } from "react";
import { ThemeContext } from "../App";

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  const footerSections = [
    {
      id: 1,
      title: "Product",
      links: [
        "Landing Page",
        "Features",
        "Documentation",
        "Referral Program",
        "Pricing",
      ],
    },
    {
      id: 2,
      title: "Services",
      links: ["Documentation", "Design", "Themes", "Illustrations", "UI Kit"],
    },
    {
      id: 3,
      title: "Company",
      links: ["About", "Terms", "Privacy Policy", "Careers"],
    },
    {
      id: 4,
      title: "More",
      links: ["Documentation", "License", "Changelog"],
    },
  ];

  const socialIcons = [
    { id: 1, icon: "f", label: "Facebook" },
    { id: 2, icon: "i", label: "Instagram" },
    { id: 3, icon: "t", label: "Twitter" },
    { id: 4, icon: "in", label: "LinkedIn" },
  ];

  return (
    <footer className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex justify-between gap-8">
        <div className="w-[30%] text-left">
          <div className="flex items-center gap-1 mb-4">
            <h2
              className={`text-3xl font-extrabold ${
                theme === "dark" ? "text-cyan-300" : "text-indigo-950"
              }`}
            >
              ehya
            </h2>
            <span className="w-[8px] h-[8px] bg-blue-500 rounded-full inline-block mt-2"></span>
          </div>

          <p className="text-xs text-blue-500 mb-6 w-[320px]">
            Build a modern and creative website with crealand
          </p>

          <div className="flex gap-3">
            {socialIcons.map((item) => (
              <a
                key={item.id}
                href="#"
                className={`w-9 h-9 rounded-full border flex items-center justify-center text-xs transition-colors ${
                  theme === "dark"
                    ? "border-gray-800 bg-[#131722] text-white hover:bg-blue-600"
                    : "border-gray-200 bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white"
                }`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="w-[65%] flex justify-between">
          {footerSections.map((sec) => (
            <div key={sec.id} className="text-left">
              <h3
                className={`text-sm mb-4 ${
                  theme === "dark" ? "text-cyan-300" : "text-indigo-950"
                }`}
              >
                {sec.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {sec.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-xs text-blue-500 hover:underline transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
