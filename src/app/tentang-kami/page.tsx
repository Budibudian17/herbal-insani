import { Navbar } from '@/app/home/components/navbar';
import { Footer } from './components/footer';
import { HeroSection } from './components/hero';
import { IntroSection } from './components/intro';
import { VisionSection } from './components/vision';
import { StatisticsSection } from './components/statistics';
import { VideoSection } from './components/video';
import { InfoSection } from './components/info';
import { DoctorsSection } from './components/doctors';

export default function TentangKamiPage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <IntroSection />
      <VisionSection />
      <StatisticsSection />
      <VideoSection />
      <InfoSection />
      <DoctorsSection />
      <Footer />
    </main>
  );
}
