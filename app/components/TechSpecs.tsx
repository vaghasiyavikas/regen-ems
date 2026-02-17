"use client";
import { useState } from "react";

export default function TechSpecs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const specs = [
    {
      title: "INCLUDED IN THE BOX",
      items: [
        "Regen EMS main device (ZX-571C-26J3)",
        "Two output electrode cables",
        "Set of reusable adhesive electrode pads",
        "USB charging cable (Type-C)",
        "Storage pouch",
        "User manual"
      ]
    },
    {
      title: "STIMULATION TECHNOLOGY",
      items: [
        "Advanced EMS & TENS dual technology",
        "12 pre-programmed modes",
        "20 adjustable intensity levels",
        "Frequency range: 1-150 Hz",
        "Pulse width: 50-400 μs"
      ]
    },
    {
      title: "BATTERY & CHARGING",
      items: [
        "Lithium-ion rechargeable battery",
        "USB-C fast charging port",
        "Up to 10 hours continuous use",
        "Full charge time: 2 hours",
        "Battery indicator LED"
      ]
    },
    {
      title: "APP INTEGRATION",
      items: [
        "Bluetooth 5.0 connectivity",
        "iOS & Android compatible app",
        "Real-time progress tracking",
        "Customizable workout programs",
        "Session history and analytics"
      ]
    },
    {
      title: "DESIGN & BUILD",
      items: [
        "Ergonomic lightweight design",
        "Premium soft-touch finish",
        "Water-resistant construction (IPX4)",
        "Dimensions: 95 x 60 x 25mm",
        "Weight: 120g"
      ]
    }
  ];

  const toggleSpec = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight uppercase">TECH SPECS</h2>
        <p className="text-white py-5 text-lg md:text-xl mb-12 max-w-4xl leading-relaxed">
          Rebuild, recover, and perform better with smart muscle stimulation that moves with you.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {specs.map((spec, index) => (
            <div key={index} style={{ paddingTop: '1rem' }}>
              <button 
                onClick={() => toggleSpec(index)}
                className="w-full flex items-center justify-between text-white hover:text-gray-300 transition-colors duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <span className="text-black text-xl font-light">{openIndex === index ? '−' : '+'}</span>
                  </div>
                  <span className="text-base md:text-lg font-normal tracking-wide uppercase text-left">{spec.title}</span>
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[600px] opacity-100 pt-3' : 'max-h-0 opacity-0'}`}
              >
                <div className="pb-8 pl-4 md:pl-8">
                  {spec.items.map((item, i) => (
                    <p key={i} className="text-white text-base md:text-lg leading-relaxed" style={{ marginBottom: i < spec.items.length - 1 ? '0.75rem' : '0' }}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
