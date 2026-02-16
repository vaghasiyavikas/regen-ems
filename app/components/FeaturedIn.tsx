import Image from "next/image";

export default function FeaturedIn() {
  return (
    <section className="bg-black py-40 border-t border-gray-900">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <h3 className="text-gray-500 text-center text-sm font-bold mb-24 tracking-[0.3em] uppercase opacity-60">Featured In</h3>
        
        {/* Brand Logos */}
        <div className="flex flex-wrap items-center justify-center gap-24 mb-40 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-in-out">
          <div className="relative w-36 h-14 hover:scale-110 transition-transform duration-300">
            <Image src="/images/forbes.webp" alt="Forbes" fill className="object-contain" />
          </div>
          <div className="relative w-28 h-14 hover:scale-110 transition-transform duration-300">
            <Image src="/images/nike.webp" alt="Nike" fill className="object-contain" />
          </div>
          <div className="relative w-44 h-14 hover:scale-110 transition-transform duration-300">
            <Image src="/images/telegraph.webp" alt="The Telegraph" fill className="object-contain" />
          </div>
          <div className="relative w-36 h-14 hover:scale-110 transition-transform duration-300">
            <Image src="/images/skysports.avif" alt="Sky Sports" fill className="object-contain" />
          </div>
        </div>
        
        {/* Professor Paul Lee Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          {/* Left - Images */}
          <div className="flex gap-10 justify-center lg:justify-start relative group">
            <div className="absolute -inset-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[3rem] blur-3xl opacity-10 group-hover:opacity-30 transition-opacity duration-700"></div>

            {/* Image 1 */}
            <div className="relative w-[260px] h-[360px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 hover:-rotate-3 transition-all duration-500 z-10 border border-gray-800 bg-gray-900">
              <Image src="/images/paul-lee-books.webp" alt="Book" fill className="object-cover opacity-90 hover:opacity-100 transition-opacity" />
            </div>

            {/* Image 2 */}
            <div className="relative w-[260px] h-[360px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 hover:rotate-3 transition-all duration-500 mt-20 z-20 border border-gray-800 bg-gray-900">
              <Image src="/images/paul-lee-products.webp" alt="Professor Paul Lee" fill className="object-cover opacity-90 hover:opacity-100 transition-opacity" />
            </div>

             {/* Image 3 - New Image */}
            <div className="absolute -bottom-10 -right-10 w-[200px] h-[200px] rounded-full overflow-hidden shadow-2xl transform hover:scale-110 transition-all duration-500 z-30 border-4 border-black hidden lg:block">
               <Image src="/images/clinically-monitored.webp" alt="Clinical Monitoring" fill className="object-cover" />
            </div>

          </div>
          
          {/* Right - Text */}
          <div className="text-white max-w-xl space-y-10 pl-10">
            <h3 className="text-5xl lg:text-6xl font-bold mb-8 leading-[1.1] tracking-tight">
              Developed by Professor Paul Lee — Surgeon. Scientist. Engineer.
            </h3>
            <p className="text-gray-400 text-xl leading-relaxed font-light tracking-wide">
              Regen EMS was born from the pioneering work of Professor Paul Lee, a renowned surgeon and scientist. With decades of experience in sports medicine and rehabilitation, Professor Lee has dedicated his career to developing evidence-based recovery solutions that bridge the gap between clinical research and real-world application.
            </p>
            <button className="btn-secondary">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
