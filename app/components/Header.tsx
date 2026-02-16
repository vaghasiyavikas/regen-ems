import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-black group" style={{ minHeight: '80px' }}>
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 h-full flex items-center justify-between" style={{ minHeight: '80px' }}>
        {/* Left: Menu Trigger */}
        <button className="text-white hover:text-[#bd42f4] transition group/btn">
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-white group-hover/btn:bg-[#bd42f4] transition"></span>
            <span className="block w-6 h-0.5 bg-white group-hover/btn:bg-[#bd42f4] transition"></span>
            <span className="block w-6 h-0.5 bg-white group-hover/btn:bg-[#bd42f4] transition"></span>
          </div>
        </button>

        {/* Center: Logo */}
        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
          <Image src="/images/white_logo_png.webp" alt="Regen" width={100} height={40} className="object-contain" priority />
        </Link>

        {/* Right: Icons */}
        <div className="flex gap-6 items-center">
          <button className="text-white hover:text-[#bd42f4] transition">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
          <button className="text-white hover:text-[#bd42f4] transition relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-[#bd42f4] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
        </div>
      </div>
    </header>
  );
}
