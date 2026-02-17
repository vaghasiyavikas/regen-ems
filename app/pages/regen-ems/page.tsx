"use client";
import { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ProductShowcase from "@/app/components/ProductShowcase";

export default function RegenEMSPage() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <Header />
      <div style={{ paddingTop: '80px' }}>
        <ProductShowcase hideViewDetails={true} />
        
        {/* Tech Specs Section */}
        <section className="bg-black text-white py-16">
          <div className="max-w-[1400px] mx-auto px-8 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3">
                <h2 className="text-5xl font-bold">Tech Specs</h2>
              </div>
              
              <div className="lg:col-span-9 space-y-0">
                {/* What It Does */}
                <div className="border-b border-gray-800">
                  <button
                    onClick={() => toggleSection("what-it-does")}
                    className="w-full py-6 flex items-center justify-between text-left hover:text-gray-300 transition-colors"
                  >
                    <h3 className="text-3xl font-normal text-gray-400">What It Does</h3>
                    <span className="text-3xl font-light">{openSection === "what-it-does" ? "−" : "+"}</span>
                  </button>
                  {openSection === "what-it-does" && (
                    <div className="pb-6 text-xl text-gray-300 leading-relaxed">
                      <p>Regen EMS activates deep muscle fibres through intelligent electrical impulses that mirror the body's natural signals. Whether you're recovering from injury, training at peak level, or preventing muscle atrophy, Regen EMS helps you move, heal, and perform better.</p>
                    </div>
                  )}
                </div>

                {/* Key Benefits */}
                <div className="border-b border-gray-800">
                  <button
                    onClick={() => toggleSection("key-benefits")}
                    className="w-full py-6 flex items-center justify-between text-left hover:text-gray-300 transition-colors"
                  >
                    <h3 className="text-3xl font-normal text-gray-400">Key Benefits</h3>
                    <span className="text-3xl font-light">{openSection === "key-benefits" ? "−" : "+"}</span>
                  </button>
                  {openSection === "key-benefits" && (
                    <div className="pb-6 text-xl text-gray-300 leading-relaxed space-y-4">
                      <ul className="space-y-4">
                        <li><strong>Enhance Recovery &amp; Prevent Muscle Loss</strong> – Accelerates post-surgery or post-training recovery while maintaining muscle strength and tone.</li>
                        <li><strong>Optimise Performance</strong> – Improves endurance, neuromuscular connection, and strength for athletes and fitness enthusiasts.</li>
                        <li><strong>Smart &amp; Data-Driven</strong> – Syncs with the Regen PhD platform and MAI Motion for real-time tracking, custom programmes, and intelligent progress monitoring.</li>
                        <li><strong>Expert-Led Design</strong> – Developed with medical and sports science professionals for safe, effective, and targeted stimulation.</li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Who It's For */}
                <div className="border-b border-gray-800">
                  <button
                    onClick={() => toggleSection("who-its-for")}
                    className="w-full py-6 flex items-center justify-between text-left hover:text-gray-300 transition-colors"
                  >
                    <h3 className="text-3xl font-normal text-gray-400">Who It's For</h3>
                    <span className="text-3xl font-light">{openSection === "who-its-for" ? "−" : "+"}</span>
                  </button>
                  {openSection === "who-its-for" && (
                    <div className="pb-6 text-xl text-gray-300 leading-relaxed">
                      <p className="mb-4">Regen EMS is suitable for:</p>
                      <ul className="space-y-2 list-disc list-inside">
                        <li>Individuals recovering from injury or surgery</li>
                        <li>Athletes and active individuals seeking faster recovery and improved performance</li>
                        <li>Older adults aiming to maintain muscle tone and prevent atrophy</li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Why Choose Regen EMS */}
                <div className="border-b border-gray-800">
                  <button
                    onClick={() => toggleSection("why-choose")}
                    className="w-full py-6 flex items-center justify-between text-left hover:text-gray-300 transition-colors"
                  >
                    <h3 className="text-3xl font-normal text-gray-400">Why Choose Regen EMS</h3>
                    <span className="text-3xl font-light">{openSection === "why-choose" ? "−" : "+"}</span>
                  </button>
                  {openSection === "why-choose" && (
                    <div className="pb-6 text-xl text-gray-300 leading-relaxed">
                      <ul className="space-y-2 list-disc list-inside">
                        <li>Advanced app-based operation</li>
                        <li>Compact, lightweight, and easy to use anywhere</li>
                        <li>Trusted by health professionals and used in clinical settings</li>
                        <li>Supported by science — powered by Regen PhD's smart data platform</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <div className="bg-black text-white">
          <div className="max-w-[1400px] mx-auto px-8 md:px-16">
            <div className=" space-y-8">
              <h2 className="text-4xl font-bold mb-6">Designed by Experts. Built for Every Body.</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Regen EMS is a next-generation electro muscle stimulation (EMS) device developed in collaboration with leading musculoskeletal (MSK) specialists, doctors, and sports scientists. Engineered for performance, recovery, and rehabilitation, it delivers precise, data-driven muscle stimulation you can trust.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Your device comes with a starter set of electrode pads for immediate use; however, these will require periodic replacement to maintain optimal performance. Additional compatible pads are available here.
              </p>
              <h3 className="text-3xl font-bold mt-12 mb-4">Experience the Next Generation of Muscle Health</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Regen EMS isn't just another muscle stimulator — it's your personal recovery partner. Designed by experts and driven by innovation, it's time to take control of your recovery, rebuild strength, and redefine your performance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
