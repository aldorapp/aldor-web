'use client';

import { motion } from 'framer-motion';
import { Wheat, Fuel, Boxes } from 'lucide-react';

const categories = [
  { icon: Wheat, title: 'Farm Suppliers', desc: 'Sell fresh produce directly to restaurants, markets, and homes — cutting out layers of middlemen.' },
  { icon: Fuel, title: 'Diesel Suppliers', desc: 'Reach businesses that need fuel delivered on schedule, tracked from dispatch to delivery.' },
  { icon: Boxes, title: 'Wholesale Suppliers', desc: 'Move bulk inventory to retailers across the Aldor network, with orders and payments in one place.' },
];

export default function SuppliersContent() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {categories.map((c, i) => (
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
              <p className="text-sm text-gray leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl2 bg-ink p-10 lg:p-14 text-center"
        >
          <h2 className="font-heading font-700 text-2xl sm:text-3xl text-cream mb-4">
            One network, every link in the chain.
          </h2>
          <p className="text-cream/60 max-w-xl mx-auto text-sm">
            Aldor connects suppliers directly to the businesses and riders already
            moving goods through the platform — no separate logistics setup required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
