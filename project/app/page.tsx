import Hero from '@/components/sections/Hero';
import PartnersSection from '@/components/sections/PartnersSection';
import AboutMccedSection from '@/components/sections/AboutMccedSection';
import ServicesSection from '@/components/sections/ServicesSection';
import BannerSection from '@/components/sections/BannerSection';
import FAQSection from '@/components/sections/FAQSection';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <PartnersSection />
        <AboutMccedSection />
        <ServicesSection />
        <BannerSection
          imageUrl="/images/pexels-wolfgang-weiser-467045605-31016465.jpg"
          altText="MCCED Logistics Banner"
          textOverlay="Your Trusted Partner in Global Logistics"
        />
        <FAQSection />
      </main>
    </>
  );
}
