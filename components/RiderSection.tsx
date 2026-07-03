'use client';

import { motion } from 'framer-motion';
import { MapPinned, Navigation, Wallet, CalendarClock } from 'lucide-react';

const cards = [
  { icon: MapPinned, title: 'Nearby Orders', desc: 'Get matched with deliveries close to you.' },
  { icon: Navigation, title: 'In-app Navigation', desc: 'Turn-by-turn routes, built for riders.' },
  { icon: Wallet, title: 'Real-time Earnings', desc: 'Watch your balance grow after every trip.' },
  { icon: CalendarClock, title: 'Weekly Payouts', desc: 'Reliable payments, every single week.' },
];

export default function RiderSection() {
  return (
    <section className="bg-yellow/10 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading font-700 text-3xl sm:text-4xl text-ink">
              Earn more. Ride smarter.
            </h2>
            <p className="mt-4 text-gray max-w-md">
              Join thousands of riders using Aldor to earn flexible income across Nigeria&apos;s biggest cities.
            </p>
            <a
              href="/riders"
              className="btn-ripple mt-8 inline-flex items-center rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream hover:brightness-125 transition"
            >
              Ride With Aldor
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="h-64 w-64 rounded-full bg-primary/15 flex items-center justify-center text-7xl animate-float">
              🏍️
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-xl2 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <c.icon className="text-primary mb-4" size={24} />
              <h3 className="font-heading font-600 text-ink mb-1">{c.title}</h3>
              <p className="text-sm text-gray">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
