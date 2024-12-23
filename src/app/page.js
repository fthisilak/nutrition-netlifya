// src/app/page.js
import HeroSection from '@/components/sections/hero/HeroSection';
import AboutSection from '@/components/sections/about/AboutSection';
import ServicesSection from '@/components/sections/services/ServicesSection';
import FaqSection from '@/components/sections/faq/FaqSection';
export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </div>
  );
}