"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Waves,
  MapPin,
  Calendar,
  Camera,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function AboutUs() {
  const { scrollY } = useScroll();

  // Match your SurfClub header behavior
  const headerBg = "#FFF7ED";
  const headerHeight = useTransform(scrollY, [0, 50], ["90px", "65px"]);

  return (
    <div className="min-h-screen bg-orange-50 text-slate-900">
      {/* --- MOVING HEADER --- */}
      <motion.header
        style={{ backgroundColor: headerBg, height: headerHeight }}
        className="fixed top-0 w-full z-50 flex items-center justify-between px-6 backdrop-blur-sm transition-all"
      >
        <Link href="/" className="flex items-center gap-3">
          <Image width={250} height={150} alt="website logo" src="/logo.png" />
        </Link>

        <nav className="hidden md:flex gap-6 text-[#0F172B] font-bold">
          <Link href="/#sessions">Sessions</Link>
          <Link href="/#gallery">Gallery</Link>
          <Link href="/#activities">Activities</Link>
          <Link href="/about-us">About us</Link>
        </nav>

        <Link href="/book-now">
          <button className="hover:scale-110 bg-[#0F172B] text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg transition-transform">
            Book Now
          </button>
        </Link>
      </motion.header>

      {/* Spacer for fixed header */}
      <div className="h-[90px]" />

      {/* --- HERO --- */}
      <section className="relative overflow-hidden">
        <div className="relative h-[70vh] min-h-[520px] w-full bg-[url('/surf-trip.webp')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/25" />
          {/* soft gradient to match theme */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-orange-50 to-transparent" />

          <div className="relative h-full max-w-6xl mx-auto px-6 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm border border-white/15 mb-6">
                <Waves className="w-4 h-4" />
                <span className="text-sm font-semibold">About MAOUJA</span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-none drop-shadow-[0_6px_14px_rgba(0,0,0,0.35)]">
                La vague qui te porte
              </h1>

              <p className="mt-5 max-w-xl text-white/90 text-lg sm:text-xl leading-relaxed">
                MAOUJA est un surf club né de l’océan et de la passion : cours,
                sessions, et une vibe simple — apprendre, progresser, profiter.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/book-now"
                  className="inline-flex items-center gap-2 bg-[#0F172B] text-white px-5 py-3 rounded-full font-bold shadow-xl hover:scale-105 transition-transform"
                >
                  Book a session <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/#gallery"
                  className="inline-flex items-center gap-2 bg-white/15 text-white px-5 py-3 rounded-full font-bold backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
                >
                  See the vibe <Camera className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- QUICK STATS / HIGHLIGHTS --- */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: Calendar,
              title: "Sessions adaptées",
              desc: "Débutant à avancé — progression claire et fun.",
            },
            {
              icon: MapPin,
              title: "Spot & guidance",
              desc: "On choisit les meilleures conditions selon la marée.",
            },
            {
              icon: ShieldCheck,
              title: "Sécurité d’abord",
              desc: "Briefing, règles, et coaching dans l’eau.",
            },
          ].map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-3xl bg-[#FFF7ED] border border-orange-100 shadow-sm p-6"
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center mb-4">
                <c.icon className="w-6 h-6 text-[#0F172B]" />
              </div>
              <h3 className="font-black text-xl text-[#0F172B]">{c.title}</h3>
              <p className="text-slate-600 mt-2 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- STORY + VALUES --- */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white border border-orange-100 shadow-sm p-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 text-[#0F172B] px-4 py-2 font-bold text-sm">
              <Sparkles className="w-4 h-4" />
              Notre histoire
            </div>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-[#0F172B]">
              Une communauté, pas juste un club
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed text-lg">
              MAOUJA, c’est une ambiance simple : des sessions propres, un
              coaching bienveillant, et le plaisir d’être dans l’eau. Que tu
              viennes pour ta première mousse ou pour travailler tes turns, on
              te guide avec méthode… et beaucoup de good vibes.
            </p>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-orange-50 border border-orange-100 p-4">
                <div className="flex items-center gap-2 font-extrabold text-[#0F172B]">
                  <HeartHandshake className="w-5 h-5" />
                  Esprit d’équipe
                </div>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  On apprend mieux ensemble — conseils, entraide, respect du
                  spot.
                </p>
              </div>

              <div className="rounded-2xl bg-orange-50 border border-orange-100 p-4">
                <div className="flex items-center gap-2 font-extrabold text-[#0F172B]">
                  <Waves className="w-5 h-5" />
                  Progression
                </div>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  Un plan clair : posture, rame, take-off, et techniques selon
                  ton niveau.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden border border-orange-100 shadow-sm bg-white">
              <div className="relative h-[420px] w-full">
                <Image
                  src="/surf-trip-1.webp"
                  alt="MAOUJA surf"
                  fill
                  className="object-cover"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172B]/45 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black text-[#0F172B]">
                  Ce que tu vas ressentir
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Un mix entre sérénité et adrénaline — et ce petit moment où
                  tout s’aligne: la vague, la planche, et toi.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/#sessions"
                    className="inline-flex items-center gap-2 rounded-full bg-orange-100 text-[#0F172B] px-5 py-2.5 font-bold hover:bg-orange-200 transition-colors"
                  >
                    View sessions <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/#gallery"
                    className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-100 text-[#0F172B] px-5 py-2.5 font-bold hover:bg-orange-100 transition-colors"
                  >
                    Gallery <Camera className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* little floating badge */}
            <div className="hidden sm:flex absolute -top-6 -left-6 rounded-3xl bg-[#FFF7ED] border border-orange-100 shadow-sm px-5 py-4 items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#0F172B]" />
              </div>
              <div>
                <p className="font-black text-[#0F172B] leading-none">MAOUJA</p>
                <p className="text-sm text-slate-600">Surf • Sun • Vibes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="rounded-3xl bg-[#0F172B] text-white p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-28 -left-28 w-72 h-72 rounded-full bg-white/10" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Prêt(e) à entrer dans l’eau ?
            </h2>
            <p className="mt-3 text-white/85 max-w-2xl leading-relaxed text-lg">
              Réserve une session et on s’occupe du reste. Tu viens avec l’envie
              — on te guide sur les vagues.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/book-now"
                className="inline-flex items-center gap-2 rounded-full bg-white text-[#0F172B] px-6 py-3 font-black shadow-xl hover:scale-105 transition-transform"
              >
                Book Now <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-6 py-3 font-black hover:bg-white/15 transition-colors"
              >
                Back home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- SOCIAL FLOATING WIDGETS --- */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3">
        <a
          href="https://www.instagram.com/MAOUJA_SURF"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center bg-white rounded-2xl shadow-2xl hover:scale-110 transition-transform"
        >
          <img src="/instagram-logo.svg" className="w-8 h-8" alt="Instagram" />
        </a>

        <a
          href="https://wa.me/0640391475"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center bg-white rounded-2xl shadow-2xl hover:scale-110 transition-transform"
        >
          <img src="/whatsapp-logo.svg" className="w-8 h-8" alt="WhatsApp" />
        </a>
      </div>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center">
        <p>© 2026 SURFWAVE CLUB. Live to ride.</p>
      </footer>
    </div>
  );
}
