'use client';

import Image from 'next/image';

import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ArrowLeft } from 'lucide-react';
import { useState , useEffect } from 'react';






function Header() {
  const { scrollY } = useScroll();
  const headerBg = "#FFF7ED";
  const headerHeight = useTransform(scrollY, [0, 50], ["90px", "65px"]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((v) => !v);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    if (isMenuOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        style={{ backgroundColor: headerBg, height: headerHeight }}
        className="fixed top-0 w-full z-50 flex items-center border border-b-2 border-white justify-between px-6 backdrop-blur-sm transition-all"
      >
        <Link href="/" className="flex items-center">
          <Image width={250} height={150} alt="website logo" src="/logo.png" />
        </Link>

        <nav className="hidden md:flex gap-6 text-[#0F172B] font-bold">
          <a href="/#sessions" className="hover:opacity-80">Sessions</a>
          <a href="/#gallery" className="hover:opacity-80">Gallery</a>
          <a href="/#activities" className="hover:opacity-80">Activities</a>
          <Link href="/about-us" className="hover:opacity-80">About us</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/book-now" className="hidden md:block">
            <button className="hover:scale-110 bg-[#0F172B] text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg transition-transform">
              Book Now
            </button>
          </Link>

          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white/70 text-[#0F172B] shadow-lg border border-black/5"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.button
              type="button"
              onClick={closeMenu}
              className="fixed inset-0 z-[90] bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.aside
              className="fixed top-0 right-0 z-[100] h-full w-[86%] max-w-sm bg-[#FFF7ED] shadow-2xl border-l border-black/10"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
            >
              <div className="px-5 pt-6 space-y-2">
                <a href="/#sessions" onClick={closeMenu} className="block px-4 py-3 rounded-2xl bg-white">Sessions</a>
                <a href="/#gallery" onClick={closeMenu} className="block px-4 py-3 rounded-2xl bg-white">Gallery</a>
                <a href="/#activities" onClick={closeMenu} className="block px-4 py-3 rounded-2xl bg-white">Activities</a>
                <Link href="/about-us" onClick={closeMenu} className="block px-4 py-3 rounded-2xl bg-white">About us</Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}


const images = [
  '/images/gallery-1.png',
  '/images/gallery-2.jpeg',
  '/images/gallery-3.png',
  '/images/gallery-4.jpeg',
  '/images/gallery-5.jpeg',
  '/images/gallery-6.jpeg',
  '/images/gallery-7.jpeg',
  '/images/gallery-8.jpeg',
  '/images/gallery-9.jpeg',
  '/images/gallery-10.jpeg',
    '/images/gallery-3.jpeg'
];

export default function GalleryPage() {
  return (
    <>
    <Header/>
    <main className="min-h-screen bg-[#FFF7ED] px-6 pt-32 pb-20">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#0F172B] font-bold bg-white/70 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-black/5 hover:scale-105 transition-transform"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>

      {/* Title */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#0F172B]">
          Surf Sesh & Memories
        </h1>
        <p className="text-slate-600 mt-3">
          Moments capturés entre deux vagues 🌊
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-2xl aspect-square group cursor-pointer"
          >
            <Image
              src={src}
              alt={`Gallery ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>
    </main>
    </>

  );
}
