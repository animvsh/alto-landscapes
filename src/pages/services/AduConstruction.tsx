
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import CallToActionSection from '../../components/CallToActionSection';
import { CheckCircle } from '../../components/CheckCircle';
import { Building2, Ruler, FileText, HardHat, Users, Clock } from 'lucide-react';
import ServiceCard from '../../components/ServiceCard';

const AduConstruction = () => {
  const aduServices = [
    {
      title: "Initial Consultation",
      description: "Comprehensive site assessment and project planning tailored to your property.",
      icon: <Users />,
      link: "/contact",
    },
    {
      title: "Custom Design",
      description: "Personalized architectural designs that maximize your space and match your vision.",
      icon: <Ruler />,
      link: "/design",
    },
    {
      title: "Permitting",
      description: "Expert navigation of local ADU regulations and streamlined permit acquisition.",
      icon: <FileText />,
      link: "/contact",
    },
    {
      title: "Construction",
      description: "Quality craftsmanship and meticulous attention to detail in building your ADU.",
      icon: <HardHat />,
      link: "/contact",
    },
    {
      title: "Project Management",
      description: "Dedicated oversight ensuring your project stays on schedule and within budget.",
      icon: <Clock />,
      link: "/contact",
    },
    {
      title: "Multi-Unit ADUs",
      description: "Specialized expertise in building multiple ADUs on single properties.",
      icon: <Building2 />,
      link: "/contact",
    },
  ];

  return (
    <>
      <Navbar />
      <HeroSection 
        title="ADU CONSTRUCTION"
        subtitle="Specialized accessory dwelling unit construction from concept to completion"
        backgroundImage="https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">ADU Construction Experts</h2>
            <p className="section-subtitle mx-auto">
              Alto Builders specializes in building high-quality ADUs customized to your needs and property
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h3 className="text-2xl font-semibold text-alto-blue mb-4">What is an ADU?</h3>
              <p className="text-alto-dark-gray mb-6">
                An Accessory Dwelling Unit (ADU) is a secondary housing unit built on a residential property. 
                These versatile structures can be attached to the main house, converted from existing spaces 
                like garages, or built as standalone units.
              </p>
              <p className="text-alto-dark-gray mb-6">
                ADUs provide homeowners with flexible living solutions, whether for housing family members, 
                generating rental income, or creating guest accommodations. With recent legislation making 
                ADUs easier to build in California, they've become an increasingly popular option for 
                homeowners looking to maximize their property value and usage.
              </p>
              
              <h4 className="font-semibold text-alto-blue mb-2">Why choose Alto Builders for your ADU?</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="text-alto-accent mr-3 mt-1">
                    <CheckCircle size={18} />
                  </div>
                  <p className="text-alto-dark-gray">ADU-specific expertise and specialized construction experience</p>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-3 mt-1">
                    <CheckCircle size={18} />
                  </div>
                  <p className="text-alto-dark-gray">In-depth knowledge of local ADU regulations and permitting processes</p>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-3 mt-1">
                    <CheckCircle size={18} />
                  </div>
                  <p className="text-alto-dark-gray">Transparent pricing and detailed project timelines</p>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80" 
                alt="Modern ADU exterior" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {aduServices.map((service, index) => (
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
            <h2 className="section-title">Our ADU Construction Process</h2>
            <p className="section-subtitle mx-auto">
              A streamlined approach to bringing your ADU vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 flex items-center justify-center bg-alto-accent text-white rounded-full mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold text-alto-blue mb-3">Design & Planning</h3>
              <p className="text-alto-dark-gray">
                We begin with a thorough site assessment and consultation to understand your needs. 
                Our design team then creates custom plans for your ADU, considering your property's 
                unique features and local regulations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 flex items-center justify-center bg-alto-accent text-white rounded-full mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold text-alto-blue mb-3">Permits & Approvals</h3>
              <p className="text-alto-dark-gray">
                We handle the entire permitting process, navigating the complex regulations that apply 
                to ADUs in your specific area. Our expertise ensures a smooth approval process with 
                minimal delays.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 flex items-center justify-center bg-alto-accent text-white rounded-full mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold text-alto-blue mb-3">Construction & Completion</h3>
              <p className="text-alto-dark-gray">
                Our skilled construction team builds your ADU with quality materials and craftsmanship. 
                We provide regular updates throughout the process and conduct thorough quality checks 
                before the final walkthrough and handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToActionSection 
        title="Ready to Start Your ADU Project?"
        subtitle="Contact us today to schedule your free consultation"
        buttonText="Get Started"
        buttonLink="/contact"
      />

      <Footer />
    </>
  );
};

export default AduConstruction;
