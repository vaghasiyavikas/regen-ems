import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[800px] overflow-hidden bg-black" style={{ paddingTop: '80px', marginBottom: '4rem' }}>
      {/* Full Width Background Image */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <div className="relative h-full bg-black flex items-center justify-center" style={{ width: 'calc(100% + 10px)', marginLeft: '-20px' }}>
          <Image
            src="/images/ems-top-section-image.webp"
            alt="EMS Device"
            fill
            className="object-cover drop-shadow-2xl animate-slide-horizontal"
            priority
          />
        </div>
      </div>
      
      {/* Right Half Overlay - Purple gradient with transparency */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full flex items-center overflow-hidden" style={{ backgroundColor: 'rgba(168, 85, 247, 0.95)', paddingLeft: '4rem' }}>
        {/* Animated Gradient Circles */}
        <div className="absolute top-[-20%] right-[-20%] w-[600px] h-[600px] rounded-full bg-white/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[-20%] left-[-20%] w-[500px] h-[500px] rounded-full bg-purple-900/20 blur-3xl animate-pulse-slow delay-1000"></div>
        
        <div className="relative z-10 w-full px-12 md:px-16 text-white">
          <div className="max-w-xl animate-slide-in-right text-left">
            <h1 className="font-normal leading-[1.3] text-3xl md:text-4xl lg:text-5xl tracking-tight" style={{ marginBottom: '3rem' }}>
              Recover Faster After Surgery — Safe, Simple & Clinically Proven
            </h1>
            <button className="group flex items-center gap-3 text-white border-b-2 border-white pb-2 text-lg font-medium transition-all duration-300 hover:text-gray-200 hover:border-gray-200 cursor-pointer">
              Shop Now
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
