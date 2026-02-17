"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    title: "Targeted Recovery Relief",
    description: "TENS (Transcutaneous Electrical Nerve Stimulation) delivers gentle electrical impulses to help manage and reduce post-operative or musculoskeletal pain. Clinically recommended by healthcare professionals for effective pain relief in both acute and chronic conditions.",
    image: "/images/ems-and-tens.webp"
  },
  {
    title: "Recovery & Rehabilitation",
    description: "Professional-Grade Therapy trusted by physiotherapists and sports medicine professionals worldwide for post-surgery recovery and injury rehabilitation.",
    image: "/images/recovery-and-rehabilitation.webp"
  },
  {
    title: "Clinically Monitored",
    description: "Evidence-Based Results backed by clinical studies and real-world testing with professional athletes and medical institutions.",
    image: "/images/clinically-monitored.webp"
  }
];

export default function SmartMuscleCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % slides.length);
  };

  const prev = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  const getPrevIndex = () => (current - 1 + slides.length) % slides.length;

  // Auto-play every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 8000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="bg-black pt-20 overflow-visible w-full">
      <div className="relative flex justify-end overflow-visible">
        {/* Left Preview Image with low opacity */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/4 h-[500px] opacity-20 z-0">
          <Image 
            key={`prev-${current}`}
            src={slides[getPrevIndex()].image} 
            alt="Preview" 
            fill 
            className="object-cover"
            style={{ animation: 'fadeIn 0.6s ease-out' }}
          />
        </div>

        {/* Right Main Image - 75% width */}
        <div className="w-3/4 relative" style={{ height: '700px' }}>
          <Image 
            key={current}
            src={slides[current].image} 
            alt={slides[current].title} 
            fill 
            className="object-cover"
            style={{ animation: 'slideIn 0.6s ease-out' }}
          />
          
          {/* Center Black Box - Positioned absolute on top of image */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 bg-black border border-gray-800 z-10" style={{ width: '500px', minHeight: '400px', padding: '3rem' }}>
            {/* Navigation Arrows on Top */}
            <div className="absolute -top-6 left-12 flex gap-4 bg-white rounded-lg p-2">
              <button 
                onClick={prev} 
                className="w-10 h-10 flex items-center justify-center text-black hover:text-gray-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button 
                onClick={next} 
                className="w-10 h-10 flex items-center justify-center text-black hover:text-gray-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div key={current} className="flex flex-col justify-center h-full pt-8" style={{ animation: 'slideIn 0.6s ease-out' }}>
              <h2 className="text-white text-4xl font-bold mb-6 leading-tight">{slides[current].title}</h2>
              <p className="text-gray-300 text-base leading-relaxed mb-6">{slides[current].description}</p>
              <Link href="/pages/regen-ems" className="btn-primary inline-block w-fit">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 0.2;
          }
        }
      `}</style>
    </section>
  );
}
