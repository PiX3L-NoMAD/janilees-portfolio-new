'use client';

import WavyDivider from './ui/WavyDivider';
import RoundedDivider from './ui/RoundedDivider';
import HeroSection from './HeroSection';
import About from './About';
import Projects from './Projects';
import TechStack from './TechStack';
import GlowDivider from './ui/GlowDivider';
import Footer from './Footer';
// import Blog from './Blog';

export default function Home() {
  return (
    <div className='bg-gray-900 text-white min-h-screen pt-7 flex flex-col md:flex-row'>
      <HeroSection />
      <div className='flex-1 md:ml-72'>
        <div className='md:hidden'>
          <WavyDivider />
        </div>

        <About />

        <RoundedDivider />

        <Projects />

        <WavyDivider />

        <TechStack />

        <WavyDivider />

        {/* <Blog /> */}

        <GlowDivider />

        <Footer />
      </div>
    </div>
  );
}
