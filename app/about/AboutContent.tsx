'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '3', label: 'Cities live' },
  { value: '12k+', label: 'Orders delivered monthly' },
  { value: '2,400+', label: 'Riders on the road' },
  { value: '850+', label: 'Partner businesses' },
];

const values = [
  {
    title: 'Speed is respect',
    desc: 'Every minute someone waits is a minute of their day. We build for fast, not eventually.',
  },
  {
    title: 'Reliability compounds',
    desc: 'Trust is built one on-time delivery at a time. We don\u2019t cut corners to hit numbers.',
  },
  {
    title: 'Local first',
    desc: 'We design around how Nigerians actually shop, pay, and move — not a copy-pasted playbook.',
  },
];

export default function AboutContent() {
  return (
    <>
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-ink/75 leading-relaxed"
          >
            Aldor launched with a single delivery route in Lagos and a conviction that
            on-demand logistics in Nigeria deserved better software, not just more riders.
            Today, the same platform connects restaurants, supermarkets, pharmacies, farms,
            and fuel suppliers to the people who need them — tracked in real time, paid for
            in Naira, built for Nigerian streets.
          </motion.p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="font-heading font-700 text-3xl sm:text-4xl text-primary">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-gray">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <h2 className="font-heading font-700 text-3xl sm:text-4xl text-ink text-center mb-14">
            What we build around.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl2 bg-cream p-8"
              >
                <h3 className="font-heading font-600 text-lg text-ink mb-2">{v.title}</h3>
                <p className="text-sm text-gray leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <h2 className="font-heading font-700 text-2xl sm:text-3xl text-cream mb-6">
            Want to build this with us?
          </h2>
          <a
            href="/contact"
            className="btn-ripple inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-cream hover:brightness-110 transition"
          >
            Get in touch
          </a>
        </div>
      </section>
    </>
  );
}
