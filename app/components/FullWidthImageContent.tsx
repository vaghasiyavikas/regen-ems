"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface FullWidthImageContentProps {
  imagePosition: "left" | "right";
  title: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
}

export default function FullWidthImageContent({
  imagePosition,
  title,
  content,
  imageSrc,
  imageAlt,
}: FullWidthImageContentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`flex flex-col ${
        imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } min-h-screen`}
    >
      {/* Image Section */}
      <div className={`w-full md:w-1/2 relative h-[50vh] md:h-auto transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${imagePosition === "left" ? "-translate-x-20" : "translate-x-20"}`
      }`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>

      {/* Content Section */}
      <div className={`w-full md:w-1/2 bg-black text-white flex items-center justify-center p-8 md:p-16 transition-all duration-1000 delay-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}>
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <div
            className="text-lg leading-relaxed mb-8"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <Link href="/pages/regen-ems" className="text-white px-8 py-3 font-semibold hover:opacity-90 transition inline-block" style={{ backgroundColor: 'rgb(189, 66, 244)' }}>
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}
