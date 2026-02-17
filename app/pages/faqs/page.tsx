"use client";
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import FAQCollapse from "@/app/components/FAQCollapse";
import { useEffect, useState } from "react";

export default function FAQPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const faqData = {
    faqs: [
      {
        label: "About the Device",
        items: [
          {
            id: "about-01",
            question: "What is the Regen Recovery Device?",
            answer: "The Regen EMS device is a doctor-designed recovery tool using Electrical Muscle Stimulation (EMS) and Transcutaneous Electrical Nerve Stimulation (TENS). It gently stimulates muscles and nerves to reduce pain, prevent muscle loss, and improve circulation during recovery."
          },
          {
            id: "about-02",
            question: "Who can use it?",
            answer: "The Regen EMS device is suitable for patients recovering from orthopaedic, spinal, or cosmetic procedures who wish to support recovery at home. Always consult your doctor or physiotherapist before use, particularly after recent surgery."
          },
          {
            id: "about-03",
            question: "What's the difference between EMS and TENS?",
            answer: "EMS activates muscles to help prevent atrophy, support strength, and improve circulation. TENS targets sensory nerves to help reduce pain and discomfort. Used together, they support recovery and comfort."
          }
        ]
      },
      {
        label: "Usage & Settings",
        items: [
          {
            id: "usage-01",
            question: "When can I start using the Regen EMS device after surgery?",
            answer: "This depends on the procedure and your clinician's advice. In many cases, light stimulation may begin 1–2 weeks after surgery, once wounds have healed and medical clearance is given."
          },
          {
            id: "usage-02",
            question: "How often should I use it?",
            answer: "Most patients use the device for 1–2 sessions per day, each lasting 20–30 minutes. Your physiotherapist may adjust frequency or duration based on your recovery plan."
          },
          {
            id: "usage-03",
            question: "Does it hurt?",
            answer: "No. The sensation should feel like gentle pulsing or tingling. It should never be painful. If discomfort occurs, reduce the intensity or stop and consult your clinician."
          },
          {
            id: "usage-04",
            question: "Can I use it on more than one area?",
            answer: "Yes. Electrode pads can be repositioned to different muscle groups such as the thigh, shoulder, or calf. Always switch off the device before moving pads."
          }
        ]
      },
      {
        label: "Safety & Precautions",
        items: [
          {
            id: "safety-01",
            question: "Is it safe to use after surgery?",
            answer: "Yes, when used as directed and with clinician approval. Always follow guidance on timing and intensity specific to your surgery."
          },
          {
            id: "safety-02",
            question: "Who should NOT use the device?",
            answer: "The device should not be used by individuals with pacemakers or implanted defibrillators, during pregnancy, over open or unhealed wounds, in severe heart conditions or epilepsy, or over areas of active cancer. Consult a medical professional if unsure."
          },
          {
            id: "safety-03",
            question: "Can I use it over metal implants or joint replacements?",
            answer: "Yes, it is generally safe around metallic implants such as hip or knee replacements, as the electrical current does not penetrate deep enough to affect them. Always follow your surgeon's specific advice."
          },
          {
            id: "safety-04",
            question: "Are there side effects?",
            answer: "Side effects are uncommon. Mild redness or tingling at the pad site may occur and usually resolves quickly."
          }
        ]
      },
      {
        label: "Device Care & Maintenance",
        items: [
          {
            id: "care-01",
            question: "How do I clean the pads?",
            answer: "Wipe pads gently with a slightly damp cloth after use. Do not immerse in water. Replace pads if they lose adhesion or become damaged."
          },
          {
            id: "care-02",
            question: "How long does the battery last?",
            answer: "A full charge typically provides 8–10 sessions, depending on intensity settings. Recharge using the supplied USB cable."
          },
          {
            id: "care-03",
            question: "How do I store the device?",
            answer: "Store the device in a cool, dry place away from direct sunlight. Keep all components in the carry case when not in use."
          }
        ]
      },
      {
        label: "Results & Effectiveness",
        items: [
          {
            id: "results-01",
            question: "How soon will I see results?",
            answer: "Many users notice reduced pain and improved muscle activation within 1–2 weeks of consistent use. Full recovery timelines vary by individual and procedure."
          },
          {
            id: "results-02",
            question: "Can it replace physiotherapy?",
            answer: "No. The device is intended to support recovery alongside physiotherapy and medical care, not replace them."
          },
          {
            id: "results-03",
            question: "Is it clinically approved?",
            answer: "Yes. The Regen EMS Device meets CE and MHRA safety standards and is used by clinicians and physiotherapists across the UK."
          }
        ]
      },
      {
        label: "Warranty & Support",
        items: [
          {
            id: "support-01",
            question: "Is there a warranty?",
            answer: "Yes. All Regen EMS devices include a 12-month manufacturer's warranty covering technical faults and defects."
          },
          {
            id: "support-02",
            question: "What if I have questions or need replacement parts?",
            answer: "You can contact the support team via email at ems@regenphd.com or through the website contact page."
          }
        ]
      }
    ]
  };

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <div className="relative w-full" style={{ paddingTop: '80px' }}>
        {/* Desktop View */}
        <div className="hidden md:block relative h-screen">
          <div className="absolute inset-0">
            <Image 
              src="/images/ems-explore.webp" 
              alt="FAQ & Safety Information" 
              fill 
              className="object-cover"
            />
          </div>
          <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <div className="text-center text-white max-w-3xl px-8">
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                FAQ & Safety Information
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Everything You Need to Know About Using the Regen Recovery Device Safely at Home
              </p>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <div className="relative w-full h-[60vh]">
            <Image 
              src="/images/ems-explore.webp" 
              alt="FAQ & Safety Information" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="bg-black text-white px-8 py-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              FAQ & Safety Information
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Everything You Need to Know About Using the Regen Recovery Device Safely at Home
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQCollapse sections={faqData.faqs} />

      {/* Contact Section */}
      <div className="pt-8 pb-16 bg-black text-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <h2 className="text-4xl font-bold mb-8">Can't find what you're looking for?</h2>
          <p className="text-lg mb-4">
            Send us an email to tell us what's up and someone from our Customer Service team will get back to you as soon as possible. Be sure to include your order number (if you have one).
          </p>
          <p className="text-lg mb-16">
            Please email us at <a href="mailto:Ems@regenphd.com" className="hover:underline">Ems@regenphd.com</a>
          </p>
          <h2 className="text-4xl font-bold mb-8">Other inquiries? Let's chat.</h2>
          <p className="text-lg">
            Please email us at <a href="mailto:Ems@regenphd.com" className="hover:underline">Ems@regenphd.com</a>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
