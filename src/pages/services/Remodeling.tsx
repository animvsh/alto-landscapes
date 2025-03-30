
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import CallToActionSection from '../../components/CallToActionSection';
import { CheckCircle } from '../../components/CheckCircle';
import { Home, Paintbrush, Kitchen, Bath, Sofa, Hammer } from 'lucide-react';
import ServiceCard from '../../components/ServiceCard';

const Remodeling = () => {
  const remodelingServices = [
    {
      title: "Kitchen Remodeling",
      description: "Transform your kitchen with modern designs, quality materials, and expert craftsmanship.",
      icon: <Kitchen />,
      link: "/contact",
    },
    {
      title: "Bathroom Renovation",
      description: "Update your bathrooms with stylish fixtures, efficient layouts, and premium finishes.",
      icon: <Bath />,
      link: "/contact",
    },
    {
      title: "Interior Remodeling",
      description: "Revitalize your living spaces with comprehensive interior updates and renovations.",
      icon: <Sofa />,
      link: "/contact",
    },
    {
      title: "Home Additions",
      description: "Expand your living space with seamlessly integrated room additions and extensions.",
      icon: <Home />,
      link: "/contact",
    },
    {
      title: "Custom Finishes",
      description: "Elevate your home with custom cabinetry, built-ins, and architectural details.",
      icon: <Paintbrush />,
      link: "/contact",
    },
    {
      title: "Structural Upgrades",
      description: "Strengthen and modernize your home with essential structural improvements.",
      icon: <Hammer />,
      link: "/contact",
    },
  ];

  return (
    <>
      <Navbar />
      <HeroSection 
        title="HOME REMODELING"
        subtitle="Transforming living spaces with expert craftsmanship and modern designs"
        backgroundImage="https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Expert Home Remodeling</h2>
            <p className="section-subtitle mx-auto">
              Alto Builders brings decades of experience to every remodeling project, large or small
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80" 
                alt="Modern kitchen remodel" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
              <h3 className="text-2xl font-semibold text-alto-blue mb-4">Quality Remodeling Services</h3>
              <p className="text-alto-dark-gray mb-6">
                Whether you're looking to update a single room or transform your entire home, Alto Builders 
                provides comprehensive remodeling services tailored to your vision, timeline, and budget. 
                Our team combines skilled craftsmanship with design expertise to create beautiful, 
                functional spaces that enhance your lifestyle.
              </p>
              <p className="text-alto-dark-gray mb-6">
                We handle every aspect of your remodeling project, from initial design and material 
                selection to permitting, construction, and final finishing touches. Our process emphasizes 
                clear communication, quality workmanship, and attention to detail at every stage.
              </p>
              
              <h4 className="font-semibold text-alto-blue mb-2">Why choose Alto Builders for your remodel?</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="text-alto-accent mr-3 mt-1">
                    <CheckCircle size={18} />
                  </div>
                  <p className="text-alto-dark-gray">Experienced craftsmen with skills across all trades</p>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-3 mt-1">
                    <CheckCircle size={18} />
                  </div>
                  <p className="text-alto-dark-gray">Transparent pricing and detailed project timelines</p>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-3 mt-1">
                    <CheckCircle size={18} />
                  </div>
                  <p className="text-alto-dark-gray">Responsive communication and exceptional project management</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {remodelingServices.map((service, index) => (
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
            <h2 className="section-title">Our Remodeling Process</h2>
            <p className="section-subtitle mx-auto">
              A thoughtful approach that puts your vision and convenience first
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-10 h-10 flex items-center justify-center bg-alto-accent text-white rounded-full mb-4 text-lg font-bold">1</div>
              <h3 className="text-lg font-semibold text-alto-blue mb-3">Consultation</h3>
              <p className="text-alto-dark-gray text-sm">
                We discuss your vision, needs, and budget to create a preliminary project plan.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-10 h-10 flex items-center justify-center bg-alto-accent text-white rounded-full mb-4 text-lg font-bold">2</div>
              <h3 className="text-lg font-semibold text-alto-blue mb-3">Design</h3>
              <p className="text-alto-dark-gray text-sm">
                Our design team creates detailed plans and material selections for your approval.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-10 h-10 flex items-center justify-center bg-alto-accent text-white rounded-full mb-4 text-lg font-bold">3</div>
              <h3 className="text-lg font-semibold text-alto-blue mb-3">Construction</h3>
              <p className="text-alto-dark-gray text-sm">
                Our skilled team executes the plans with precision, keeping you informed throughout.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-10 h-10 flex items-center justify-center bg-alto-accent text-white rounded-full mb-4 text-lg font-bold">4</div>
              <h3 className="text-lg font-semibold text-alto-blue mb-3">Completion</h3>
              <p className="text-alto-dark-gray text-sm">
                We conduct thorough inspections and ensure your complete satisfaction before final handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToActionSection 
        title="Ready to Transform Your Home?"
        subtitle="Contact us today to schedule your free consultation"
        buttonText="Get Started"
        buttonLink="/contact"
      />

      <Footer />
    </>
  );
};

export default Remodeling;
