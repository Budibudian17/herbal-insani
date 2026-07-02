import { Navbar } from '@/app/home/components/navbar';
import { Footer } from '@/app/home/components/footer';
import { HeroSection } from './components/hero';
import { RegistrationForm } from './components/registration-form';

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <RegistrationForm />
      <Footer />
    </main>
  );
}
