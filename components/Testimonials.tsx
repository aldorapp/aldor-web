'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      'Since joining Aldor, our order volume doubled in three months. The dashboard makes managing rush hour simple.',
    name: 'Amaka O.',
    role: 'Restaurant Owner, Lekki',
  },
  {
    quote:
      'I order groceries every week and the tracking is spot on — I know exactly when to expect my rider.',
    name: 'Tunde A.',
    role: 'Customer, Ikeja',
  },
  {
    quote:
      'Weekly payouts land on time, every time. Aldor gave me a flexible way to earn on my own schedule.',
    name: 'Chidi E.',
    role: 'Rider, Lagos',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="font-heading font-700 text-3xl sm:text-4xl text-ink text-center mb-14">
          Loved across the board.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl2 bg-cream p-8 shadow-sm"
            >
              <p className="text-ink/80 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="font-heading font-600 text-ink text-sm">{t.name}</div>
              <div className="text-xs text-gray">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
