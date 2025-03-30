
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CallToActionSection from '../components/CallToActionSection';
import ProjectsSection from '../components/projects/ProjectsSection';
import ProjectsApproach from '../components/projects/ProjectsApproach';
import FeaturedPlansSection from '../components/design/FeaturedPlansSection';
import { studioPlans, oneBedroomPlans, twoBedroomPlans } from '../data/plans';

const Projects = () => {
  // Filter plans (using first 3 of each type - they're already segregated)
  const studioPlansSubset = studioPlans.slice(0, 3);
  const oneBedroomPlansSubset = oneBedroomPlans.slice(0, 3);
  const twoBedroomPlansSubset = twoBedroomPlans.slice(0, 3);

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

      {/* Studio Plans */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Studio Floor Plans</h2>
            <p className="section-subtitle mx-auto">
              Discover our popular studio ADU floor plans, perfect for maximizing space and functionality
            </p>
          </div>
          
          <FeaturedPlansSection plans={studioPlansSubset} count={3} />
        </div>
      </section>
      
      {/* One Bedroom Plans */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our One Bedroom Plans</h2>
            <p className="section-subtitle mx-auto">
              Explore our collection of one-bedroom ADUs offering the perfect balance of space and comfort
            </p>
          </div>
          
          <FeaturedPlansSection plans={oneBedroomPlansSubset} count={3} />
        </div>
      </section>
      
      {/* Two Bedroom Plans */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Two Bedroom Plans</h2>
            <p className="section-subtitle mx-auto">
              Discover our spacious two-bedroom ADU options, perfect for families or maximizing rental income
            </p>
          </div>
          
          <FeaturedPlansSection plans={twoBedroomPlansSubset} count={3} />
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
