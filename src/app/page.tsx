import { Navbar } from './home/components/navbar';
import { Footer } from './home/components/footer/index';
import { HeroSection } from './home/sections/hero/index';
import { InfoSection } from './home/sections/info/index';
import { WelcomeSection } from './home/sections/welcome/index';
import { AboutSection } from './home/sections/about/index';
import { VisionSection } from './home/sections/vision/index';
import { ServicesSection } from './home/sections/services/index';
import { DocumentationSection } from './home/sections/documentation/index';
import { TherapistsSection } from './home/sections/therapists/index';
import { StatisticsSection } from './home/sections/statistics/index';
import { ServicesDetailSection } from './home/sections/services-detail/index';
import { ReviewsSection } from './home/sections/reviews/index';
import { MeetTherapistsSection } from './home/sections/meet-therapists/index';
import { FaqSection } from './home/sections/faq/index';
import { BlogSection } from './home/sections/blog/index';
import { ContactSection } from './home/sections/contact/index';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <InfoSection />
      <WelcomeSection />
      <ServicesSection />
      <AboutSection />
      <VisionSection />
      <DocumentationSection />
      <TherapistsSection />
      <StatisticsSection />
      <ServicesDetailSection />
      <ReviewsSection />
      <MeetTherapistsSection />
      <FaqSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
