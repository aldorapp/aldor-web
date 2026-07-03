import Link from 'next/link';
import Image from 'next/image';

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Partners',
    links: [
      { label: 'Businesses', href: '/businesses' },
      { label: 'Riders', href: '/riders' },
      { label: 'Suppliers', href: '/suppliers' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <Image src="/logo-on-light.png" alt="Aldor" width={120} height={36} className="h-8 w-auto" />
          <p className="mt-3 text-sm text-gray max-w-xs">
            Everything you need, delivered — across Nigeria.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-heading font-600 text-sm text-ink mb-4">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-gray hover:text-ink transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-12 pt-6 border-t border-black/5 text-xs text-gray">
        © {new Date().getFullYear()} Aldor. All rights reserved.
      </div>
    </footer>
  );
}
