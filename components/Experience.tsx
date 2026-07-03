'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
  'Track your delivery in real time',
  'Watch your rider move on the map',
  'Receive notifications at every step',
  'Know your exact arrival time',
];

export default function Experience() {
  return (
    <section className="bg-cream py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center lg:justify-start order-2 lg:order-1"
        >
          <div className="relative w-64 h-[520px] rounded-[2.25rem] border-8 border-black bg-white shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl" />
            <div className="h-full w-full rounded-[1.7rem] overflow-hidden bg-gradient-to-b from-cream to-white p-4 pt-10 flex flex-col gap-3">
              <div className="h-40 rounded-2xl bg-ink/90 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-cream/40 text-xs">
                  live map
                </div>
                <div className="absolute h-3 w-3 rounded-full bg-primary top-1/2 left-1/3 shadow-[0_0_0_6px_rgba(234,0,38,0.2)]" />
              </div>
              <div className="text-sm font-heading font-600 text-ink">Rider is 4 mins away</div>
              <div className="h-16 rounded-xl bg-white shadow-sm" />
              <div className="h-16 rounded-xl bg-white shadow-sm" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="order-1 lg:order-2"
        >
          <h2 className="font-heading font-700 text-3xl sm:text-4xl text-ink mb-6">
            Track your delivery, start to finish.
          </h2>
          <ul className="space-y-4">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-0.5 h-6 w-6 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check size={14} className="text-primary" />
                </span>
                <span className="text-ink/80">{f}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
