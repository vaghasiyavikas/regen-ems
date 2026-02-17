"use client";
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ImageContentSection from "@/app/components/ImageContentSection";
import { useEffect, useState } from "react";

export default function HowToUsePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full" style={{ paddingTop: '80px' }}>
        {/* Desktop View */}
        <div className="hidden md:block relative h-screen">
          <div className="absolute inset-0">
            <Image 
              src="/images/clinically-monitored.webp" 
              alt="How to Use Regen EMS" 
              fill 
              className="object-cover"
            />
          </div>
          <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <div className="text-center text-white max-w-3xl px-8">
              <p className="text-xl mb-6 text-gray-300 leading-relaxed">
                To help you get started quickly and safely, this guide outlines the essential steps for setup, pairing, application and ongoing care.
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                How to Use Your Regen EMS Device
              </h1>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <div className="relative w-full h-[60vh]">
            <Image 
              src="/images/clinically-monitored.webp" 
              alt="How to Use Regen EMS" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="bg-black text-white px-8 py-12 text-center">
            <p className="text-lg mb-6 text-gray-300 leading-relaxed">
              To help you get started quickly and safely, this guide outlines the essential steps for setup, pairing, application and ongoing care.
            </p>
            <h1 className="text-4xl font-bold tracking-tight">
              How to Use Your Regen EMS Device
            </h1>
          </div>
        </div>
      </section>

      {/* Section 1 - Images Left */}
      <ImageContentSection
        imagePosition="left"
        title="1. Device Preparation & Pad Placement"
        description="1. Ensure the unit is fully charged (see charging section) before first use.\n\n2. Clean and dry the skin area where you'll apply the pads.\n\n3. Peel the adhesive electrode pads from their backing and place them firmly on the target muscle area — ensure full contact and no air pockets.\n\n4. Connect the output cable(s) securely to the device and form the circuit through both pads."
        images={[
          { src: "/images/lady-wear-device.webp", alt: "Device Wearing", width: 280, height: 380, position: "center" },
          { src: "/images/regen-ems-1.webp", alt: "Regen EMS", width: 180, height: 240, position: "top-left" },
          { src: "/images/ems-and-tens.webp", alt: "EMS and TENS", width: 200, height: 200, position: "bottom-right" },
          { src: "/images/ems-explore.webp", alt: "EMS Explore", width: 200, height: 220, position: "top-right" }
        ]}
      />

      {/* Section 2 - Images Right */}
      <ImageContentSection
        imagePosition="right"
        title="2. Turning On & Bluetooth Pairing"
        description="1. Press the power button on the device to switch it on.\n\n2. On your smartphone, open the companion app and enable Bluetooth.\n\n3. In the app, select the device from the list to pair.\n\n4. Once paired, the app will show connection status and allow control of programmes, intensity, and session time."
        images={[
          { src: "/images/excercise.webp", alt: "Exercise", width: 280, height: 380, position: "center" },
          { src: "/images/mobile-app.avif", alt: "Mobile App", width: 180, height: 240, position: "top-right" },
          { src: "/images/ems-explore.webp", alt: "EMS Explore", width: 200, height: 220, position: "bottom-left" },
          { src: "/images/regen-ems-4.webp", alt: "Regen EMS", width: 200, height: 200, position: "top-left" }
        ]}
      />

      {/* Section 3 - Images Left */}
      <ImageContentSection
        imagePosition="left"
        title="3. Programme Selection & Usage"
        description="1. In the app (or directly on the device if supported), choose the desired programme based on your goal: e.g., muscle recovery, strength build, endurance mode.\n\n2. Adjust the intensity slider carefully — start low, gradually increase until you feel firm but comfortable muscle contractions.\n\n3. Select session duration (e.g., 10 min, 20 min) and confirm start.\n\n4. Keep still during the session, avoid touching the electrodes or device, and stop if you experience discomfort.\n\n5. After the session ends, the device will automatically shut off or transition to standby."
        images={[
          { src: "/images/mobile-app-2.avif", alt: "Mobile App", width: 280, height: 380, position: "center" },
          { src: "/images/mobile-app-3.avif", alt: "App Interface", width: 180, height: 240, position: "top-left" },
          { src: "/images/range-ems.webp", alt: "Range EMS", width: 200, height: 200, position: "bottom-right" },
          { src: "/images/ems-colored.webp", alt: "EMS Colored", width: 200, height: 220, position: "top-right" }
        ]}
      />

      {/* Section 4 - Images Right */}
      <ImageContentSection
        imagePosition="right"
        title="4. Post-Use, Maintenance & Safety Notes"
        description="1. Remove the pads from your skin gently and replace the protective film on the adhesive surface to preserve them.\n\n2. Store the device and pads in the pouch provided, in a cool, dry place.\n\n3. The pads will gradually lose adhesion and conductivity—replace them when they no longer stick firmly or muscle contractions feel weak.\n\n4. Do not use the device on broken skin, over the heart, or if you have a pacemaker. Consult a physician if you have any medical condition or are pregnant.\n\n5. Clean the device housing with a soft dry cloth; do not immerse in water, use solvents, or attempt to service internally."
        images={[
          { src: "/images/clinically-monitored.webp", alt: "Clinically Monitored", width: 280, height: 380, position: "center" },
          { src: "/images/ems-top-section-image.webp", alt: "EMS Device", width: 180, height: 240, position: "top-right" },
          { src: "/images/ems-with-man.webp", alt: "EMS Usage", width: 200, height: 220, position: "bottom-left" },
          { src: "/images/recovery-and-rehabilitation.webp", alt: "Recovery", width: 200, height: 200, position: "top-left" }
        ]}
      />

      <Footer />
    </>
  );
}
