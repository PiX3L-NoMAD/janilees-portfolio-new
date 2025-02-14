'use client';

import WavyDivider from './ui/WavyDivider';
import RoundedDivider from './ui/RoundedDivider';
import HeroSection from './HeroSection';
import About from './About';
import Projects from './Projects';
import TechStack from './TechStack';
import GlowDivider from './ui/GlowDivider';
import Footer from './Footer';
import Blog from './Blog';

export default function Home() {
  return (
    <div className='bg-gray-900 text-white min-h-screen pt-5'>
      <HeroSection />

      <WavyDivider />

      <About />

      <RoundedDivider />

      <Projects />

      <WavyDivider />

      <TechStack />

      <WavyDivider />

      <Blog />

      <GlowDivider />

      <Footer />
    </div>
  );
}
