"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';

const BookingForm = () => {
  const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE");

  // Replace this with your actual Formspree endpoint after signing up
  // or use https://formspree.io/f/your_id
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/simo4life1173@gmail.com"; 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SENDING");

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  if (status === "SUCCESS") {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-20 text-center"
      >
        <div className="bg-green-100 p-4 rounded-full mb-6">
          <CheckCircle2 className="w-12 h-12 text-green-600" />
        </div>
        <h3 className="text-3xl font-bold text-slate-900">Message envoyé !</h3>
        <p className="mt-2 text-slate-600">On se retrouve bientôt sur l'eau. 🤙</p>
        <button 
          onClick={() => setStatus("IDLE")}
          className="mt-8 text-sm font-semibold underline text-slate-500 hover:text-slate-900"
        >
          Envoyer un autre message
        </button>
      </motion.div>
    );
  }

  return (
    <section id="book-now" className="py-24 bg-orange-50">
      <div className="mx-auto max-w-2xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            PRÊT À <span className="text-primary italic">PROGRESSER ?</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Réserve ta session ou pose tes questions. Je te réponds entre deux vagues.
          </p>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Name Field */}
          <div className="relative">
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

          {/* Phone Field */}
          <div className="relative">
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

          {/* Message Field */}
          <div className="relative">
            <label className="block text-sm font-bold uppercase tracking-wider text-slate-700 mb-2">
              Ton projet / Questions
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-slate-400" />
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Dis-moi ton niveau et ce que tu souhaites travailler..."
                className="w-full rounded-2xl border-2 border-slate-200 bg-white py-4 pl-12 pr-4 outline-none transition-all focus:border-[#0F172B] focus:ring-4 focus:ring-slate-100"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "SENDING"}
            className="group relative w-full overflow-hidden rounded-full bg-[#0F172B] py-5 text-white transition-all hover:bg-[#1e293b] active:scale-[0.98] disabled:opacity-70"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 font-bold uppercase tracking-widest">
              {status === "SENDING" ? "Chargement..." : "Envoyer ma demande"}
              <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </button>

          {status === "ERROR" && (
            <p className="text-center text-sm font-medium text-red-500">
              Oups ! Une erreur est survenue. Réessaie plus tard.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default BookingForm;