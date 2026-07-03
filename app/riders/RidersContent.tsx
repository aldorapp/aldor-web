'use client';

import { motion } from 'framer-motion';
import { MapPinned, Navigation, Wallet, CalendarClock, Check } from 'lucide-react';

const cards = [
  { icon: MapPinned, title: 'Nearby Orders', desc: 'Get matched with deliveries close to you, so you spend less time driving to a pickup.' },
  { icon: Navigation, title: 'In-app Navigation', desc: 'Turn-by-turn routes built for riders, not just drivers.' },
  { icon: Wallet, title: 'Real-time Earnings', desc: 'Watch your balance grow after every completed trip.' },
  { icon: CalendarClock, title: 'Weekly Payouts', desc: 'Reliable payments straight to your bank account, every week.' },
];

const requirements = [
  'Valid means of identification (NIN, driver\u2019s license, or voter\u2019s card)',
  'A working smartphone with data',
  'Motorcycle, bicycle, or car (depending on your city)',
  'Must be 18 years or older',
];

export default function RidersContent() {
  return (
    <>
      <section className="bg-yellow/10 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading font-700 text-3xl sm:text-4xl text-ink mb-6">
              What you&apos;ll need.
            </h2>
            <ul className="space-y-4">
              {requirements.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <span className="mt-0.5 h-6 w-6 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check size={14} className="text-primary" />
                  </span>
                  <span className="text-ink/80 text-sm">{r}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-xl2 bg-cream p-8"
          >
            <h3 className="font-heading font-600 text-lg text-ink mb-6">A typical week</h3>
            <div className="space-y-3">
              {[
                { day: 'Mon–Fri', trips: '6–8 trips/day', amount: '₦4,500/day avg' },
                { day: 'Weekend', trips: '10–14 trips/day', amount: '₦7,200/day avg' },
              ].map((row) => (
                <div key={row.day} className="flex items-center justify-between rounded-xl bg-white px-5 py-4">
                  <div>
                    <div className="font-heading font-600 text-ink text-sm">{row.day}</div>
                    <div className="text-xs text-gray">{row.trips}</div>
                  </div>
                  <div className="font-heading font-700 text-primary">{row.amount}</div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-gray">
              Figures are estimates based on active riders in Lagos; actual earnings vary by city and hours worked.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
