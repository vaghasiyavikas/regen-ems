"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

interface ImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
}

interface ImageContentSectionProps {
  images: ImageData[];
  title: string;
  description: string;
  imagePosition: "left" | "right";
}

export default function ImageContentSection({ images, title, description, imagePosition }: ImageContentSectionProps) {
  const [visibleImages, setVisibleImages] = useState<boolean[]>(new Array(images.length).fill(false));
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;
    
    const timers = images.map((_, index) => 
      setTimeout(() => {
        setVisibleImages(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, 300 * (index + 1))
    );
    return () => timers.forEach(clearTimeout);
  }, [isInView, images.length]);

  const getPositionClasses = (position: string, index: number) => {
    const positions = {
      "top-left": "absolute top-0 left-8",
      "top-right": "absolute top-10 right-0",
      "bottom-left": "absolute bottom-0 left-8",
      "bottom-right": "absolute bottom-0 right-8",
      "center": "relative"
    };
    return positions[position as keyof typeof positions] || "";
  };

  const ImagesSection = (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[3rem] blur-3xl opacity-10 hover:opacity-30 transition-opacity duration-700"></div>
      {images.map((img, index) => (
        <div
          key={index}
          className={`${getPositionClasses(img.position, index)} rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-900 transition-all duration-700 ${
            visibleImages[index] ? 'opacity-100 translate-y-0 translate-x-0' : 'opacity-0 -translate-y-10'
          } ${img.position === "center" ? "z-20" : `z-${10 + index}`}`}
        >
          <Image src={img.src} alt={img.alt} width={img.width} height={img.height} className="hover:scale-110 transition-transform duration-500" />
        </div>
      ))}
    </div>
  );

  const ContentSection = (
    <div className={`text-white max-w-xl space-y-6 transition-all duration-1000 ${
      isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
    }`}>
      <h3 className="text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">{title}</h3>
      <div className="text-gray-400 text-lg leading-relaxed font-light tracking-wide whitespace-pre-line">{description}</div>
    </div>
  );

  return (
    <section ref={sectionRef} className="bg-black py-20">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {imagePosition === "left" ? (
            <>
              {ImagesSection}
              {ContentSection}
            </>
          ) : (
            <>
              {ContentSection}
              {ImagesSection}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
