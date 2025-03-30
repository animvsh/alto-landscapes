
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
        title="OUR PROJECTS"
        subtitle="Explore our portfolio of premium ADUs across Greater Los Angeles"
        backgroundImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80"
      />

      <ProjectsSection />
      <ProjectsApproach />

      <CallToActionSection 
        title="Inspired By Our Projects?"
        subtitle="Let's discuss how we can create a custom ADU for your property"
        buttonText="Start Your Project"
        buttonLink="/contact"
      />

      <Footer />
    </>
  );
};

export default Projects;
