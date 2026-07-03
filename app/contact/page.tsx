import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact — Aldor',
  description: 'Get in touch with the Aldor team — support, partnerships, press, and more.',
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Let's talk."
        subtitle="Questions about an order, a partnership, or press inquiry — reach us directly below."
      />
      <ContactContent />
    </main>
  );
}
