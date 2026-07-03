'use client';

import { motion } from 'framer-motion';
import { Users, ShoppingBag, Truck, BarChart3 } from 'lucide-react';

const benefits = [
  { icon: Users, title: 'More customers', desc: 'Get discovered by thousands of Aldor users searching your category nearby.' },
  { icon: ShoppingBag, title: 'Online orders', desc: 'Take orders directly through the app — no phone calls, no missed orders.' },
  { icon: Truck, title: 'Delivery, handled', desc: 'Tap into Aldor\u2019s rider network. No need to hire or manage your own fleet.' },
  { icon: BarChart3, title: 'Real dashboard', desc: 'Track sales, popular items, and rush hours with data built for decisions.' },
];

const steps = [
  { step: 'Apply', desc: 'Submit your business details below — takes under two minutes.' },
  { step: 'Get verified', desc: 'Our team reviews and onboards you, usually within 48 hours.' },
  { step: 'Go live', desc: 'Your storefront appears in the app and orders start coming in.' },
];

export default function BusinessesContent() {
  return (
    <>
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-xl2 bg-cream p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <b.icon className="text-primary mb-4" size={24} />
              <h3 className="font-heading font-600 text-ink mb-1">{b.title}</h3>
              <p className="text-sm text-gray">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading font-700 text-3xl sm:text-4xl text-cream mb-10">
              How it works.
            </h2>
            <div className="space-y-8">
              {steps.map((s, i) => (
                <div key={s.step} className="flex gap-5">
                  <span className="flex-shrink-0 h-9 w-9 rounded-full bg-primary/20 text-primary font-heading font-600 flex items-center justify-center text-sm">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-heading font-600 text-cream mb-1">{s.step}</h3>
                    <p className="text-sm text-cream/60">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-xl2 bg-white/[0.04] border border-white/10 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-cream font-heading font-600">Your Dashboard</span>
              <span className="text-xs text-primary bg-primary/10 rounded-full px-3 py-1">Live</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="rounded-xl bg-white/5 p-4">
                <div className="text-cream/50 text-xs mb-1">Orders this week</div>
                <div className="text-cream text-2xl font-heading font-700">1,204</div>
              </div>
              <div className="rounded-xl bg-white/5 p-4">
                <div className="text-cream/50 text-xs mb-1">Avg. rating</div>
                <div className="text-cream text-2xl font-heading font-700">4.8</div>
              </div>
            </div>
            <div className="space-y-2">
              {['Jollof Rice Combo', 'Suya Platter', 'Chapman (1L)'].map((item, i) => (
                <div key={item} className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-sm">
                  <span className="text-cream/80">{item}</span>
                  <span className="text-cream/40">{[42, 31, 19][i]} orders</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
