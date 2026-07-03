'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const products = [
  { label: 'Food', href: '/#categories' },
  { label: 'Groceries', href: '/#categories' },
  { label: 'Pharmacy', href: '/#categories' },
  { label: 'Bill Payments', href: '/#bills' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkColor = scrolled ? 'text-ink' : 'text-cream';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src={scrolled ? '/logo-on-light.png' : '/logo-on-dark.png'}
            alt="Aldor"
            width={120}
            height={36}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-9">
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className={`flex items-center gap-1 font-medium text-sm ${linkColor}`}>
              Products <ChevronDown size={16} />
            </button>
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-8 left-1/2 -translate-x-1/2 w-56 bg-white rounded-xl2 shadow-xl p-2"
                >
                  {products.map((p) => (
                    <a
                      key={p.label}
                      href={p.href}
                      className="block px-4 py-2.5 rounded-lg text-sm text-ink hover:bg-cream transition-colors"
                    >
                      {p.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/businesses" className={`text-sm font-medium ${linkColor}`}>
            Businesses
          </Link>
          <Link href="/riders" className={`text-sm font-medium ${linkColor}`}>
            Riders
          </Link>
          <Link href="/about" className={`text-sm font-medium ${linkColor}`}>
            About
          </Link>
          <Link href="/contact" className={`text-sm font-medium ${linkColor}`}>
            Contact
          </Link>
        </div>

        <div className="hidden lg:block">
          <a
            href="#download"
            className="btn-ripple inline-flex items-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-cream hover:brightness-110 transition"
          >
            Download App
          </a>
        </div>

        <button
          className={`lg:hidden ${linkColor}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-cream border-t border-black/5 overflow-hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {['Businesses', 'Riders', 'About', 'Contact'].map((label) => (
                <Link
                  key={label}
                  href={`/${label.toLowerCase()}`}
                  className="py-2.5 text-ink font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <a
                href="#download"
                className="mt-2 text-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-cream"
              >
                Download App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
