"use client";
import { useState } from "react";

export default function TechSpecs() {
  const specs = [
    { title: "INCLUDES IN THE BOX", content: "Regen EMS Device, Charging Cable, User Manual, Carrying Case" },
    { title: "STIMULATION TECHNOLOGY", content: "Advanced EMS & TENS, 12 Modes, 20 Intensity Levels" },
    { title: "BATTERY & CHARGING", content: "Lithium-ion Battery, USB-C Fast Charging, Up to 10 Hours Use" },
    { title: "APP INTEGRATION", content: "Bluetooth Connectivity, iOS & Android App, Progress Tracking" },
    { title: "DESIGN & BUILD", content: "Ergonomic Design, Soft-Touch Finish, Lightweight & Portable" }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSpec = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-40 lg:py-60 border-t border-gray-900">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <h2 className="text-white text-5xl md:text-6xl font-bold mb-12 tracking-tight">TECH SPECS</h2>
        <p className="text-gray-400 text-2xl mb-24 max-w-4xl leading-relaxed font-light">
          Regen EMS combines cutting-edge muscle stimulation technology with sleek design that moves with you.
        </p>
        <div className="space-y-0 border-t border-gray-800">
          {specs.map((spec, i) => (
            <div key={i} className="border-b border-gray-800 group">
              <button 
                onClick={() => toggleSpec(i)}
                className="w-full flex items-center justify-between text-white py-12 hover:text-[#bd42f4] transition-colors duration-300 text-2xl font-semibold tracking-wide"
              >
                <span className="group-hover:translate-x-6 transition-transform duration-500 ease-out">{spec.title}</span>
                <span className={`text-4xl font-light transition-transform duration-500 ${openIndex === i ? 'rotate-45 text-[#bd42f4]' : 'group-hover:rotate-90'}`}>+</span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-60 opacity-100 pb-12' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-400 text-xl pl-6 border-l-4 border-[#bd42f4] ml-4">{spec.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
