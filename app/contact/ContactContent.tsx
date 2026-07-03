'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

const info = [
  { icon: Mail, label: 'Email', value: 'hello@aldorapp.com' },
  { icon: Phone, label: 'Phone', value: '+234 800 123 4567' },
  { icon: MapPin, label: 'Office', value: 'Lekki Phase 1, Lagos, Nigeria' },
];

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Wire this up to /api/contact once the backend is in place.
    setSubmitted(true);
  }

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 grid lg:grid-cols-5 gap-14">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-8"
        >
          {info.map((i) => (
            <div key={i.label} className="flex items-start gap-4">
              <span className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <i.icon className="text-primary" size={18} />
              </span>
              <div>
                <div className="text-xs text-gray uppercase tracking-wide mb-0.5">{i.label}</div>
                <div className="font-heading font-600 text-ink">{i.value}</div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3"
        >
          {submitted ? (
            <div className="rounded-xl2 bg-cream p-10 text-center">
              <CheckCircle2 className="mx-auto text-primary mb-4" size={36} />
              <h3 className="font-heading font-600 text-xl text-ink mb-2">Message sent.</h3>
              <p className="text-sm text-gray">We typically reply within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">Name</label>
                  <input id="name" name="name" required className="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary/40" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">Email</label>
                  <input id="email" name="email" type="email" required className="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary/40" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-ink mb-1.5">Subject</label>
                <input id="subject" name="subject" required placeholder="What's this about?" className="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm text-ink placeholder:text-gray/60 focus:outline-none focus:ring-2 focus:ring-primary/40" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">Message</label>
                <textarea id="message" name="message" rows={5} required className="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none" />
              </div>
              <button type="submit" className="btn-ripple rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-cream hover:brightness-110 transition">
                Send message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
