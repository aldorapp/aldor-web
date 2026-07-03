'use client';

import { motion } from 'framer-motion';
import { Zap, MapPin, Heart } from 'lucide-react';

const points = [
  {
    icon: Zap,
    title: 'Fast',
    desc: 'Most orders arrive in under 30 minutes, dispatched the moment you tap confirm.',
  },
  {
    icon: MapPin,
    title: 'Real-time Tracking',
    desc: 'Watch your rider move on the map from pickup to your doorstep, live.',
  },
  {
    icon: Heart,
    title: 'Reliable',
    desc: 'Vetted riders, verified vendors, and support that actually picks up.',
  },
];

export default function WhyAldor() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="rounded-xl2 bg-cream p-9 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <p.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-heading font-600 text-xl text-ink mb-2">{p.title}</h3>
              <p className="text-sm text-gray leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
