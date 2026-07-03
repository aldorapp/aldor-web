import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About — Aldor',
  description:
    'Aldor is building the delivery infrastructure for Nigeria — connecting businesses, riders, and customers in one platform.',
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Aldor"
        title="Built for how Nigeria actually moves."
        subtitle="We started Aldor to fix a simple problem: getting what you need, when you need it, shouldn't be complicated. So we built the infrastructure ourselves."
      />
      <AboutContent />
    </main>
  );
}
