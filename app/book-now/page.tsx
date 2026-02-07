"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Send, User, Phone, MessageSquare, ArrowLeft } from 'lucide-react';

export default function BookingPage() {
  const [status, setStatus] = useState<"IDLE" | "SENDING">("IDLE");

  const WHATSAPP_NUMBER = "212640391475"; // without +

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SENDING");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const message = formData.get("message");
//wtv
    const text = `
🏄 Nouvelle demande MAOUJA

👤 Nom: ${name}
📞 Téléphone: ${phone}

💬 Message:
${message}
    `;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");
    setStatus("IDLE");
  };

  return (
    <main className="min-h-screen bg-orange-50 px-6 pt-28 pb-20">
      {/* Top Header */}
      <div className="max-w-3xl mx-auto mb-10 flex items-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#0F172B] font-bold bg-white/70 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-black/5 hover:scale-105 transition-transform"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>

      {/* Title */}
      <div className="mx-auto max-w-2xl text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
          Réserve ta session
        </h1>
        <p className="mt-3 text-lg text-slate-600">
          Envoie ta demande directement sur WhatsApp. Réponse rapide, sans formulaires compliqués.
        </p>
      </div>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit}
        className="mx-auto max-w-2xl space-y-6"
      >
        {/* Name */}
        <div>
          <label className="block text-sm font-bold uppercase tracking-wider text-slate-700 mb-2">
            Nom complet
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              name="name"
              required
              placeholder="Ex: Kelly Slater"
              className="w-full rounded-2xl border-2 border-slate-200 bg-white py-4 pl-12 pr-4 outline-none transition-all focus:border-[#0F172B] focus:ring-4 focus:ring-slate-100"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-bold uppercase tracking-wider text-slate-700 mb-2">
            Téléphone
          </label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="tel"
              name="phone"
              required
              placeholder="+212 6..."
              className="w-full rounded-2xl border-2 border-slate-200 bg-white py-4 pl-12 pr-4 outline-none transition-all focus:border-[#0F172B] focus:ring-4 focus:ring-slate-100"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-bold uppercase tracking-wider text-slate-700 mb-2">
            Ton projet / Questions
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-5 w-5 h-5 text-slate-400" />
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Dis-moi ton niveau, ton objectif, et tes disponibilités..."
              className="w-full rounded-2xl border-2 border-slate-200 bg-white py-4 pl-12 pr-4 outline-none transition-all focus:border-[#0F172B] focus:ring-4 focus:ring-slate-100"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "SENDING"}
          className="group relative w-full overflow-hidden rounded-full bg-[#0F172B] py-5 text-white transition-all hover:bg-[#1e293b] active:scale-[0.98] disabled:opacity-70"
        >
          <span className="relative z-10 flex items-center justify-center gap-2 font-bold uppercase tracking-widest">
            Envoyer sur WhatsApp
            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </button>
      </motion.form>
    </main>
  );
}
