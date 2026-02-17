"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full bg-black" style={{ paddingTop: '80px', marginBottom: '4rem' }}>
      {/* Desktop View */}
      <div className="hidden md:block relative w-full h-screen min-h-[800px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-black">
          <div className="relative h-full bg-black flex items-center justify-center" style={{ width: 'calc(100% + 10px)', marginLeft: '-20px' }}>
            <Image
              src="/images/ems-top-section-image.webp"
              alt="EMS Device"
              fill
              className="object-cover drop-shadow-2xl animate-slide-horizontal"
              priority
            />
          </div>
        </div>
        
        <div className={`absolute right-0 w-full md:w-1/2 h-full flex items-center overflow-hidden transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
        }`} style={{ backgroundColor: 'rgba(168, 85, 247, 0.95)', paddingLeft: '4rem' }}>
          <div className="absolute top-[-20%] right-[-20%] w-[600px] h-[600px] rounded-full bg-white/10 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-[-20%] left-[-20%] w-[500px] h-[500px] rounded-full bg-purple-900/20 blur-3xl animate-pulse-slow delay-1000"></div>
          
          <div className="relative z-10 w-full px-12 md:px-16 text-white">
            <div className="max-w-xl text-left">
              <h1 className="font-normal leading-[1.3] text-3xl md:text-4xl lg:text-5xl tracking-tight" style={{ marginBottom: '3rem' }}>
                Recover Faster After Surgery — Safe, Simple & Clinically Proven
              </h1>
              <Link href="/pages/regen-ems" className="group flex items-center gap-3 text-white border-b-2 border-white pb-2 text-lg font-medium transition-all duration-300 hover:text-gray-200 hover:border-gray-200 cursor-pointer">
                Shop Now
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <div className="relative w-full h-[60vh]">
          <Image
            src="/images/ems-top-section-image.webp"
            alt="EMS Device"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="bg-black text-white px-8 py-12">
          <h1 className="text-3xl font-bold leading-tight mb-6">
            Recover Faster After Surgery — Safe, Simple & Clinically Proven
          </h1>
          <Link href="/pages/regen-ems" className="group flex items-center gap-3 text-white border-b-2 border-white pb-2 text-lg font-medium transition-all duration-300">
            Shop Now
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
