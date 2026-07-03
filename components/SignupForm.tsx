'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function SignupForm({
  title,
  subtitle,
  fields,
  submitLabel,
}: {
  title: string;
  subtitle: string;
  fields: { name: string; label: string; type?: string; placeholder?: string }[];
  submitLabel: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Wire this up to /api/leads (or a CRM webhook) when the backend is ready.
    setSubmitted(true);
  }

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-xl px-6 lg:px-10">
        <div className="text-center mb-10">
          <h2 className="font-heading font-700 text-3xl sm:text-4xl text-ink mb-3">{title}</h2>
          <p className="text-gray">{subtitle}</p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl2 bg-cream p-10 text-center"
          >
            <CheckCircle2 className="mx-auto text-primary mb-4" size={36} />
            <h3 className="font-heading font-600 text-xl text-ink mb-2">You&apos;re in.</h3>
            <p className="text-sm text-gray">
              Our team will reach out within 24–48 hours to get you set up.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {fields.map((f) => (
              <div key={f.name}>
                <label htmlFor={f.name} className="block text-sm font-medium text-ink mb-1.5">
                  {f.label}
                </label>
                <input
                  id={f.name}
                  name={f.name}
                  type={f.type ?? 'text'}
                  placeholder={f.placeholder}
                  required
                  className="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm text-ink placeholder:text-gray/60 focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
            ))}
            <button
              type="submit"
              className="btn-ripple w-full rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-cream hover:brightness-110 transition"
            >
              {submitLabel}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
