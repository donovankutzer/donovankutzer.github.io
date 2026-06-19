import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Pitch from '@/components/Pitch';
import HowItWorks from '@/components/HowItWorks';
import Technology from '@/components/Technology';
import Pricing from '@/components/Pricing';
import Calculator from '@/components/Calculator';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Platform from '@/components/Platform';

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '72px' }}>
        <Hero />
        <Platform />
        <Stats />
        <Pitch />
        <HowItWorks />
        <Technology />
        <Pricing />
        <Calculator />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

