
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CallToActionSection from '../components/CallToActionSection';
import FloorPlanCategory from '../components/FloorPlanCategory';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import FeaturedPlansSection from '../components/design/FeaturedPlansSection';
import { featuredFloorPlans } from '../data/floorPlansData';

const Plans = () => {
  // Filter the floor plans by type
  const studioPlans = featuredFloorPlans.filter(plan => 
    plan.specs.toLowerCase().includes('studio'));

  const oneBedroomPlans = featuredFloorPlans.filter(plan => 
    plan.specs.toLowerCase().includes('1 bed') || plan.specs.toLowerCase().includes('1 bedroom'));

  const twoBedroomPlans = featuredFloorPlans.filter(plan => 
    plan.specs.toLowerCase().includes('2 bed') || plan.specs.toLowerCase().includes('2 bedroom'));

  return (
    <>
      <Navbar />
      <HeroSection 
        title="ADU PLANS & PRICING"
        subtitle="Explore our collection of ready-to-build ADU floor plans"
        backgroundImage="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16 md:py-20">
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

          <div className="mb-8">
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <a href="#studio-plans" className="btn-secondary">Studio Plans</a>
              <a href="#one-bedroom-plans" className="btn-secondary">One Bedroom Plans</a>
              <a href="#two-bedroom-plans" className="btn-secondary">Two Bedroom Plans</a>
              <a href="#custom-plans" className="btn-secondary">Custom Plans</a>
            </div>
          </div>

          <div id="studio-plans" className="mb-16">
            <h3 className="text-2xl font-semibold text-alto-blue mb-6 border-b border-alto-light-gray pb-2">
              Studio Plans
            </h3>
            
            {/* Featured Studio Plans Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {studioPlans.map((plan, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={plan.floorPlanImage || plan.image} 
                      alt={`${plan.name} floor plan`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-alto-blue">{plan.name}</h4>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-alto-dark-gray">{plan.specs}</p>
                        <p className="text-alto-accent font-semibold">{plan.price}</p>
                      </div>
                      {plan.squareFeet && (
                        <p className="text-sm text-alto-gray mt-1">{plan.squareFeet}</p>
                      )}
                    </div>
                    <p className="text-sm text-alto-dark-gray mb-4 line-clamp-3">
                      {plan.description}
                    </p>
                    <Link 
                      to={plan.link} 
                      className="inline-block text-alto-accent font-medium hover:underline"
                    >
                      View Details
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div id="one-bedroom-plans" className="mb-16">
            <h3 className="text-2xl font-semibold text-alto-blue mb-6 border-b border-alto-light-gray pb-2">
              One Bedroom Plans
            </h3>
            
            {/* One Bedroom Plans Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {oneBedroomPlans.map((plan, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={plan.floorPlanImage || plan.image} 
                      alt={`${plan.name} floor plan`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-alto-blue">{plan.name}</h4>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-alto-dark-gray">{plan.specs}</p>
                        <p className="text-alto-accent font-semibold">{plan.price}</p>
                      </div>
                      {plan.squareFeet && (
                        <p className="text-sm text-alto-gray mt-1">{plan.squareFeet}</p>
                      )}
                    </div>
                    <p className="text-sm text-alto-dark-gray mb-4 line-clamp-3">
                      {plan.description}
                    </p>
                    <Link 
                      to={plan.link} 
                      className="inline-block text-alto-accent font-medium hover:underline"
                    >
                      View Details
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div id="two-bedroom-plans" className="mb-16">
            <h3 className="text-2xl font-semibold text-alto-blue mb-6 border-b border-alto-light-gray pb-2">
              Two Bedroom Plans
            </h3>
            
            {/* Two Bedroom Plans Section - Updated to use the same card pattern */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {twoBedroomPlans.map((plan, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={plan.floorPlanImage || plan.image} 
                      alt={`${plan.name} floor plan`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-alto-blue">{plan.name}</h4>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-alto-dark-gray">{plan.specs}</p>
                        <p className="text-alto-accent font-semibold">{plan.price}</p>
                      </div>
                      {plan.squareFeet && (
                        <p className="text-sm text-alto-gray mt-1">{plan.squareFeet}</p>
                      )}
                    </div>
                    {plan.description && (
                      <p className="text-sm text-alto-dark-gray mb-4 line-clamp-3">
                        {plan.description}
                      </p>
                    )}
                    <Link 
                      to={plan.link} 
                      className="inline-block text-alto-accent font-medium hover:underline"
                    >
                      View Details
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div id="custom-plans" className="bg-alto-light-gray p-8 rounded-lg mt-16">
            <h3 className="text-2xl font-semibold text-alto-blue mb-4">Need a Custom ADU Floor Plan?</h3>
            <p className="text-alto-dark-gray mb-6">
              Looking to customize an accessory dwelling unit (ADU) to perfectly fit your property or expand your project 
              with multiple attached or stacked units? We're experienced ADU builders who can bring your vision to life! 
              Whether you want to modify one of our existing ADU plans or create a fully custom design, our expert in-house 
              drafting team is here to help. Contact us today to start planning your personalized ADU project!
            </p>
            <Link to="/contact" className="btn-primary">Start Now</Link>
          </div>
        </div>
      </section>

      <section className="bg-alto-blue py-16 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">Want to learn more about your ADU Project?</h3>
            <p className="text-white/80 mb-8 text-lg">
              We'd love to help you understand your options and find the perfect ADU solution for your property.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-accent">Learn More</Link>
              <Link to="/plans" className="bg-transparent hover:bg-white/10 border border-white text-white font-medium py-3 px-6 rounded-full transition-all duration-300">
                Browse Floor Plans
              </Link>
            </div>
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
