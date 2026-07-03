'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: 'Which cities does Aldor deliver in?',
    a: 'Aldor currently operates in Lagos, Abuja, and Port Harcourt, with new cities launching regularly.',
  },
  {
    q: 'How do I become a delivery partner?',
    a: 'Download the Aldor Rider app, complete verification, and start accepting orders within 48 hours.',
  },
  {
    q: 'How do restaurants and stores sign up?',
    a: 'Visit the Businesses page and submit your details — our onboarding team reaches out within a day.',
  },
  {
    q: 'What payment methods are supported?',
    a: 'Cards, bank transfer, and Aldor Wallet are all supported, alongside cash on delivery in select areas.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <h2 className="font-heading font-700 text-3xl sm:text-4xl text-ink text-center mb-14">
          Frequently asked questions
        </h2>
        <div className="divide-y divide-black/10">
          {faqs.map((f, i) => (
            <div key={f.q} className="py-5">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between text-left"
              >
                <span className="font-heading font-600 text-ink">{f.q}</span>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.2 }}>
                  <Plus className="text-primary" size={20} />
                </motion.span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-3 text-sm text-gray leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
