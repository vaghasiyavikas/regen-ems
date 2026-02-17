"use client";
import { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQSection {
  label: string;
  items: FAQItem[];
}

interface FAQCollapseProps {
  sections: FAQSection[];
}

export default function FAQCollapse({ sections }: FAQCollapseProps) {
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());

  const toggleQuestion = (id: string) => {
    setOpenQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="bg-black py-20">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              {/* Section Title */}
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 tracking-wide uppercase">{section.label}</h2>
              
              {/* Questions */}
              <div className="space-y-1">
                {section.items.map((item) => (
                  <div key={item.id}>
                    {/* Question Header */}
                    <button
                      onClick={() => toggleQuestion(item.id)}
                      className="w-full flex items-center justify-between text-white hover:text-gray-300 transition-colors duration-300 py-2"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          openQuestions.has(item.id) 
                            ? 'bg-white' 
                            : 'bg-transparent border-2 border-white'
                        }`}>
                          <span className={`text-2xl font-light ${openQuestions.has(item.id) ? 'text-black' : 'text-white'}`}>
                            {openQuestions.has(item.id) ? '−' : '+'}
                          </span>
                        </div>
                        <span className="text-base md:text-lg font-medium text-left">{item.question}</span>
                      </div>
                    </button>
                    
                    {/* Answer */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${openQuestions.has(item.id) ? 'max-h-[500px] opacity-100 pb-3' : 'max-h-0 opacity-0'}`}
                    >
                      <p className="text-gray-400 text-base md:text-lg leading-relaxed pl-16">{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
