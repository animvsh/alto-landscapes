
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CallToActionSection from '../components/CallToActionSection';
import ProjectsSection from '../components/projects/ProjectsSection';
import ProjectsApproach from '../components/projects/ProjectsApproach';
import PageTransition from '../components/PageTransition';
import BathroomProjectsSection from '../components/projects/BathroomProjectsSection';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <Navbar />
      <HeroSection 
        title="OUR PROJECTS"
        subtitle="Browse our portfolio of custom builds and remodels"
        backgroundImage="https://images.unsplash.com/photo-1523413363574-c30aa5c2d394?auto=format&fit=crop&w=1920&q=80"
      />

      <ProjectsSection />
      <BathroomProjectsSection />
      <ProjectsApproach />

      <CallToActionSection 
        title="Ready to Start Your Project?"
        subtitle="Contact us today to schedule your free consultation"
        buttonText="Get Started"
        buttonLink="/contact"
      />

      <Footer />
    </PageTransition>
  );
};

export default Projects;
