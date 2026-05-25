import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Pitch from '@/components/Pitch';
import HowItWorks from '@/components/HowItWorks';
import Compatibility from '@/components/Compatibility';
import Technology from '@/components/Technology';
import Pricing from '@/components/Pricing';
import Calculator from '@/components/Calculator';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Pitch />
        <HowItWorks />
        <Compatibility />
        <Technology />
        <Pricing />
        <Calculator />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
