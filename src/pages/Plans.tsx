
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CallToActionSection from '../components/CallToActionSection';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Home, BedDouble, Bed, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import FloorPlanCard from '../components/FloorPlanCard';
import { featuredFloorPlans } from '../data/floorPlansData';
import { useState } from 'react';

const Plans = () => {
  // Filter the floor plans by type
  const studioPlans = featuredFloorPlans.filter(plan => 
    plan.specs.toLowerCase().includes('studio'));

  const oneBedroomPlans = featuredFloorPlans.filter(plan => 
    plan.specs.toLowerCase().includes('1 bed') || plan.specs.toLowerCase().includes('1 bedroom'));

  const twoBedroomPlans = featuredFloorPlans.filter(plan => 
    plan.specs.toLowerCase().includes('2 bed') || plan.specs.toLowerCase().includes('2 bedroom'));

  // State for section collapse/expand
  const [expandedSections, setExpandedSections] = useState({
    studio: true,
    oneBedroom: true,
    twoBedroom: true
  });

  const toggleSection = (section: 'studio' | 'oneBedroom' | 'twoBedroom') => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <>
      <Navbar />
      <HeroSection 
        title="ADU PLANS & PRICING"
        subtitle="Explore our collection of ready-to-build ADU floor plans"
        backgroundImage="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16 md:py-20 bg-alto-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Accessory Dwelling Unit Floor Plans</h2>
            <p className="section-subtitle mx-auto">
              Explore our collection of ready-to-build ADU floor plans below. Simply click on any plan to view detailed pricing. 
              Whether you're looking to customize one of our existing blueprints or dreaming of a fully custom ADU design, we've got you covered.
            </p>
            <p className="mt-4 text-alto-dark-gray max-w-4xl mx-auto">
              Our in-house design team specializes in creating plans that integrate seamlessly with your main residence, 
              ensuring your ADU's exterior complements your property. From minor modifications to completely bespoke designs, 
              including stacked ADUs and guest house layouts, we offer a wide range of options to bring your vision to life.
            </p>
          </div>

          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-md p-8 mb-10">
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="#studio-plans" className="inline-flex items-center btn-secondary">
                  <Home size={18} className="mr-2" /> Studio Plans
                </a>
                <a href="#one-bedroom-plans" className="inline-flex items-center btn-secondary">
                  <Bed size={18} className="mr-2" /> One Bedroom Plans
                </a>
                <a href="#two-bedroom-plans" className="inline-flex items-center btn-secondary">
                  <BedDouble size={18} className="mr-2" /> Two Bedroom Plans
                </a>
                <a href="#custom-plans" className="inline-flex items-center btn-secondary">
                  <FileText size={18} className="mr-2" /> Custom Plans
                </a>
              </div>
            </div>
          </div>

          <div id="studio-plans" className="mb-16 bg-white rounded-lg p-8 shadow-md">
            <div 
              className="flex justify-between items-center mb-6 cursor-pointer"
              onClick={() => toggleSection('studio')}
            >
              <h3 className="text-2xl font-semibold text-alto-blue">
                Studio Plans
              </h3>
              {expandedSections.studio ? (
                <ChevronUp className="text-alto-blue" />
              ) : (
                <ChevronDown className="text-alto-blue" />
              )}
            </div>
            
            {expandedSections.studio && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                {studioPlans.map((plan, index) => (
                  <FloorPlanCard
                    key={index}
                    name={plan.name}
                    specs={plan.specs}
                    image={plan.floorPlanImage || plan.image}
                    link={`/plans/${plan.name.toLowerCase().replace(/\s+/g, '-')}`}
                    price={plan.price}
                    squareFeet={plan.squareFeet}
                    description={plan.description}
                    floorPlanImage={plan.floorPlanImage}
                  />
                ))}
              </div>
            )}
          </div>

          <div id="one-bedroom-plans" className="mb-16 bg-white rounded-lg p-8 shadow-md">
            <div 
              className="flex justify-between items-center mb-6 cursor-pointer"
              onClick={() => toggleSection('oneBedroom')}
            >
              <h3 className="text-2xl font-semibold text-alto-blue">
                One Bedroom Plans
              </h3>
              {expandedSections.oneBedroom ? (
                <ChevronUp className="text-alto-blue" />
              ) : (
                <ChevronDown className="text-alto-blue" />
              )}
            </div>
            
            {expandedSections.oneBedroom && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                {oneBedroomPlans.map((plan, index) => (
                  <FloorPlanCard
                    key={index}
                    name={plan.name}
                    specs={plan.specs}
                    image={plan.floorPlanImage || plan.image}
                    link={`/plans/${plan.name.toLowerCase().replace(/\s+/g, '-')}`}
                    price={plan.price}
                    squareFeet={plan.squareFeet}
                    description={plan.description}
                    floorPlanImage={plan.floorPlanImage}
                  />
                ))}
              </div>
            )}
          </div>

          <div id="two-bedroom-plans" className="mb-16 bg-white rounded-lg p-8 shadow-md">
            <div 
              className="flex justify-between items-center mb-6 cursor-pointer"
              onClick={() => toggleSection('twoBedroom')}
            >
              <h3 className="text-2xl font-semibold text-alto-blue">
                Two Bedroom Plans
              </h3>
              {expandedSections.twoBedroom ? (
                <ChevronUp className="text-alto-blue" />
              ) : (
                <ChevronDown className="text-alto-blue" />
              )}
            </div>
            
            {expandedSections.twoBedroom && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                {twoBedroomPlans.map((plan, index) => (
                  <FloorPlanCard
                    key={index}
                    name={plan.name}
                    specs={plan.specs}
                    image={plan.floorPlanImage || plan.image}
                    link={`/plans/${plan.name.toLowerCase().replace(/\s+/g, '-')}`}
                    price={plan.price}
                    squareFeet={plan.squareFeet}
                    description={plan.description}
                    floorPlanImage={plan.floorPlanImage}
                  />
                ))}
              </div>
            )}
          </div>

          <div id="custom-plans" className="bg-alto-blue text-white p-8 rounded-lg mt-16 shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Need a Custom ADU Floor Plan?</h3>
            <p className="mb-6">
              Looking to customize an accessory dwelling unit (ADU) to perfectly fit your property or expand your project 
              with multiple attached or stacked units? We're experienced ADU builders who can bring your vision to life! 
              Whether you want to modify one of our existing ADU plans or create a fully custom design, our expert in-house 
              drafting team is here to help. Contact us today to start planning your personalized ADU project!
            </p>
            <Link to="/contact" className="btn-accent">Start Now</Link>
          </div>
        </div>
      </section>

      <CallToActionSection 
        title="Find Your Perfect ADU Plan Today"
        subtitle="Let's discuss which plan best suits your property and lifestyle needs"
        buttonText="Schedule Consultation"
        buttonLink="/contact"
      />

      <Footer />
    </>
  );
};

export default Plans;
