
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CallToActionSection from '../components/CallToActionSection';
import { Bed, Bath, Maximize2, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Plans = () => {
  const floorPlans = [
    {
      name: "The Yosemite",
      specs: {
        beds: 2,
        baths: 2.5,
        sqft: 1000,
      },
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
      price: "$295,000",
      features: [
        "Open concept living/dining/kitchen",
        "Primary bedroom with ensuite bath",
        "Guest bedroom with private bath",
        "Powder room for guests",
        "Full-size kitchen with island",
        "Energy-efficient appliances",
        "Washer/dryer hookups",
        "9' ceilings throughout",
      ]
    },
    {
      name: "The Glacier",
      specs: {
        beds: 2,
        baths: 2,
        sqft: 850,
      },
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
      price: "$265,000",
      features: [
        "Open concept living/dining area",
        "Primary bedroom with ensuite bath",
        "Spacious second bedroom",
        "Full guest bathroom",
        "Efficient kitchen with breakfast bar",
        "Energy-efficient appliances",
        "Stacked washer/dryer",
        "Multiple storage solutions",
      ]
    },
    {
      name: "The Hickory",
      specs: {
        beds: 2,
        baths: 1,
        sqft: 700,
      },
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80",
      price: "$235,000",
      features: [
        "Efficient open floor plan",
        "Two comfortable bedrooms",
        "Full bathroom with tub/shower combo",
        "Compact kitchen with all essentials",
        "Combined living/dining area",
        "Energy-efficient appliances",
        "Stackable washer/dryer hookup",
        "Smart storage solutions",
      ]
    },
  ];

  return (
    <>
      <Navbar />
      <HeroSection 
        title="PLANS & PRICING"
        subtitle="Explore our selection of thoughtfully designed ADU floor plans"
        backgroundImage="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Floor Plans</h2>
            <p className="section-subtitle mx-auto">
              Choose from our collection of pre-designed ADU floor plans, each offering a perfect balance of style, functionality, and value
            </p>
          </div>

          <div className="space-y-16">
            {floorPlans.map((plan, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden card-shadow">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 h-64 md:h-auto">
                    <img 
                      src={plan.image} 
                      alt={`${plan.name} ADU design`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6 md:p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-semibold text-alto-blue">{plan.name}</h3>
                      <div className="text-2xl font-semibold text-alto-accent">{plan.price}</div>
                    </div>
                    
                    <div className="flex mb-6">
                      <div className="flex items-center mr-6">
                        <Bed size={18} className="text-alto-blue mr-2" />
                        <span>{plan.specs.beds} Beds</span>
                      </div>
                      <div className="flex items-center mr-6">
                        <Bath size={18} className="text-alto-blue mr-2" />
                        <span>{plan.specs.baths} Baths</span>
                      </div>
                      <div className="flex items-center">
                        <Maximize2 size={18} className="text-alto-blue mr-2" />
                        <span>{plan.specs.sqft} sq ft</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-alto-dark-gray mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                        {plan.features.map((feature, i) => (
                          <div key={i} className="flex items-start">
                            <div className="text-alto-accent mr-2 mt-1">
                              <CheckCircle size={14} />
                            </div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <Link to={`/plans/${plan.name.toLowerCase().replace(/\s+/g, '-')}`} className="btn-primary">
                        View Details
                      </Link>
                      <Link to="/contact" className="btn-secondary">
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-alto-light-gray">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="section-title">Custom Floor Plans</h2>
              <p className="text-alto-dark-gray mb-6">
                While our pre-designed floor plans offer excellent value and efficiency, we understand that some projects require a fully custom approach. Our design team can create a bespoke ADU tailored to your specific needs, preferences, and property constraints.
              </p>
              
              <h3 className="text-xl font-semibold text-alto-blue mb-3">Benefits of a Custom Design:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="text-alto-accent mr-3 mt-1">
                    <CheckCircle size={18} />
                  </div>
                  <div>
                    <p className="text-alto-dark-gray">Perfect fit for challenging sites or unique property constraints</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-3 mt-1">
                    <CheckCircle size={18} />
                  </div>
                  <div>
                    <p className="text-alto-dark-gray">Tailored to your specific lifestyle needs and preferences</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-3 mt-1">
                    <CheckCircle size={18} />
                  </div>
                  <div>
                    <p className="text-alto-dark-gray">Opportunity for unique architectural details and special features</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-3 mt-1">
                    <CheckCircle size={18} />
                  </div>
                  <div>
                    <p className="text-alto-dark-gray">Optimized for your specific views, solar orientation, and privacy needs</p>
                  </div>
                </li>
              </ul>
              
              <Link to="/contact" className="btn-primary inline-block">
                Inquire About Custom Designs
              </Link>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80" 
                alt="Custom floor plan design" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Pricing & Process</h2>
            <p className="section-subtitle mx-auto">
              Transparency in our pricing and what to expect throughout your project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg card-shadow">
              <h3 className="text-xl font-semibold text-alto-blue mb-4">Standard Inclusions</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span>Architectural design and plans</span>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span>Structural engineering</span>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span>Permit acquisition and fees</span>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span>Site preparation</span>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span>Foundation and structural framing</span>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span>Plumbing and electrical</span>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span>Standard fixtures and finishes</span>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span>HVAC system</span>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span>Project management</span>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span>Final inspections</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg card-shadow">
              <h3 className="text-xl font-semibold text-alto-blue mb-4">Premium Upgrades</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span>High-end appliance packages</span>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span>Custom cabinetry</span>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span>Premium flooring options</span>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span>Designer lighting fixtures</span>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span>Smart home technology</span>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span>Solar panel integration</span>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span>Upgraded windows and doors</span>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span>Outdoor living features</span>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span>Custom storage solutions</span>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span>Upgraded insulation and soundproofing</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg card-shadow">
              <h3 className="text-xl font-semibold text-alto-blue mb-4">Financing Options</h3>
              <p className="text-alto-dark-gray mb-4">
                We partner with trusted financial institutions to offer several financing options for your ADU project:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span>Home equity loans and lines of credit</span>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span>Cash-out refinancing</span>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span>Construction loans</span>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span>FHA 203k renovation loans</span>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span>Fannie Mae HomeStyle loans</span>
                </li>
              </ul>
              <p className="text-alto-dark-gray mt-4">
                Our team can provide guidance on these options and connect you with loan specialists experienced in ADU financing.
              </p>
            </div>
          </div>

          <div className="bg-alto-blue rounded-lg p-8 text-white">
            <h3 className="text-xl font-semibold mb-4">Request Detailed Pricing</h3>
            <p className="mb-6">
              For detailed pricing specific to your property and project requirements, please contact our team. We'll discuss your needs and provide a comprehensive proposal tailored to your situation.
            </p>
            <Link to="/contact" className="btn-accent inline-block">
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      <CallToActionSection 
        title="Find Your Perfect Floor Plan"
        subtitle="Let's discuss which plan best suits your property and lifestyle needs"
        buttonText="Schedule Consultation"
        buttonLink="/contact"
      />

      <Footer />
    </>
  );
};

export default Plans;
