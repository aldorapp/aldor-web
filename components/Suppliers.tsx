'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Wheat, Fuel, Boxes } from 'lucide-react';

const cards = [
  { icon: Wheat, title: 'Farm Suppliers', desc: 'Sell fresh produce directly to vendors and homes.' },
  { icon: Fuel, title: 'Diesel Suppliers', desc: 'Reach businesses that need fuel, delivered.' },
  { icon: Boxes, title: 'Wholesale Suppliers', desc: 'Move bulk inventory through the Aldor network.' },
];

export default function Suppliers() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-center gap-6 mb-16">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl"
          >
            🌾
          </motion.span>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center text-primary"
          >
            <ArrowRight size={28} />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl"
          >
            🍽️
          </motion.span>
        </div>

        <h2 className="font-heading font-700 text-3xl sm:text-4xl text-ink text-center mb-14">
          From source to storefront.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-xl2 bg-cream p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <c.icon className="text-primary mb-4" size={26} />
              <h3 className="font-heading font-600 text-lg text-ink mb-2">{c.title}</h3>
              <p className="text-sm text-gray">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
