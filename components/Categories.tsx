'use client';

import { motion } from 'framer-motion';

const categories = [
  { emoji: '🍔', label: 'Food' },
  { emoji: '🥦', label: 'Grocery' },
  { emoji: '💊', label: 'Pharmacy' },
  { emoji: '👕', label: 'Fashion' },
  { emoji: '🚜', label: 'Farms' },
  { emoji: '⛽', label: 'Diesel' },
  { emoji: '💡', label: 'Bills' },
];

export default function Categories() {
  return (
    <section id="categories" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading font-700 text-3xl sm:text-4xl text-ink text-center mb-14"
        >
          One app. Everything delivered.
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {categories.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center justify-center gap-3 rounded-xl2 bg-white py-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <span className="text-3xl">{c.emoji}</span>
              <span className="text-sm font-medium text-ink">{c.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
