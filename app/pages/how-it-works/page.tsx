"use client";
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import FullWidthImageContent from "@/app/components/FullWidthImageContent";
import ProductShowcase from "@/app/components/ProductShowcase";
import { useEffect, useState } from "react";

export default function HowItWorksPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <div className="relative w-full" style={{ paddingTop: '80px' }}>
        {/* Desktop View */}
        <div className="hidden md:block relative h-screen mb-16">
          <Image 
            src="/images/how-it-works-top-ems-image.webp" 
            alt="How It Works" 
            fill 
            className="object-cover"
            priority
          />
          <div className={`absolute inset-0 flex items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`} style={{ background: 'linear-gradient(to right, #00000052 50%, transparent 50%)' }}>
            <div className="w-full md:w-1/2 text-white px-8 md:px-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Faster, Safer Recovery for Every Type of Surgery
              </h1>
              <p className="text-lg md:text-xl leading-relaxed">
                Our clinically designed Regen Recovery Device helps patients rebuild muscle strength, reduce pain, and speed up healing after a wide range of operations. It's safe, simple, and trusted by medical professionals across the UK.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden mb-16">
          <div className="relative w-full h-[60vh]">
            <Image 
              src="/images/how-it-works-top-ems-image.webp" 
              alt="How It Works" 
              fill 
              className="object-cover"
              priority
            />
          </div>
          <div className="bg-black text-white px-8 py-12">
            <h1 className="text-3xl font-bold mb-6">
              Faster, Safer Recovery for Every Type of Surgery
            </h1>
            <p className="text-lg leading-relaxed">
              Our clinically designed Regen Recovery Device helps patients rebuild muscle strength, reduce pain, and speed up healing after a wide range of operations. It's safe, simple, and trusted by medical professionals across the UK.
            </p>
          </div>
        </div>
      </div>

      {/* Section 1 */}
      <FullWidthImageContent
        imagePosition="left"
        title="How It Helps"
        content="<p class='mb-4'>During recovery, muscles can weaken, circulation slows, and pain or stiffness can make movement harder.</p><p class='mb-4'>The Regen device uses gentle electrical muscle stimulation (EMS) and transcutaneous electrical nerve stimulation (TENS) to:</p><ul class='list-disc pl-6 mb-4'><li>Keep muscles active and strong while you heal</li><li>Improve blood flow to speed up recovery</li><li>Reduce pain and swelling naturally</li><li>Help your body regain movement and function faster</li></ul><p>It can be used safely at home as part of your post-operative rehabilitation plan.</p>"
        imageSrc="/images/clinically-monitored.webp"
        imageAlt="Clinically Monitored"
      />

      {/* Section 2 */}
      <FullWidthImageContent
        imagePosition="right"
        title="Knee & Leg Surgery Recovery"
        content="<p class='mb-4'><strong>Ideal for:</strong> knee replacement, ACL repair, meniscus surgery, and leg fracture recovery</p><p class='mb-4'>After knee or leg surgery, muscle inactivity can cause stiffness and atrophy.</p><p class='mb-4'>The Regen device helps to:</p><ul class='list-disc pl-6 mb-4'><li>Keep quadriceps and calf muscles active during early recovery</li><li>Reduce post-surgical swelling and joint stiffness</li><li>Improve blood flow to the knee area</li><li>Support physiotherapy exercises for faster mobility</li></ul><p>Recommended by physiotherapists for maintaining strength and reducing recovery time.</p>"
        imageSrc="/images/knee-ems.webp"
        imageAlt="Knee EMS"
      />

      {/* Section 3 */}
      <FullWidthImageContent
        imagePosition="left"
        title="Hip Surgery & Joint Replacement"
        content="<p class='mb-4'><strong>Ideal for:</strong> total hip replacement, hip resurfacing, or fracture fixation</p><p class='mb-4'>Following hip operations, it's crucial to maintain circulation and prevent muscle weakening.</p><p class='mb-4'>The Regen device helps to:</p><ul class='list-disc pl-6 mb-4'><li>Stimulate muscles around the hip and thigh</li><li>Reduce pain and discomfort during early rehabilitation</li><li>Support muscle re-education for walking and standing</li><li>Improve blood flow and healing</li></ul><p>Helps restore movement and confidence after hip surgery.</p>"
        imageSrc="/images/lady-wear-device.webp"
        imageAlt="Lady Wearing Device"
      />

      {/* Section 4 */}
      <FullWidthImageContent
        imagePosition="right"
        title="Shoulder & Rotator Cuff Repair"
        content="<p class='mb-4'><strong>Ideal for:</strong> shoulder reconstruction, rotator cuff tear, or frozen shoulder recovery</p><p class='mb-4'>Post-operative shoulder recovery can be painful and limit range of motion.</p><p class='mb-4'>Regen supports healing by:</p><ul class='list-disc pl-6 mb-4'><li>Activating deltoid and shoulder stabiliser muscles</li><li>Reducing pain and inflammation around the joint</li><li>Encouraging healthy blood circulation</li><li>Supporting safe movement re-education</li></ul><p>Clinically proven to aid rehabilitation and reduce stiffness.</p>"
        imageSrc="/images/range-ems.webp"
        imageAlt="Range EMS"
      />

      {/* Section 5 */}
      <FullWidthImageContent
        imagePosition="left"
        title="Back & Spinal Surgery"
        content="<p class='mb-4'><strong>Ideal for:</strong> spinal fusion, disc surgery, or decompression procedures</p><p class='mb-4'>After spinal surgery, controlled stimulation can ease pain and help restore muscle function without strain.</p><p class='mb-4'>Regen helps to:</p><ul class='list-disc pl-6 mb-4'><li>Relieve post-surgery muscle spasms</li><li>Improve blood circulation to the lower back</li><li>Activate stabilising muscles gently</li><li>Reduce reliance on medication for pain relief</li></ul><p>Designed for comfort and safety during spinal rehabilitation.</p>"
        imageSrc="/images/recovery-and-rehabilitation.webp"
        imageAlt="Recovery and Rehabilitation"
      />

      {/* Section 6 */}
      <FullWidthImageContent
        imagePosition="right"
        title="Foot & Ankle Surgery"
        content="<p class='mb-4'><strong>Ideal for:</strong> ligament repair, fracture recovery, ankle reconstruction</p><p class='mb-4'>Immobilisation after surgery often weakens muscles and causes poor circulation.</p><p class='mb-4'>Regen helps to:</p><ul class='list-disc pl-6 mb-4'><li>Reactivate calf and foot muscles to prevent atrophy</li><li>Improve blood flow and reduce swelling</li><li>Support joint stability and flexibility</li><li>Accelerate healing without strain</li></ul><p>Enhances post-surgical mobility and comfort.</p>"
        imageSrc="/images/ems-and-tens.webp"
        imageAlt="EMS and TENS"
      />

      {/* Section 7 */}
      <FullWidthImageContent
        imagePosition="left"
        title="Why Choose Regen for Recovery"
        content="<ul class='list-disc pl-6 mb-4'><li>Designed with medical experts (MSKdoctors & RegenPhD)</li><li>Safe for home use under clinical guidance</li><li>Clinically validated EMS and TENS technology</li><li>Portable, wireless, and easy to operate</li><li>Trusted by physiotherapists and surgeons</li></ul><p class='mt-6'>Start your recovery today with a clinically proven solution that helps your body heal faster and stronger.</p>"
        imageSrc="/images/ems-top-section-image.webp"
        imageAlt="EMS Top Section"
      />

      <div style={{ maxWidth: '1600px', margin: '0 auto' }} className="px-4 md:px-16 lg:px-12 pt-32">
        <ProductShowcase />
      </div>

      <Footer />
    </>
  );
}
