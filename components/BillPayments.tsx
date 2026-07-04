'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const icons = [
  { emoji: '📶', pos: 'top-6 left-6', delay: '0s' },
  { emoji: '⚡', pos: 'top-10 right-10', delay: '0.6s' },
  { emoji: '📺', pos: 'bottom-16 left-10', delay: '1.2s' },
  { emoji: '💳', pos: 'bottom-8 right-6', delay: '1.8s' },
];

export default function BillPayments() {
  return (
    <section id="bills" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >
          <div className="relative w-64 h-[480px] rounded-[2.25rem] border-8 border-black bg-white shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl z-10" />
            <Image
              src="/screenshots/bills.png"
              alt="Aldor app bill payments screen"
              fill
              className="object-cover object-top rounded-[1.7rem]"
            />
          </div>
          {icons.map((ic) => (
            <span
              key={ic.emoji}
              className={`absolute ${ic.pos} text-3xl animate-float`}
              style={{ animationDelay: ic.delay }}
            >
              {ic.emoji}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading font-700 text-3xl sm:text-4xl text-ink">
            Never miss a bill again.
          </h2>
          <p className="mt-4 text-gray max-w-md">
            Airtime, electricity, cable, and internet — pay them all from one place, in seconds.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
