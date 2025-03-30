
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import CallToActionSection from '../../components/CallToActionSection';
import { CheckCircle } from '../../components/CheckCircle';
import { Ruler, PenTool, Lightbulb, Home, Palette, Layers } from 'lucide-react';
import ServiceCard from '../../components/ServiceCard';

const DesignServices = () => {
  const designServices = [
    {
      title: "Custom ADU Design",
      description: "Personalized architectural design services tailored to your property and vision.",
      icon: <Home />,
      link: "/contact",
    },
    {
      title: "Space Planning",
      description: "Optimize your layout for maximum functionality and comfort in limited square footage.",
      icon: <Ruler />,
      link: "/contact",
    },
    {
      title: "3D Visualization",
      description: "Realistic renderings to help you visualize your project before construction begins.",
      icon: <Layers />,
      link: "/contact",
    },
    {
      title: "Interior Design",
      description: "Comprehensive interior solutions that maximize both beauty and functionality.",
      icon: <Palette />,
      link: "/contact",
    },
    {
      title: "Concept Development",
      description: "Innovative design concepts that bring your vision to life.",
      icon: <Lightbulb />,
      link: "/contact",
    },
    {
      title: "Construction Drawings",
      description: "Detailed technical drawings ready for permitting and construction.",
      icon: <PenTool />,
      link: "/contact",
    },
  ];

  return (
    <>
      <Navbar />
      <HeroSection 
        title="DESIGN SERVICES"
        subtitle="Bring your vision to life with expert architectural and interior design"
        backgroundImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Expert Design Solutions</h2>
            <p className="section-subtitle mx-auto">
              Alto Builders combines creativity and technical expertise to deliver stunning, functional designs
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80" 
                alt="Architectural design process" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
              <h3 className="text-2xl font-semibold text-alto-blue mb-4">Thoughtful Design Process</h3>
              <p className="text-alto-dark-gray mb-6">
                Our design team combines creativity with technical expertise to create spaces that are both 
                beautiful and practical. We understand that good design goes beyond aesthetics—it's about 
                creating spaces that truly enhance how you live.
              </p>
              <p className="text-alto-dark-gray mb-6">
                Whether you're looking to design a new ADU, remodel your current space, or simply need 
                architectural guidance, our design services offer a comprehensive solution tailored to 
                your unique needs and property constraints.
              </p>
              
              <h4 className="font-semibold text-alto-blue mb-2">Our design approach includes:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="text-alto-accent mr-3 mt-1">
                    <CheckCircle size={18} />
                  </div>
                  <p className="text-alto-dark-gray">In-depth client consultations to understand your vision and needs</p>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-3 mt-1">
                    <CheckCircle size={18} />
                  </div>
                  <p className="text-alto-dark-gray">Comprehensive site analysis to maximize your property's potential</p>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-3 mt-1">
                    <CheckCircle size={18} />
                  </div>
                  <p className="text-alto-dark-gray">Consideration of local building codes and regulations from the start</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {designServices.map((service, index) => (
              <ServiceCard 
                key={index} 
                title={service.title} 
                description={service.description} 
                icon={service.icon} 
                link={service.link} 
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-alto-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Design Process</h2>
            <p className="section-subtitle mx-auto">
              A collaborative approach that brings your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 flex items-center justify-center bg-alto-accent text-white rounded-full mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold text-alto-blue mb-3">Discovery</h3>
              <p className="text-alto-dark-gray">
                We begin with a thorough consultation to understand your needs, preferences, and vision. 
                Our team conducts a comprehensive site assessment to identify opportunities and constraints.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 flex items-center justify-center bg-alto-accent text-white rounded-full mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold text-alto-blue mb-3">Concept Development</h3>
              <p className="text-alto-dark-gray">
                Based on your input and our analysis, we create preliminary designs and space plans. 
                We present these concepts with clear visuals to help you see the possibilities.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 flex items-center justify-center bg-alto-accent text-white rounded-full mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold text-alto-blue mb-3">Design Refinement</h3>
              <p className="text-alto-dark-gray">
                We refine the selected concept based on your feedback, developing detailed plans, 
                elevations, and 3D visualizations. This phase includes material selections and finishes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToActionSection 
        title="Ready to Start Your Design Journey?"
        subtitle="Contact us today to schedule your free design consultation"
        buttonText="Get Started"
        buttonLink="/contact"
      />

      <Footer />
    </>
  );
};

export default DesignServices;
