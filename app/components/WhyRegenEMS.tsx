"use client";
import Image from "next/image";
import { useState } from "react";

const features = [
  {
    title: "Designed by Experts",
    description: "Developed with insights from MSK doctors, sports scientists, and rehabilitation specialists to deliver precise, targeted muscle stimulation.",
    image: "/images/paul-lee-books.webp",
    showButton: true,
    buttonText: "Buy Book Now",
    buttonLink: "https://www.amazon.co.uk/Regeneration-Design-science-superhuman-ageing/dp/1781338574",
    isExternal: true
  },
  {
    title: "Optimised for Recovery & Rehabilitation",
    description: "Activate deep muscle fibres, restore neuromuscular pathways, and rebuild muscle strength and endurance throughout the recovery process.",
    image: "/images/recovery-and-rehabilitation.webp",
    showButton: false
  },
  {
    title: "Dual EMS & TENS Therapy for Faster Post-Surgical Recovery",
    description: "Combining the power of EMS (Electrical Muscle Stimulation) and TENS (Transcutaneous Electrical Nerve Stimulation), this device helps prevent muscle atrophy, relieve pain, and support faster healing after surgery. Ideal for pre-operative conditioning and post-operative rehabilitation, it promotes muscle integrity while enhancing recovery outcomes.",
    image: "/images/ems-and-tens.webp",
    showButton: false
  },
  {
    title: "Personalised & Clinically Monitored",
    description: "Integrates seamlessly with MAI Motion and RegenPhD's cloud platform, enabling healthcare professionals and patients to track progress, monitor recovery, and personalise stimulation programmes based on clinical data.",
    image: "/images/clinically-monitored.webp",
    showButton: false
  }
];

export default function WhyRegenEMS() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="bg-black py-40 lg:py-60 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black pointer-events-none"></div>
      <div className="md:px-16 relative z-10">
        <h2 className="text-white text-center text-6xl font-bold mb-32 tracking-tight">
          WHY <span className="text-[#bd42f4]">REGEN EMS</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left - Text Content */}
          <div className="bg-[rgb(39,44,50)] p-4 md:p-20 flex flex-col justify-start min-h-[700px]">
            <div>
              {features.map((feature, index) => (
                <h3
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`text-3xl font-bold cursor-pointer transition-all duration-300 mb-4 ${
                    activeIndex === index ? 'text-white' : 'text-white opacity-30'
                  }`}
                >
                  {feature.title}
                </h3>
              ))}
            </div>
            
            <div className="mt-2">
              <div className="overflow-hidden transition-all duration-500 ease-in-out">
                <p className="text-white text-xl leading-relaxed mb-6">
                  {features[activeIndex].description}
                </p>
                {features[activeIndex].showButton && (
                  <a 
                    href={features[activeIndex].buttonLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-secondary inline-block mt-8"
                  >
                    {features[activeIndex].buttonText}
                  </a>
                )}
              </div>
            </div>
          </div>
          
          {/* Right - Image */}
          <div className="relative overflow-hidden min-h-[700px] flex items-center justify-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  activeIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image 
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
