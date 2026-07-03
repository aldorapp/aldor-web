import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import SignupForm from '@/components/SignupForm';
import RidersContent from './RidersContent';

export const metadata: Metadata = {
  title: 'Ride with Aldor',
  description:
    'Earn flexible income delivering with Aldor. Nearby orders, in-app navigation, real-time earnings, and weekly payouts.',
};

export default function RidersPage() {
  return (
    <main>
      <PageHero
        eyebrow="For Riders"
        title="Earn more. Ride smarter."
        subtitle="Set your own hours, get matched with nearby orders, and get paid every week — all from one app."
      />
      <RidersContent />
      <SignupForm
        title="Start riding with Aldor"
        subtitle="Fill in your details and we'll walk you through verification."
        submitLabel="Apply to ride"
        fields={[
          { name: 'full_name', label: 'Full name', placeholder: 'Full name' },
          { name: 'phone', label: 'Phone number', type: 'tel', placeholder: '080X XXX XXXX' },
          { name: 'city', label: 'City', placeholder: 'Lagos, Abuja, Port Harcourt...' },
          { name: 'vehicle', label: 'Vehicle type', placeholder: 'Motorcycle, bicycle, car...' },
        ]}
      />
    </main>
  );
}
