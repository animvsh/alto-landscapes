
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
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
        title="YOUR GREATER LOS ANGELES BUILDERS"
        subtitle="Start your building journey with ALTO here"
        backgroundImage="/lovable-uploads/d3cf4ce7-3f97-4189-96aa-90b3c9bd790d.png"
        buttonText="START YOUR BUILD"
        showScrollIndicator={true}
        onScrollDown={() => scrollToSection('services-section')}
      />

      <section id="services-section" className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-alto-blue mb-4">Our Services</h2>
            <p className="text-xl text-alto-dark-gray max-w-3xl mx-auto">
              From kitchen remodels to new construction, we provide exceptional building services throughout Los Angeles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ServiceCard 
              title="Kitchen Remodeling" 
              description="Transform your kitchen with modern designs and premium materials."
              imageSrc="/lovable-uploads/17929c0c-4021-439b-9cf2-e0dedb676b79.png"
              link="/services/kitchen"
            />
            <ServiceCard 
              title="Bathroom Remodeling" 
              description="Create your perfect bathroom with our expert renovation services."
              imageSrc="/lovable-uploads/582129ba-ae8e-4b70-94ff-bd16281b02d0.png"
              link="/services/bathroom"
            />
            <ServiceCard 
              title="ADU Construction" 
              description="Add value to your property with a custom accessory dwelling unit."
              imageSrc="/lovable-uploads/d3cf4ce7-3f97-4189-96aa-90b3c9bd790d.png"
              link="/services/adu"
            />
          </div>
          
          <div className="flex justify-center mt-12">
            <Link to="/services" className="btn-primary">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-alto-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-alto-blue mb-4">Featured Projects</h2>
            <p className="text-xl text-alto-dark-gray max-w-3xl mx-auto">
              Explore our recent work across Los Angeles and Ventura County
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ProjectCard 
              title="Kitchen Project - West LA" 
              description="Modern white kitchen renovation with custom cabinetry"
              imageSrc="/lovable-uploads/710f9a5e-cc45-4a96-97ba-81f782a7d783.png"
              link="/projects/kitchen-west-la"
            />
            <ProjectCard 
              title="Kitchen Project - Pasadena" 
              description="Elegant wooden kitchen with premium finishes"
              imageSrc="/lovable-uploads/582129ba-ae8e-4b70-94ff-bd16281b02d0.png"
              link="/projects/kitchen-pasadena"
            />
            <ProjectCard 
              title="ADU Project - Agoura Hills" 
              description="Modern 800 sq ft accessory dwelling unit"
              imageSrc="/lovable-uploads/d3cf4ce7-3f97-4189-96aa-90b3c9bd790d.png"
              link="/projects"
            />
          </div>
          
          <div className="flex justify-center mt-12">
            <Link to="/projects" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      
      <AboutSection />
      
      <ServiceAreaSection />

      <TestimonialsSection />

      <CallToActionSection 
        title="Ready to Start Your Project?"
        subtitle="Schedule a free consultation with our team to discuss your project"
        buttonText="Get Your Free Site Assessment"
        buttonLink="/contact"
      />

      <Footer />
    </>
  );
};

export default Index;
