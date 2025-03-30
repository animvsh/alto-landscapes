
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CallToActionSection from '../components/CallToActionSection';
import InfoCard from '../components/InfoCard';
import { Paintbrush, Sun, Ruler, PanelRight, Lightbulb, Home } from 'lucide-react';

const Design = () => {
  return (
    <>
      <Navbar />
      <HeroSection 
        title="DESIGN SERVICES"
        subtitle="Creating beautiful, functional ADUs tailored to your lifestyle"
        backgroundImage="https://images.unsplash.com/photo-1618220179428-22790b485390?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Design Process</h2>
            <p className="section-subtitle mx-auto">
              A collaborative approach to creating your perfect ADU
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InfoCard 
              title="Initial Consultation" 
              description="We begin by understanding your vision, requirements, and how you plan to use your ADU."
              icon={<Lightbulb size={32} />}
            />
            <InfoCard 
              title="Site Analysis" 
              description="Our team evaluates your property to determine the optimal placement, orientation, and size for your ADU."
              icon={<Home size={32} />}
            />
            <InfoCard 
              title="Concept Development" 
              description="Based on your input and our analysis, we create preliminary design concepts for your review."
              icon={<Paintbrush size={32} />}
            />
            <InfoCard 
              title="Space Planning" 
              description="We optimize the interior layout to maximize functionality and flow while meeting your specific needs."
              icon={<PanelRight size={32} />}
            />
            <InfoCard 
              title="Natural Light" 
              description="Strategic window placement ensures your ADU is filled with natural light while maintaining privacy."
              icon={<Sun size={32} />}
            />
            <InfoCard 
              title="Material Selection" 
              description="We guide you through selecting quality, sustainable materials that align with your aesthetic preferences."
              icon={<Ruler size={32} />}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-alto-light-gray">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="section-title">Custom vs. Pre-Designed ADUs</h2>
              <p className="text-alto-dark-gray mb-6">
                At Alto Builders, we offer both custom and pre-designed ADU options to suit different needs and budgets.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-alto-blue mb-3">Custom ADUs</h3>
                <p className="text-alto-dark-gray mb-4">
                  Our custom design service creates a one-of-a-kind ADU specifically tailored to your property, preferences, and lifestyle needs. This option offers maximum flexibility and personalization.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="text-alto-accent mr-2">
                      <CheckCircle size={16} />
                    </div>
                    <span>Unique designs tailored to your specific property</span>
                  </li>
                  <li className="flex items-center">
                    <div className="text-alto-accent mr-2">
                      <CheckCircle size={16} />
                    </div>
                    <span>Complete creative control over layout and finishes</span>
                  </li>
                  <li className="flex items-center">
                    <div className="text-alto-accent mr-2">
                      <CheckCircle size={16} />
                    </div>
                    <span>Solutions for challenging sites or specific requirements</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-alto-blue mb-3">Pre-Designed ADUs</h3>
                <p className="text-alto-dark-gray mb-4">
                  Our collection of pre-designed ADUs offers proven layouts that can be modified to suit your needs. These options provide cost efficiency and faster timelines.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="text-alto-accent mr-2">
                      <CheckCircle size={16} />
                    </div>
                    <span>Cost-effective with predictable pricing</span>
                  </li>
                  <li className="flex items-center">
                    <div className="text-alto-accent mr-2">
                      <CheckCircle size={16} />
                    </div>
                    <span>Streamlined design and construction process</span>
                  </li>
                  <li className="flex items-center">
                    <div className="text-alto-accent mr-2">
                      <CheckCircle size={16} />
                    </div>
                    <span>Customizable finishes and features</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1618219740975-d40978bb7378?auto=format&fit=crop&w=800&q=80" 
                alt="Alto Builders design consultation" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Design Style Options</h2>
            <p className="section-subtitle mx-auto">
              Explore the diverse architectural styles available for your ADU
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
                alt="Modern ADU design" 
                className="rounded-lg shadow-lg w-full h-60 object-cover mb-6"
              />
              <h3 className="text-xl font-semibold text-alto-blue mb-3">Modern</h3>
              <p className="text-alto-dark-gray mb-4">
                Clean lines, minimalist details, and open floor plans characterize our modern ADU designs. These contemporary spaces feature large windows, flat or low-pitched roofs, and a seamless integration of indoor and outdoor living.
              </p>
              <p className="text-alto-dark-gray">
                Perfect for those who appreciate sleek, uncluttered spaces with an emphasis on functionality and natural light.
              </p>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80" 
                alt="Traditional ADU design" 
                className="rounded-lg shadow-lg w-full h-60 object-cover mb-6"
              />
              <h3 className="text-xl font-semibold text-alto-blue mb-3">Traditional</h3>
              <p className="text-alto-dark-gray mb-4">
                Our traditional ADU designs offer timeless appeal with classic proportions, pitched roofs, and architectural details that complement older homes. These spaces balance character with contemporary functionality.
              </p>
              <p className="text-alto-dark-gray">
                Ideal for homeowners looking to maintain architectural consistency with existing traditional or historical main residences.
              </p>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80" 
                alt="Craftsman ADU design" 
                className="rounded-lg shadow-lg w-full h-60 object-cover mb-6"
              />
              <h3 className="text-xl font-semibold text-alto-blue mb-3">Craftsman</h3>
              <p className="text-alto-dark-gray mb-4">
                Inspired by the Arts and Crafts movement, our Craftsman ADUs feature handcrafted details, natural materials, and thoughtful proportions. These designs emphasize quality workmanship and a connection to nature.
              </p>
              <p className="text-alto-dark-gray">
                Perfect for those who value handcrafted details, warm materials, and a cozy, inviting atmosphere.
              </p>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600607687644-a6ed68e3f4ce?auto=format&fit=crop&w=800&q=80" 
                alt="Mid-Century Modern ADU design" 
                className="rounded-lg shadow-lg w-full h-60 object-cover mb-6"
              />
              <h3 className="text-xl font-semibold text-alto-blue mb-3">Mid-Century Modern</h3>
              <p className="text-alto-dark-gray mb-4">
                Our Mid-Century Modern ADUs capture the essence of 1950s and 60s California design with their clean geometric forms, connection to outdoor spaces, and emphasis on functionality.
              </p>
              <p className="text-alto-dark-gray">
                Ideal for design enthusiasts who appreciate retro aesthetics updated for contemporary living.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToActionSection 
        title="Ready to Design Your ADU?"
        subtitle="Schedule a design consultation with our expert team"
        buttonText="Start Your Design"
        buttonLink="/contact"
      />

      <Footer />
    </>
  );
};

export default Design;

function CheckCircle(props: { size: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={props.size} 
      height={props.size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
}
