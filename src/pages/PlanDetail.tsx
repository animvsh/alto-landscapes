
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CallToActionSection from '../components/CallToActionSection';
import PlanDetailBanner from '../components/PlanDetailBanner';
import { ArrowLeft, Check } from 'lucide-react';
import { featuredFloorPlans } from '../data/floorPlansData';

const PlanDetail = () => {
  const { planId } = useParams<{ planId: string }>();
  
  // Find the plan in the data
  const plan = featuredFloorPlans.find(p => 
    p.name.toLowerCase().replace(/\s+/g, '-') === planId
  );
  
  if (!plan) {
    return (
      <>
        <Navbar />
        <div className="container-custom py-32 text-center">
          <h2 className="text-3xl font-bold text-alto-blue mb-6">Plan Not Found</h2>
          <p className="mb-8">The floor plan you're looking for doesn't exist or has been moved.</p>
          <Link to="/plans" className="btn-primary">View All Plans</Link>
        </div>
        <Footer />
      </>
    );
  }
  
  // Extract bedrooms and bathrooms from specs
  const bedrooms = plan.specs.toLowerCase().includes('studio') 
    ? 'Studio' 
    : plan.specs.toLowerCase().includes('1 bed') 
      ? '1' 
      : plan.specs.toLowerCase().includes('2 bed') 
        ? '2' 
        : '0';
  
  const bathrooms = plan.specs.match(/(\d+\.?\d*)\s*bath/i)?.[1] || '1';

  return (
    <>
      <Navbar />
      
      <PlanDetailBanner 
        name={plan.name}
        specs={plan.specs}
        price={plan.price}
        squareFeet={plan.squareFeet || ""}
        stories={plan.stories || "One Story"}
        bedrooms={bedrooms}
        bathrooms={bathrooms}
      />
      
      <div className="container-custom py-12">
        <Link to="/plans" className="inline-flex items-center text-alto-blue hover:underline mb-8">
          <ArrowLeft size={16} className="mr-2" /> Back to All Plans
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src={plan.floorPlanImage || plan.image} 
                alt={`${plan.name} floor plan`} 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-alto-blue mb-4">About {plan.name}</h2>
            <p className="text-alto-dark-gray mb-6">
              {plan.description}
            </p>
            
            {plan.features && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-alto-blue mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check size={18} className="text-alto-accent mr-2 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="bg-alto-light-gray p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-alto-blue mb-3">Pricing Details</h3>
              <p className="text-alto-dark-gray mb-4">Starting at {plan.price}</p>
              <p className="text-sm text-alto-dark-gray">
                Pricing includes standard finishes and fixtures. Customize your ADU with premium options available upon request.
              </p>
            </div>
            
            <Link to="/contact" className="btn-primary">Request More Information</Link>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-alto-blue mb-6">Popular Uses for {plan.name}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-alto-blue mb-2">Guest Suite</h3>
              <p className="text-alto-dark-gray">
                Provide guests with a private, fully-equipped space featuring all essential amenities for a comfortable stay.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-alto-blue mb-2">Rental Unit</h3>
              <p className="text-alto-dark-gray">
                Create an attractive rental opportunity with a well-designed unit that tenants will appreciate for its thoughtful layout.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-alto-blue mb-2">Independent Living</h3>
              <p className="text-alto-dark-gray">
                Ideal for family members seeking an independent yet connected living space with all the comforts of home.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <CallToActionSection 
        title="Ready to Start Your ADU Project?"
        subtitle="Contact us today to discuss how we can customize this floor plan to your specific needs"
        buttonText="Schedule Consultation"
        buttonLink="/contact"
      />
      
      <Footer />
    </>
  );
};

export default PlanDetail;
