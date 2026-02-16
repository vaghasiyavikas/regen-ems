"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    title: "Smart Muscle Activation",
    subtitle: "Clinically-Backed EMS Technology",
    description: "Developed with insights from elite athletes and medical professionals, our advanced EMS technology delivers precise muscle stimulation to accelerate recovery, improve strength, and enhance performance.",
    image: "/images/ems-and-tens.webp",
    badge: "CLINICALLY PROVEN"
  },
  {
    title: "Recovery & Rehabilitation",
    subtitle: "Professional-Grade Therapy",
    description: "Trusted by physiotherapists and sports medicine professionals worldwide for post-surgery recovery and injury rehabilitation.",
    image: "/images/recovery-and-rehabilitation.webp",
    badge: "MEDICAL GRADE"
  },
  {
    title: "Clinically Monitored",
    subtitle: "Evidence-Based Results",
    description: "Backed by clinical studies and real-world testing with professional athletes and medical institutions.",
    image: "/images/clinically-monitored.webp",
    badge: "TESTED & PROVEN"
  }
];

export default function SmartMuscleCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((current + 1) % slides.length);
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 600);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section className="bg-black py-0 overflow-hidden w-full">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden">
          {/* Left - Text Content */}
          <div className="bg-black text-white p-20 lg:p-40 flex flex-col justify-center min-h-[800px] lg:min-h-[900px] relative z-10">
            <div className={`transition-all duration-700 ease-in-out transform ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'} max-w-2xl mx-auto lg:mx-0`}>
              <div className="inline-block bg-[#bd42f4] px-6 py-2.5 text-xs font-bold tracking-[0.25em] mb-12 rounded-sm uppercase">
                {slides[current].badge}
              </div>
              <h2 className="text-5xl lg:text-7xl font-bold mb-10 leading-[1.1] tracking-tight">{slides[current].title}</h2>
              <p className="text-gray-400 text-2xl mb-12 font-light tracking-wide">{slides[current].subtitle}</p>
              <p className="text-gray-300 text-xl leading-relaxed max-w-2xl font-light">{slides[current].description}</p>
            </div>
            <div className="mt-24 flex items-center gap-12 max-w-2xl mx-auto lg:mx-0">
              <button className="btn-primary">
                VIEW NOW
              </button>
              <div className="flex gap-8">
                <button 
                  onClick={prev} 
                  className="w-16 h-16 border border-white/30 text-white flex items-center justify-center text-2xl hover:bg-white hover:text-black transition-colors duration-300 rounded-full hover:border-white"
                >
                  ←
                </button>
                <button 
                  onClick={next} 
                  className="w-16 h-16 border border-white/30 text-white flex items-center justify-center text-2xl hover:bg-white hover:text-black transition-colors duration-300 rounded-full hover:border-white"
                >
                  →
                </button>
              </div>
            </div>
          </div>
          
          {/* Right - Image */}
          <div className="relative min-h-[700px] lg:min-h-[900px] bg-gray-100 overflow-hidden group">
            <div className="absolute inset-0 bg-black/5 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
            <Image 
              key={current}
              src={slides[current].image} 
              alt={slides[current].title} 
              fill 
              className={`object-cover transition-all duration-1000 ease-in-out transform scale-105 group-hover:scale-100 ${isAnimating ? 'opacity-0 scale-110' : 'opacity-100'}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
