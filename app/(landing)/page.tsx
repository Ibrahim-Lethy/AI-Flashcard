import Footer from '@/components/footer-sec';
import Hero from '@/components/hero-component';
import Testimonials from '@/components/testimonials';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Footer />
    </>
  );
}