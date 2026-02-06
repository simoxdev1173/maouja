"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, Waves, MapPin, Camera, Calendar } from 'lucide-react';
import Sessions from './mainComponents/Sessions';
import GallerySection from './mainComponents/Gallery';
import Image from 'next/image';
export default function SurfClub() {
  const { scrollY } = useScroll();
  
  // Header animation: moves/shrinks as you scroll
  const headerBg = "#FFF7ED"
  const headerHeight = useTransform(scrollY, [0, 50], ["90px", "65px"]);

  return (
    <div className="min-h-screen bg-orange-50  text-slate-900">
      
      {/* --- MOVING HEADER --- */}
      <motion.header 
        style={{ backgroundColor: headerBg, height: headerHeight }}
        className="fixed top-0 w-full z-50 flex items-center justify-between px-6 backdrop-blur-sm transition-all"
      >
        <Image width={250} height={150} alt="website logo" src="/logo.png"/>
        <nav className="hidden md:flex gap-6 text-[#0F172B] font-bold">
          <a href="#sessions">Sessions</a>
          <a href="#gallery">Gallery</a>
          <a href="#activities">Activities</a>
           <a href="/about-us">About us</a>

        </nav>
        <Link href="/book-now">
        <button className="bg-coral-500 hover:scale-110 bg-[#0F172B] text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
          Book Now
        </button>
        </Link>
      </motion.header>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[100vh] flex items-center justify-center bg-[url('/images/cover.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/20" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center text-white px-4"
        >
<h2 className="
  
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
">
  MAOUJA
</h2>  
        <p className="text-4xl text-[white] font-medium mb-8">La vague qui te porte</p>
        
        </motion.div>
      </section>
      <section  className="py-16 px-6">
      <GallerySection/>
      </section>
      {/* --- SESSIONS SECTION --- */}
      <section id="sessions" >
        <Sessions/>
      </section>

      {/* --- OTHER ACTIVITIES --- */}
     

     {/* --- SOCIAL FLOATING WIDGETS --- */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3">
        
        {/* Instagram */}
        <a 
          href="https://www.instagram.com/MAOUJA_SURF" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center bg-white text-white rounded-2xl shadow-2xl hover:scale-110 transition-transform"
        >
           <img src="/instagram-logo.svg" className='w-8 h-8' alt="WhatsApp" />       
        </a>

        {/* WhatsApp */}
        <a 
          href="https://wa.me/0640391475" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center bg-white text-white rounded-2xl shadow-2xl hover:scale-110 transition-transform"
        >
           <img src="/whatsapp-logo.svg" className='w-8 h-8' alt="WhatsApp" />       
        </a>

      </div>
      <footer className="bg-slate-900 text-slate-400 py-12  text-center">
        <p>© 2026 SURFWAVE CLUB. Live to ride.</p>
      </footer>
    </div>
  );
}