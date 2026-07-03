'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = ['More customers', 'Online orders', 'Delivery management'];

export default function BusinessSection() {
  return (
    <section className="bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading font-700 text-3xl sm:text-4xl text-cream mb-6">
            Grow your business with Aldor.
          </h2>
          <ul className="space-y-4 mb-10">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check size={14} className="text-primary" />
                </span>
                <span className="text-cream/80">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href="/businesses"
            className="btn-ripple inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-cream hover:brightness-110 transition"
          >
            Partner With Aldor
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-xl2 bg-white/[0.04] border border-white/10 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <span className="text-cream font-heading font-600">Dashboard</span>
            <span className="text-xs text-primary bg-primary/10 rounded-full px-3 py-1">Live</span>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="rounded-xl bg-white/5 p-4">
              <div className="text-cream/50 text-xs mb-1">Today&apos;s Orders</div>
              <div className="text-cream text-2xl font-heading font-700">248</div>
            </div>
            <div className="rounded-xl bg-white/5 p-4">
              <div className="text-cream/50 text-xs mb-1">Revenue</div>
              <div className="text-cream text-2xl font-heading font-700">₦412k</div>
            </div>
          </div>
          <div className="h-32 rounded-xl bg-white/5 flex items-end gap-2 p-4">
            {[40, 70, 55, 90, 65, 80, 100].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-primary/70"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
