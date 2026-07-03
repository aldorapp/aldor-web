import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import SignupForm from '@/components/SignupForm';
import SuppliersContent from './SuppliersContent';

export const metadata: Metadata = {
  title: 'Suppliers — Aldor',
  description:
    'Farm, diesel, and wholesale suppliers reach more buyers through the Aldor delivery network.',
};

export default function SuppliersPage() {
  return (
    <main>
      <PageHero
        eyebrow="For Suppliers"
        title="From source to storefront."
        subtitle="Farms, diesel suppliers, and wholesalers use Aldor to move goods to businesses and homes — without building their own delivery network."
      />
      <SuppliersContent />
      <SignupForm
        title="Become a supplier"
        subtitle="Tell us what you supply and where, and we'll take it from there."
        submitLabel="Submit details"
        fields={[
          { name: 'company_name', label: 'Company / farm name', placeholder: 'e.g. Ile-Ife Farms' },
          { name: 'category', label: 'What do you supply?', placeholder: 'Farm produce, diesel, wholesale goods...' },
          { name: 'phone', label: 'Phone number', type: 'tel', placeholder: '080X XXX XXXX' },
          { name: 'location', label: 'Location', placeholder: 'City / state' },
        ]}
      />
    </main>
  );
}
