
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import CallToActionSection from '../../components/CallToActionSection';
import { CheckCircle } from '../../components/CheckCircle';
import { Building2, Ruler, FileText, HardHat, Users, Clock, Banknote, CreditCard, ConstructionIcon, Leaf } from 'lucide-react';
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

  const aduTypes = [
    {
      type: "Detached ADU",
      description: "Standalone structures built separately from the main house, offering maximum privacy and independence.",
      features: ["Complete separation from main dwelling", "Maximum privacy for both occupants", "Flexible placement on property"]
    },
    {
      type: "Attached ADU",
      description: "Connected to the primary residence, sharing at least one wall while maintaining separate entrances and utilities.",
      features: ["Lower construction costs", "Efficient use of existing structure", "Easier utility connections"]
    },
    {
      type: "Conversion ADU",
      description: "Created by transforming existing spaces like garages, basements, or attics into livable dwelling units.",
      features: ["Utilizes existing structures", "Often lower cost alternative", "Minimal impact on property footprint"]
    },
    {
      type: "Junior ADU (JADU)",
      description: "Smaller units (up to 500 sq ft) typically created within the existing footprint of a single-family home.",
      features: ["Size limited to 500 sq ft", "May share bathroom with primary dwelling", "Lower permit fees in many jurisdictions"]
    }
  ];

  const financingOptions = [
    {
      name: "Home Equity Line of Credit (HELOC)",
      description: "Leverage your home's equity with flexible access to funds as needed for your ADU project.",
      icon: <CreditCard />
    },
    {
      name: "Construction Loans",
      description: "Short-term financing designed specifically for building projects, convertible to permanent mortgage.",
      icon: <ConstructionIcon />
    },
    {
      name: "Cash-Out Refinancing",
      description: "Replace your existing mortgage with a new, larger loan and use the difference for your ADU construction.",
      icon: <Banknote />
    },
    {
      name: "Government Programs",
      description: "Various state and local incentives, rebates, and financing programs specifically for ADU development.",
      icon: <FileText />
    }
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
                <li className="flex items-start">
                  <div className="text-alto-accent mr-3 mt-1">
                    <CheckCircle size={18} />
                  </div>
                  <p className="text-alto-dark-gray">Energy-efficient and sustainable building practices</p>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-3 mt-1">
                    <CheckCircle size={18} />
                  </div>
                  <p className="text-alto-dark-gray">Comprehensive warranty and post-construction support</p>
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
            <h2 className="section-title">Types of ADUs We Build</h2>
            <p className="section-subtitle mx-auto">
              Explore the various ADU types to find the perfect fit for your property and needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aduTypes.map((aduType, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-alto-blue mb-3">{aduType.type}</h3>
                <p className="text-alto-dark-gray mb-4">{aduType.description}</p>
                <h4 className="font-medium text-alto-blue mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 text-alto-dark-gray">
                  {aduType.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="mb-1">{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Sustainable ADU Construction</h2>
            <p className="section-subtitle mx-auto">
              Building eco-friendly ADUs that reduce environmental impact while lowering operating costs
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1632923057155-39a6a49f3f3f?auto=format&fit=crop&w=800&q=80" 
                alt="Eco-friendly ADU construction" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-semibold text-alto-blue mb-4">Our Green Building Approaches</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">
                    <Leaf size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-alto-blue mb-1">Energy Efficiency</h4>
                    <p className="text-alto-dark-gray">High-performance insulation, energy-efficient windows, and ENERGY STAR appliances to minimize energy consumption.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">
                    <Leaf size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-alto-blue mb-1">Sustainable Materials</h4>
                    <p className="text-alto-dark-gray">Locally sourced, recycled, and renewable materials that reduce environmental impact and improve indoor air quality.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">
                    <Leaf size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-alto-blue mb-1">Water Conservation</h4>
                    <p className="text-alto-dark-gray">Low-flow fixtures, drought-resistant landscaping, and optional rainwater harvesting systems to reduce water usage.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">
                    <Leaf size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-alto-blue mb-1">Solar Readiness</h4>
                    <p className="text-alto-dark-gray">ADUs designed to accommodate future solar panel installation, with options for immediate solar integration.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-alto-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">ADU Financing Options</h2>
            <p className="section-subtitle mx-auto">
              Explore ways to fund your ADU project with these popular financing solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {financingOptions.map((option, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex">
                <div className="mr-4 text-alto-accent">
                  {option.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-alto-blue mb-2">{option.name}</h3>
                  <p className="text-alto-dark-gray text-sm">{option.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-alto-dark-gray italic">
              * Financing information provided for educational purposes only. Alto Builders does not provide financial advice or services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
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
