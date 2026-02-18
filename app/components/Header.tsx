"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "../store/cartStore";
import CartDrawer from "./CartDrawer";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { openCart, getTotalItems } = useCartStore();
  const cartCount = getTotalItems();

  return (
    <>
      <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-black group" style={{ minHeight: '80px' }}>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 h-full flex items-center justify-between" style={{ minHeight: '80px' }}>
          {/* Left: Menu Trigger */}
          <button onClick={() => setIsDrawerOpen(true)} className="text-white hover:text-[#bd42f4] transition group/btn">
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
            <button onClick={openCart} className="text-white hover:text-[#bd42f4] transition relative">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#bd42f4] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Drawer */}
      {isDrawerOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setIsDrawerOpen(false)}></div>
          <div className="fixed left-0 top-0 h-full w-full md:w-[600px] bg-black z-50 flex flex-col">
            <div className="p-8">
              <button onClick={() => setIsDrawerOpen(false)} className="text-white hover:text-[#bd42f4] transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav className="flex-1 px-8">
              <Link href="/" onClick={() => setIsDrawerOpen(false)} className="block text-white text-xl font-medium py-4 border-b border-gray-800 hover:text-[#bd42f4] transition">
                HOME
              </Link>
              <Link href="/pages/regen-ems" onClick={() => setIsDrawerOpen(false)} className="block text-white text-xl font-medium py-4 border-b border-gray-800 hover:text-[#bd42f4] transition">
                REGEN EMS
              </Link>
              <Link href="/pages/how-to-use" onClick={() => setIsDrawerOpen(false)} className="block text-white text-xl font-medium py-4 border-b border-gray-800 hover:text-[#bd42f4] transition">
                HOW TO USE
              </Link>
              <Link href="/pages/how-it-works" onClick={() => setIsDrawerOpen(false)} className="block text-white text-xl font-medium py-4 border-b border-gray-800 hover:text-[#bd42f4] transition">
                HOW IT WORKS
              </Link>
              <Link href="/pages/faqs" onClick={() => setIsDrawerOpen(false)} className="block text-white text-xl font-medium py-4 border-b border-gray-800 hover:text-[#bd42f4] transition">
                FAQ'S
              </Link>
              <Link href="/pages/contact" onClick={() => setIsDrawerOpen(false)} className="block text-white text-xl font-medium py-4 border-b border-gray-800 hover:text-[#bd42f4] transition">
                CONTACT
              </Link>
            </nav>

            <div className="p-8 border-t border-gray-800">
              <div className="flex items-center justify-between">
                <Link href="/login" className="flex items-center gap-2 text-white hover:text-[#bd42f4] transition">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                  <span>Log in</span>
                </Link>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/regenphd" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#bd42f4] transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/regenphd" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#bd42f4] transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <CartDrawer />
    </>
  );
}
