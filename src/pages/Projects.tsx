
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CallToActionSection from '../components/CallToActionSection';
import ProjectsSection from '../components/projects/ProjectsSection';
import ProjectsApproach from '../components/projects/ProjectsApproach';
import FeaturedPlansSection from '../components/design/FeaturedPlansSection';
import { featuredFloorPlans } from '../data/floorPlansData';

const Projects = () => {
  // Filter just the studio plans
  const studioPlans = featuredFloorPlans.filter(plan => 
    plan.specs.toLowerCase().includes('studio')
  ).slice(0, 3);

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

      {/* Add Featured Studio Plans */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Studio Floor Plans</h2>
            <p className="section-subtitle mx-auto">
              Discover our popular studio ADU floor plans, perfect for maximizing space and functionality
            </p>
          </div>
          
          <FeaturedPlansSection plans={studioPlans} count={3} />
        </div>
      </section>

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
