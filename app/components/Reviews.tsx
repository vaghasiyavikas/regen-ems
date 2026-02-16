"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const reviews = [
  {
    text: "After three surgeries, Regen EMS helped me rebuild muscle strength and confidence faster than I expected. It's like having a personal physio at home.",
    author: "Daniel Jones",
    role: "Amateur Footballer",
    rating: 5
  },
  {
    text: "The recovery speed I've experienced with Regen EMS is phenomenal. It's an essential part of my daily routine now.",
    author: "Sarah Smith",
    role: "Professional Runner",
    rating: 5
  },
  {
    text: "I was skeptical at first, but the results speak for themselves. My muscle tone has improved significantly in just weeks.",
    author: "Mike Johnson",
    role: "Fitness Enthusiast",
    rating: 5
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextReview = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <section className="bg-black py-40 lg:py-60 border-t border-gray-900 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 text-center relative z-10">
        <h2 className="text-white text-5xl md:text-7xl font-bold mb-24 tracking-tight">
          REVIEWS FROM <span className="text-[#bd42f4] relative inline-block">
            THE EXPERTS
            <span className="absolute -bottom-4 left-0 w-full h-2 bg-[#bd42f4] transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100 origin-left"></span>
          </span>
        </h2>

        <div className="relative min-h-[400px] flex flex-col items-center justify-center">
          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors p-4 hidden md:block"
            aria-label="Previous review"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors p-4 hidden md:block"
            aria-label="Next review"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          <div className={`transition-all duration-500 ease-in-out transform ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="text-yellow-400 text-5xl mb-12 animate-pulse">
              {"★".repeat(reviews[currentIndex].rating)}
            </div>
            <blockquote className="text-white text-3xl md:text-5xl mb-20 leading-relaxed font-serif italic max-w-5xl mx-auto">
              "{reviews[currentIndex].text}"
            </blockquote>
            <div className="flex items-center justify-center gap-8">
              <div className="w-20 h-20 bg-gray-800 rounded-full overflow-hidden border-2 border-[#bd42f4]">
                {/* Placeholder for user avatar */}
                <div className="w-full h-full bg-gradient-to-br from-purple-500 to-blue-500"></div>
              </div>
              <div className="text-left">
                <p className="text-white text-lg font-bold tracking-wide uppercase">{reviews[currentIndex].author}</p>
                <p className="text-gray-500 text-sm font-medium tracking-wider uppercase">{reviews[currentIndex].role}</p>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex gap-3 mt-16">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setCurrentIndex(idx);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "bg-[#bd42f4] w-8" : "bg-gray-700 hover:bg-gray-500"
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
