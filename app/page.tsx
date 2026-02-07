"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Sessions from "./mainComponents/Sessions";
import GallerySection from "./mainComponents/Gallery";
import Image from "next/image";

export default function SurfClub() {
  const { scrollY } = useScroll();

  // Header animation: moves/shrinks as you scroll
  const headerBg = "#FFF7ED";
  const headerHeight = useTransform(scrollY, [0, 50], ["90px", "65px"]);

  // Mobile sidebar state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((v) => !v);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close on ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    if (isMenuOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-orange-50 text-slate-900">
      {/* --- MOVING HEADER --- */}
      <motion.header
        style={{ backgroundColor: headerBg, height: headerHeight }}
        className="fixed top-0 w-full z-50 flex items-center justify-center gap-20 px-6 backdrop-blur-sm transition-all"
      >
        <Link href="/" className="flex items-center justify-center">
          <Image width={250} height={150} alt="website logo" src="/logo.png" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-[#0F172B] font-bold">
          <a href="#sessions" className="hover:opacity-80">
            Sessions
          </a>
          <a href="#gallery" className="hover:opacity-80">
            Gallery
          </a>
          <a href="#activities" className="hover:opacity-80">
            Activities
          </a>
          <Link href="/about-us" className="hover:opacity-80">
            About us
          </Link>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <Link href="/book-now" className="hidden md:block">
            <button className="hover:scale-110 bg-[#0F172B] text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg transition-transform">
              Book Now
            </button>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white/70 text-[#0F172B] shadow-lg border border-black/5"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* --- MOBILE SIDEBAR + BACKDROP --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              onClick={closeMenu}
              className="fixed inset-0 z-[90] bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Sidebar */}
            <motion.aside
              className="fixed top-0 right-0 z-[100] h-full w-[86%] max-w-sm bg-[#FFF7ED] shadow-2xl border-l border-black/10"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between px-5 pt-5">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-2xl bg-white/70 border border-black/5 shadow-sm flex items-center justify-center">
                    <span className="font-black text-[#0F172B]">M</span>
                  </div>
                  <div className="leading-tight">
                    <div className="font-extrabold text-[#0F172B]">MAOUJA</div>
                    <div className="text-xs text-slate-600">Menu</div>
                  </div>
                </div>

                <button
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white/70 text-[#0F172B] shadow-lg border border-black/5"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="px-5 mt-6">
                <div className="space-y-2">
                  <a
                    href="#sessions"
                    onClick={closeMenu}
                    className="block w-full rounded-2xl px-4 py-3 font-bold text-[#0F172B] bg-white/60 border border-black/5 hover:bg-white transition"
                  >
                    Sessions
                  </a>
                  <a
                    href="#gallery"
                    onClick={closeMenu}
                    className="block w-full rounded-2xl px-4 py-3 font-bold text-[#0F172B] bg-white/60 border border-black/5 hover:bg-white transition"
                  >
                    Gallery
                  </a>
                  <a
                    href="#activities"
                    onClick={closeMenu}
                    className="block w-full rounded-2xl px-4 py-3 font-bold text-[#0F172B] bg-white/60 border border-black/5 hover:bg-white transition"
                  >
                    Activities
                  </a>
                  <Link
                    href="/about-us"
                    onClick={closeMenu}
                    className="block w-full rounded-2xl px-4 py-3 font-bold text-[#0F172B] bg-white/60 border border-black/5 hover:bg-white transition"
                  >
                    About us
                  </Link>
                </div>

                <div className="mt-5">
                  <Link href="/book-now" onClick={closeMenu}>
                    <button className="w-full bg-[#0F172B] text-white px-4 py-3 rounded-2xl font-bold text-sm shadow-lg hover:scale-[1.02] transition-transform">
                      Book Now
                    </button>
                  </Link>

                  <div className="mt-4 text-xs text-slate-600">
                    Tip: tap outside the menu or press <span className="font-semibold">ESC</span> to close.
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[100vh] flex items-center justify-center bg-[url('/images/cover.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/20" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center text-white px-4"
        >
          <h2
            className="
              font-black
              tracking-tighter
              leading-none
              mb-8
              text-transparent
              bg-clip-text
              bg-[url('/text-cover-1.jpg')]
              text-[13vw]
              bg-cover
              bg-top
              drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]
              selection:bg-[#0077b6] selection:text-white
            "
          >
            MAOUJA
          </h2>
          <p className="text-4xl text-[white] font-medium mb-8">La vague qui te porte</p>
        </motion.div>
      </section>

      <section className="py-16 px-6" id="gallery">
        <GallerySection />
      </section>

      {/* --- SESSIONS SECTION --- */}
      <section id="sessions">
        <Sessions />
      </section>

      {/* --- SOCIAL FLOATING WIDGETS --- */}
      <div className="fixed bottom-6 right-6 z-[80] flex flex-col gap-3">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/MAOUJA_SURF"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center bg-white rounded-2xl shadow-2xl hover:scale-110 transition-transform"
        >
          <img src="/instagram-logo.svg" className="w-8 h-8" alt="Instagram" />
        </a>

        {/* WhatsApp */}
            <a
          href="https://api.whatsapp.com/send?phone=212640391475"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center bg-white rounded-2xl shadow-2xl hover:scale-110 transition-transform"
        >
          <img src="/whatsapp-logo.svg" className="w-8 h-8" alt="WhatsApp" />
        </a>
      </div>

      <footer className="bg-slate-900 text-slate-400 py-12 text-center">
        <p>© 2026 SURFWAVE CLUB. Live to ride.</p>
      </footer>
    </div>
  );
}
