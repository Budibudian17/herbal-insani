import { Navbar } from '@/app/home/components/navbar';
import { Footer } from '@/app/home/components/footer';
import { HeroSection } from './components/hero';
import { BranchesSection } from './components/branches';

export default function LayananPage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <BranchesSection />
      <Footer />
    </main>
  );
}
