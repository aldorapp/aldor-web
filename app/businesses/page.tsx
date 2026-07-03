import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import SignupForm from '@/components/SignupForm';
import BusinessesContent from './BusinessesContent';

export const metadata: Metadata = {
  title: 'For Businesses — Aldor',
  description:
    'Reach more customers, manage online orders, and grow your delivery volume with the Aldor business dashboard.',
};

export default function BusinessesPage() {
  return (
    <main>
      <PageHero
        eyebrow="For Businesses"
        title="Grow your business with Aldor."
        subtitle="Restaurants, supermarkets, pharmacies, and stores use Aldor to reach more customers and manage every order from one dashboard."
      />
      <BusinessesContent />
      <SignupForm
        title="Partner with Aldor"
        subtitle="Tell us about your business and our onboarding team will reach out."
        submitLabel="Submit application"
        fields={[
          { name: 'business_name', label: 'Business name', placeholder: 'e.g. Mama Put Kitchen' },
          { name: 'contact_name', label: 'Your name', placeholder: 'Full name' },
          { name: 'phone', label: 'Phone number', type: 'tel', placeholder: '080X XXX XXXX' },
          { name: 'city', label: 'City', placeholder: 'Lagos, Abuja, Port Harcourt...' },
        ]}
      />
    </main>
  );
}
