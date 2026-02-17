"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FeaturedIn() {
  const [visibleImages, setVisibleImages] = useState([false, false, false]);

  useEffect(() => {
    const timers = [
      setTimeout(() => setVisibleImages(prev => [true, prev[1], prev[2]]), 300),
      setTimeout(() => setVisibleImages(prev => [prev[0], true, prev[2]]), 600),
      setTimeout(() => setVisibleImages(prev => [prev[0], prev[1], true]), 900)
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="bg-black" >
      <div className="px-8 md:px-16">
        <h3 className="text-white text-center text-xl font-bold tracking-[0.3em] uppercase" style={{ marginBottom: '3rem' }}>Featured In</h3>
        
        {/* Brand Logos */}
        <div className="flex flex-wrap items-center justify-center mb-40">
          <div className="relative w-40 h-16">
            <Image src="/images/forbes.webp" alt="Forbes" fill className="object-contain" />
          </div>
          <div className="relative w-36 h-16">
            <Image src="/images/nike.webp" alt="Nike" fill className="object-contain" />
          </div>
          <div className="relative w-48 h-16">
            <Image src="/images/telegraph.webp" alt="The Telegraph" fill className="object-contain" />
          </div>
          <div className="relative w-40 h-16">
            <Image src="/images/skysports.avif" alt="Sky Sports" fill className="object-contain" />
          </div>
        </div>
        
        {/* Professor Paul Lee Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          {/* Left - Images */}
          <div className="relative w-full h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[3rem] blur-3xl opacity-10 hover:opacity-30 transition-opacity duration-700"></div>

            {/* Center Image - paul-lee-products.webp */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl z-20 border border-gray-800 bg-gray-900">
              <Image src="/images/paul-lee-products.webp" alt="Professor Paul Lee" width={280} height={380} className="opacity-90 hover:opacity-100 transition-opacity" />
            </div>

            {/* Surrounding Images with Staggered Animation */}
            {/* Top Left - brand-02.avif */}
            <div className={`absolute top-0 left-8 rounded-2xl overflow-hidden shadow-2xl z-10 border border-gray-800 bg-gray-900 transition-all duration-700 ${visibleImages[0] ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              <Image src="/images/brand-02.avif" alt="Brand" width={180} height={240} className="hover:scale-110 transition-transform duration-500" />
            </div>

            {/* Bottom Right - london_01.avif */}
            <div className={`absolute bottom-0 right-8 rounded-2xl overflow-hidden shadow-2xl z-30 border border-gray-800 bg-gray-900 transition-all duration-700 ${visibleImages[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Image src="/images/london_01.avif" alt="London" width={200} height={200} className="hover:scale-110 transition-transform duration-500" />
            </div>

            {/* Top Right - regen-03.avif */}
            <div className={`absolute top-10 right-0 rounded-2xl overflow-hidden shadow-2xl z-15 border border-gray-800 bg-gray-900 transition-all duration-700 ${visibleImages[2] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <Image src="/images/regen-03.avif" alt="Regen" width={160} height={220} className="hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
          
          {/* Right - Text */}
          <div className="text-white max-w-xl space-y-10 lg:pl-10">
            <h3 className="text-5xl lg:text-6xl font-bold mb-8 leading-[1.1] tracking-tight">
              Developed by Professor Paul Lee — Surgeon. Scientist. Engineer.
            </h3>
            <p className="text-gray-400 text-xl leading-relaxed font-light tracking-wide">
              Regen EMS was born from the pioneering work of Professor Paul Lee, a renowned surgeon and scientist. With decades of experience in sports medicine and rehabilitation, Professor Lee has dedicated his career to developing evidence-based recovery solutions that bridge the gap between clinical research and real-world application.
            </p>
            <a href="https://www.amazon.co.uk/Regeneration-Design-science-superhuman-ageing/dp/1781338574" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-block">
              BUY BOOK NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
