'use client';

import { motion } from 'framer-motion';

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
          <div className="h-32 w-32 rounded-xl2 bg-white grid grid-cols-4 grid-rows-4 gap-0.5 p-3">
            {[1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0].map((filled, i) => (
              <div key={i} className={`${filled ? 'bg-ink' : 'bg-white'} rounded-sm`} />
            ))}
          </div>
          <div className="flex gap-4">
            <a href="#" className="rounded-xl border border-cream/20 px-6 py-3 text-cream text-sm font-semibold hover:bg-cream/10 transition">
              App Store
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.aldor.user" className="rounded-xl border border-cream/20 px-6 py-3 text-cream text-sm font-semibold hover:bg-cream/10 transition">
              Google Play
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
