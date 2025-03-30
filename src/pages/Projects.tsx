
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CallToActionSection from '../components/CallToActionSection';
import ProjectsSection from '../components/projects/ProjectsSection';
import ProjectsApproach from '../components/projects/ProjectsApproach';

const Projects = () => {
  return (
    <>
      <Navbar />
      <HeroSection 
        title="ADU PROJECT - WEISS FAMILY"
        subtitle="Explore our featured ADU project showcasing quality craftsmanship"
        backgroundImage="/lovable-uploads/d3cf4ce7-3f97-4189-96aa-90b3c9bd790d.png"
      />

      <ProjectsSection />
      <ProjectsApproach />

      <CallToActionSection 
        title="Want to learn more about your ADU Project?"
        subtitle="We'd love to help transform your property with a custom ADU solution"
        buttonText="Learn More"
        buttonLink="/contact"
      />

      <Footer />
    </>
  );
};

export default Projects;
