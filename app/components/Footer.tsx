import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-900 relative overflow-hidden" style={{ minHeight: '600px', marginTop: '6rem' }}>
      <div className="bg-black text-center text-sm border-b border-gray-900 relative z-10" style={{ padding: '3rem 0' }}>
        <p className="flex items-center justify-center gap-20 flex-wrap text-gray-400 font-medium tracking-wide">
          <span className="flex items-center gap-4 hover:text-white transition-colors duration-300">
            <span className="text-[#bd42f4] text-2xl">🔒</span> Backed By The Regeneration Man
          </span>
          <span className="flex items-center gap-4 hover:text-white transition-colors duration-300">
            <span className="text-[#bd42f4] text-2xl">📦</span> Free Shipping on Orders Over £50
          </span>
        </p>
      </div>
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10" style={{ padding: '4rem 2rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-4" style={{ gap: '4rem', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Image src="/images/white_logo_png.webp" alt="Regen" width={200} height={70} className="opacity-80 hover:opacity-100 transition-opacity duration-300" style={{ marginBottom: '1rem' }} />
            <p className="text-gray-500 text-xl leading-relaxed max-w-xs font-light">
              Advanced EMS technology for faster recovery and better performance.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h4 className="font-bold text-xl tracking-[0.2em] text-gray-400 uppercase" style={{ marginBottom: '1rem' }}>COMPANY</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} className="text-xl text-gray-500 font-light">
              <li><Link href="/about" className="hover:text-[#bd42f4] transition-colors duration-300 hover:translate-x-2 inline-block">About Regen</Link></li>
              <li><Link href="/terms" className="hover:text-[#bd42f4] transition-colors duration-300 hover:translate-x-2 inline-block">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-[#bd42f4] transition-colors duration-300 hover:translate-x-2 inline-block">Privacy Policy</Link></li>
              <li><Link href="/returns" className="hover:text-[#bd42f4] transition-colors duration-300 hover:translate-x-2 inline-block">Returns Policy</Link></li>
            </ul>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h4 className="font-bold text-xl tracking-[0.2em] text-gray-400 uppercase" style={{ marginBottom: '1rem' }}>SUPPORT</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} className="text-xl text-gray-500 font-light">
              <li><Link href="/contact" className="hover:text-[#bd42f4] transition-colors duration-300 hover:translate-x-2 inline-block">Contact Us</Link></li>
              <li><Link href="/shipping" className="hover:text-[#bd42f4] transition-colors duration-300 hover:translate-x-2 inline-block">Shipping Policy</Link></li>
              <li><Link href="/faq" className="hover:text-[#bd42f4] transition-colors duration-300 hover:translate-x-2 inline-block">FAQ</Link></li>
            </ul>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h4 className="font-bold text-xl tracking-[0.2em] text-gray-400 uppercase" style={{ marginBottom: '1rem' }}>FOLLOW US</h4>
            <div className="flex text-xl text-gray-500" style={{ gap: '1.5rem' }}>
              <a href="#" className="hover:text-[#bd42f4] transition-colors duration-300 hover:scale-110 transform inline-block">Facebook</a>
              <a href="#" className="hover:text-[#bd42f4] transition-colors duration-300 hover:scale-110 transform inline-block">Instagram</a>
              <a href="#" className="hover:text-[#bd42f4] transition-colors duration-300 hover:scale-110 transform inline-block">Twitter</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-900 text-center text-base text-gray-600 font-light tracking-wide" style={{ marginTop: '4rem', paddingTop: '2rem' }}>
          <p>&copy; {new Date().getFullYear()} Regen EMS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
