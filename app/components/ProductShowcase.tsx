"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductShowcase({ hideViewDetails = false }: { hideViewDetails?: boolean }) {
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black pointer-events-none"></div>
        <div className="w-full lg:max-w-[1400px] lg:mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 items-center">
            {/* Left - Product Image Carousel */}
            <div className="relative h-[500px] lg:h-[700px] flex items-center justify-center group">
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-zoom-in overflow-hidden"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
                onClick={openModal}
              >
                <div className="relative w-full h-full p-12 flex items-center justify-center">
                  <Image 
                    src={images[currentIndex]} 
                    alt={`Regen EMS Product ${currentIndex + 1}`}
                    fill
                    className={`object-contain drop-shadow-2xl transition-all duration-500 ${isZoomed ? 'scale-125' : 'scale-100'}`}
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
              <h2 className="text-5xl lg:text-6xl font-bold tracking-tight leading-none" style={{ marginBottom: '1rem' }}>Regen EMS</h2>
              <div className="flex items-center gap-4" style={{ marginBottom: '1rem' }}>
                <div className="flex text-yellow-400 text-2xl gap-1">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <span className="text-base text-gray-400 font-medium tracking-wide">(1,234 reviews)</span>
              </div>
              
              <div className="flex items-baseline gap-6 border-b border-gray-800" style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem' }}>
                <span className="text-5xl font-bold tracking-tight">£149.99</span>
                <span className="text-2xl text-gray-500 line-through font-light">£199.99</span>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <p className="text-xl text-gray-300 font-medium tracking-wide" style={{ marginBottom: '1rem' }}>Regen EMS has been clinically proven to:</p>
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
              
              <div style={{ marginTop: '2rem' }}>
                <button className="w-full btn-secondary" style={{ marginBottom: '1rem' }}>
                  ADD TO CART
                </button>
                <button className="w-full btn-primary">
                  Buy with Klarna
                </button>
              </div>
              
              <p className="text-center text-sm text-gray-500 max-w-lg tracking-[0.15em] animate-pulse uppercase font-medium" style={{ marginTop: '1.5rem' }}>Only 6 items left in stock</p>
              
              <div className="border-t border-gray-800 pt-6" style={{ marginTop: '2rem' }}>
                <button className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                  </svg>
                  <span className="text-lg">Share</span>
                </button>
              </div>

              {!hideViewDetails && (
                <div className="border-t border-gray-800 pt-6" style={{ marginTop: '1.5rem' }}>
                  <Link href="/pages/regen-ems" className="flex items-center justify-between w-full text-white hover:text-gray-300 transition-colors group">
                    <span className="text-lg font-medium tracking-wider uppercase">View Full Details</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Full Screen Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center" onClick={closeModal}>
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-400 transition-colors z-50"
          >
            ×
          </button>
          
          <div 
            className="relative w-full h-full flex items-center justify-center" 
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <Image 
              src={images[currentIndex]} 
              alt={`Regen EMS Product ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
            
            {/* Modal Navigation */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* Modal Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
