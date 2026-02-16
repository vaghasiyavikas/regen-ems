"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProductShowcase() {
  const images = [
    "/images/regen-ems-product.webp",
    "/images/regen-ems-products-2.webp",
    "/images/regen-ems-products-3.webp",
    "/images/regen-ems-1.webp",
    "/images/regen-ems-2.webp",
    "/images/regen-ems-3.webp",
    "/images/regen-ems-4.webp"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="bg-black py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black pointer-events-none"></div>
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Product Image Carousel */}
          <div className="relative h-[500px] lg:h-[700px] flex items-center justify-center group">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full p-12 flex items-center justify-center">
                   <Image 
                    src={images[currentIndex]} 
                    alt={`Regen EMS Product ${currentIndex + 1}`}
                    fill
                    className="object-contain drop-shadow-2xl transition-all duration-500"
                  />
                </div>
            </div>
            
            {/* Carousel Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-20 border border-white/10 hover:border-[#bd42f4]"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-20 border border-white/10 hover:border-[#bd42f4]"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? "bg-[#bd42f4] w-6" : "bg-white/50 hover:bg-white"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Right - Product Details */}
          <div className="text-white space-y-8 pl-0 lg:pl-8">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-none">Regen EMS</h2>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex text-yellow-400 text-2xl gap-1">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <span className="text-base text-gray-400 font-medium tracking-wide">(1,234 reviews)</span>
            </div>
            
            <div className="mb-10 flex items-baseline gap-6 border-b border-gray-800 pb-10">
              <span className="text-5xl font-bold tracking-tight">£149.99</span>
              <span className="text-2xl text-gray-500 line-through font-light">£199.99</span>
            </div>
            
            <div className="mb-12 space-y-8">
              <p className="text-xl text-gray-300 font-medium tracking-wide">Regen EMS has been clinically proven to:</p>
              <ul className="space-y-4 text-lg text-gray-300 font-light">
                <li className="flex items-center gap-4 group">
                  <span className="text-[#bd42f4] text-2xl group-hover:scale-125 transition-transform duration-300">✓</span>
                  <span className="group-hover:text-white transition-colors">FDA & Clinically Approved</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <span className="text-[#bd42f4] text-2xl group-hover:scale-125 transition-transform duration-300">✓</span>
                  <span className="group-hover:text-white transition-colors">Proven to Accelerate Recovery</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <span className="text-[#bd42f4] text-2xl group-hover:scale-125 transition-transform duration-300">✓</span>
                  <span className="group-hover:text-white transition-colors">Based on recovery</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <span className="text-[#bd42f4] text-2xl group-hover:scale-125 transition-transform duration-300">✓</span>
                  <span className="group-hover:text-white transition-colors">Free Delivery</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <span className="text-[#bd42f4] text-2xl group-hover:scale-125 transition-transform duration-300">✓</span>
                  <span className="group-hover:text-white transition-colors">Get a Clinical App</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <span className="text-[#bd42f4] text-2xl group-hover:scale-125 transition-transform duration-300">✓</span>
                  <span className="group-hover:text-white transition-colors">2 years warranty</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4 max-w-lg pt-6">
              <button className="w-full btn-secondary">
                ADD TO CART
              </button>
              <button className="w-full btn-primary">
                Buy with Klarna
              </button>
            </div>
            
            <p className="text-center text-sm text-gray-500 mt-8 max-w-lg tracking-[0.15em] animate-pulse uppercase font-medium">Only 6 items left in stock</p>
            <div className="mt-8 flex justify-center max-w-lg">
              <button className="text-[#bd42f4] text-base flex items-center gap-3 hover:underline font-medium tracking-wide group uppercase">
                <span>Share</span> <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-xl">↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
