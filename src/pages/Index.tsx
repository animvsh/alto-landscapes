
import { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import CallToActionSection from '../components/CallToActionSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import FloorPlansSection from '../components/sections/FloorPlansSection';
import ExploreSection from '../components/sections/ExploreSection';
import IntroSection from '../components/sections/IntroSection';
import AduBenefitsSection from '../components/sections/AduBenefitsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import AboutSection from '../components/sections/AboutSection';
import ServiceAreaSection from '../components/sections/ServiceAreaSection';

const Index = () => {
  // Animation states
  const [scrollY, setScrollY] = useState(0);
  
  // Handler for smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <ScrollProgress />
      <Navbar />
      
      <HeroSection 
        title="YOUR GREATER LOS ANGELES ADU BUILDERS"
        subtitle="Start your building journey with ALTO here"
        backgroundImage="/lovable-uploads/d3cf4ce7-3f97-4189-96aa-90b3c9bd790d.png"
        buttonText="START YOUR BUILD"
        showScrollIndicator={true}
        onScrollDown={() => scrollToSection('explore-section')}
      />

      <ExploreSection />
      
      <FloorPlansSection />
      
      <IntroSection />

      <AduBenefitsSection />
      
      <ServiceAreaSection />

      <TestimonialsSection />

      <AboutSection />

      <CallToActionSection 
        title="Ready to Start Your ADU Journey?"
        subtitle="Schedule a free consultation with our team to discuss your project"
        buttonText="Get Your Free Site Assessment"
        buttonLink="/contact"
      />

      <Footer />
    </>
  );
};

export default Index;
