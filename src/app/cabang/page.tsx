import { Navbar } from '@/app/home/components/navbar';
import { HeroSection } from './components/hero';
import { BranchesSection } from './components/branches';
import { Footer } from '@/app/home/components/footer';

export default function CabangPage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <BranchesSection />
      <Footer />
    </main>
  );
}
