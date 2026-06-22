import { Navbar } from '@/app/home/components/navbar';
import { Footer } from '@/app/home/components/footer';
import { HeroSection } from './components/hero';
import { ServicesSection } from './components/services';
import { ServiceDetailsSection } from './components/service-details';
import { WhyChooseUsSection } from './components/why-choose-us';
import { HowItWorksSection } from './components/how-it-works';
import { TestimonialsSection } from './components/testimonials';
import { CTASection } from './components/cta';
import { FAQSection } from './components/faq';

export default function LayananPage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ServiceDetailsSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </main>
  );
}
