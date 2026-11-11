import React from 'react';
import Navbar from '@/components/Navbar';
import BackgroundEffects from '@/components/BackgroundEffects';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Services />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
