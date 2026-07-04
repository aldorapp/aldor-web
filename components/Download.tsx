'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Download() {
  return (
    <section id="download" className="bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading font-700 text-3xl sm:text-5xl text-cream mb-6"
        >
          Get started today.
        </motion.h2>
        <p className="text-cream/60 mb-10">
          Scan the code or find Aldor on the App Store and Google Play.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <div className="h-32 w-32 rounded-xl2 bg-white p-3 flex items-center justify-center overflow-hidden">
            <Image
              src="/qr-code.png"
              alt="Scan to download the Aldor app"
              width={112}
              height={112}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex gap-4">
            <a href="#" className="rounded-xl border border-cream/20 px-6 py-3 text-cream text-sm font-semibold hover:bg-cream/10 transition">
              App Store
            </a>
            <a href="#" className="rounded-xl border border-cream/20 px-6 py-3 text-cream text-sm font-semibold hover:bg-cream/10 transition">
              Google Play
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
