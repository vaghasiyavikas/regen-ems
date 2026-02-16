import Image from "next/image";

export default function WhyRegenEMS() {
  return (
    <section className="bg-black py-40 lg:py-60 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black pointer-events-none"></div>
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 relative z-10">
        <h2 className="text-white text-center text-6xl md:text-8xl font-bold mb-32 tracking-tight">
          WHY <span className="text-[#bd42f4] relative inline-block">
            REGEN EMS
            <span className="absolute -bottom-4 left-0 w-full h-2 bg-[#bd42f4] transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100 origin-left"></span>
          </span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          {/* Left - Text Content */}
          <div className="bg-[#111] p-24 flex flex-col justify-center min-h-[800px] rounded-[4rem] border border-gray-800 hover:border-[#bd42f4]/30 transition-colors duration-500 group">
            <h3 className="text-white text-5xl font-bold mb-16 group-hover:text-[#bd42f4] transition-colors duration-300">Designed by Experts</h3>
            <div className="text-gray-400 text-2xl mb-20 space-y-8 font-light">
              <p className="flex items-center gap-6 group/item hover:text-white transition-colors">
                <span className="w-3 h-3 bg-[#bd42f4] rounded-full group-hover/item:scale-150 transition-transform"></span>
                Rehabilitation
              </p>
              <p className="flex items-center gap-6 group/item hover:text-white transition-colors">
                <span className="w-3 h-3 bg-[#bd42f4] rounded-full group-hover/item:scale-150 transition-transform"></span>
                Muscle & EMS Therapy for Faster
              </p>
              <p className="flex items-center gap-6 group/item hover:text-white transition-colors">
                <span className="w-3 h-3 bg-[#bd42f4] rounded-full group-hover/item:scale-150 transition-transform"></span>
                Post-Surgical Recovery
              </p>
              <p className="flex items-center gap-6 group/item hover:text-white transition-colors">
                <span className="w-3 h-3 bg-[#bd42f4] rounded-full group-hover/item:scale-150 transition-transform"></span>
                Personalised & Clinically Monitored
              </p>
            </div>
            <p className="text-gray-500 text-xl leading-relaxed mb-20 max-w-xl font-light">
              Developed with insights from elite athletes, physiotherapists, and medical professionals to deliver clinically-proven results for recovery and performance.
            </p>
            <button className="btn-secondary self-start">
              EXPLORE NOW
            </button>
          </div>
          
          {/* Right - Books Image with Gradient */}
          <div className="relative overflow-hidden rounded-[4rem] min-h-[800px] flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4] via-[#8b5cf6] to-[#bd42f4] opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>
            {/* <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay"></div> */}
            <div className="relative w-full h-full p-24 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-700 ease-out">
              <Image 
                src="/images/paul-lee-books.webp" 
                alt="Regeneration by Design" 
                width={700} 
                height={800}
                className="object-contain drop-shadow-2xl rotate-[-5deg] group-hover:rotate-0 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
