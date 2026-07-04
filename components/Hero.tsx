'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-36 pb-24 lg:pt-44 lg:pb-32">
      {/* Floating background shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 right-[8%] h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-float" />
        <div
          className="absolute top-1/3 right-[25%] h-48 w-48 rounded-full bg-yellow/20 blur-2xl animate-float"
          style={{ animationDelay: '1.5s' }}
        />
        <div
          className="absolute bottom-0 right-[5%] h-56 w-56 rounded-full bg-cream/10 blur-2xl animate-float"
          style={{ animationDelay: '3s' }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className="font-heading font-700 text-cream text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            Everything You Need.
            <br />
            <span className="text-primary">Delivered.</span>
          </h1>
          <p className="mt-6 text-lg text-cream/70 max-w-md">
            Food. Groceries. Pharmacy. Fashion. Bill payments. And more —
            across Nigeria, in minutes.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#download"
              className="btn-ripple inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-cream hover:brightness-110 transition"
            >
              Download App <ArrowRight size={16} />
            </a>
            <a
              href="/businesses"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-7 py-3.5 text-sm font-semibold text-cream hover:bg-cream/10 transition"
            >
              Become a Partner
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-[280px] h-[580px] rounded-[2.5rem] border-8 border-black bg-cream shadow-2xl animate-float overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-10" />
            <Image
              src="/screenshots/browse.png"
              alt="Aldor app home screen"
              fill
              className="object-cover object-top rounded-[2rem]"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
