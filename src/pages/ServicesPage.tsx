import CTA from '../components/CTA';
import FAQ from '../components/FAQ';
import ServiceDetails from '../components/ServiceDetails';
import ServicesHero from '../components/ServicesHero';

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceDetails />
      <FAQ />
      <CTA />
    </>
  );
}
