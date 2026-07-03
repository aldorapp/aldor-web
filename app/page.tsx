import Hero from '@/components/Hero';
import TrustedBusinesses from '@/components/TrustedBusinesses';
import Categories from '@/components/Categories';
import WhyAldor from '@/components/WhyAldor';
import Experience from '@/components/Experience';
import BusinessSection from '@/components/BusinessSection';
import RiderSection from '@/components/RiderSection';
import Suppliers from '@/components/Suppliers';
import BillPayments from '@/components/BillPayments';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Download from '@/components/Download';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustedBusinesses />
      <Categories />
      <WhyAldor />
      <Experience />
      <BusinessSection />
      <RiderSection />
      <Suppliers />
      <BillPayments />
      <Testimonials />
      <FAQ />
      <Download />
    </main>
  );
}
