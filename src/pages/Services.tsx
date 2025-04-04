import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CallToActionSection from '../components/CallToActionSection';
import ServiceCard from '../components/ServiceCard';
import ProcessStep from '../components/ProcessStep';
import { Home, Ruler, FileText, HardHat, ClipboardCheck, Key, Kitchen, Bath, Palmtree, Building } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Kitchen Remodeling",
      description: "Transform your kitchen with modern designs and premium materials.",
      icon: <Kitchen />,
      link: "/services/kitchen",
    },
    {
      title: "Bathroom Remodeling",
      description: "Create your perfect bathroom with our expert renovation services.",
      icon: <Bath />,
      link: "/services/bathroom",
    },
    {
      title: "Backyard Projects",
      description: "Enhance your outdoor living space with custom backyard solutions.",
      icon: <Palmtree />,
      link: "/services/backyard",
    },
    {
      title: "New Construction",
      description: "Build your dream home from the ground up with our comprehensive construction services.",
      icon: <Building />,
      link: "/services/new-construction",
    },
    {
      title: "Project Management",
      description: "Comprehensive oversight from concept to completion.",
      icon: <ClipboardCheck />,
      link: "/services/project-management",
    },
    {
      title: "Turn-Key Solutions",
      description: "End-to-end service for a hassle-free building experience.",
      icon: <Key />,
      link: "/services/turn-key",
    },
  ];

  return (
    <>
      <Navbar />
      <HeroSection 
        title="OUR SERVICES"
        subtitle="Comprehensive building solutions from concept to completion"
        backgroundImage="https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle mx-auto">
              Our full spectrum of services ensures a seamless building experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
          <div className="text-center mb-16">
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle mx-auto">
              A streamlined approach to bringing your building vision to life
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <ProcessStep 
              number="1" 
              title="Discovery & Consultation" 
              description="We begin with an in-depth consultation to understand your goals, budget, and timeline. Our team conducts a site assessment to evaluate your property's potential for a building project."
              icon={<ClipboardCheck size={18} />}
            />
            
            <ProcessStep 
              number="2" 
              title="Design Development" 
              description="Our architects create custom designs based on your input and property specifics. We present detailed plans and 3D renderings for your approval before finalizing."
              icon={<Ruler size={18} />}
            />
            
            <ProcessStep 
              number="3" 
              title="Permitting & Approvals" 
              description="We handle the entire permitting process, navigating local regulations and securing all necessary approvals. Our expertise ensures a smooth and efficient experience."
              icon={<FileText size={18} />}
            />
            
            <ProcessStep 
              number="4" 
              title="Construction" 
              description="Our skilled construction team brings your design to life with quality craftsmanship and attention to detail. We provide regular updates and maintain open communication throughout."
              icon={<HardHat size={18} />}
            />
            
            <ProcessStep 
              number="5" 
              title="Final Inspection & Handover" 
              description="After completion, we conduct thorough quality inspections before final walkthrough with you. We provide complete documentation and warranty information for your new building project."
              icon={<ClipboardCheck size={18} />}
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="section-title">Why Choose Alto Builders?</h2>
              <p className="text-alto-dark-gray mb-6">
                Alto Builders combines expertise, quality craftsmanship, and exceptional service to deliver premium building projects that exceed expectations.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="text-alto-accent mr-3 mt-1">
                    <CheckCircle size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-alto-blue mb-1">Expertise</h4>
                    <p className="text-alto-dark-gray">With over 30 years of combined experience, our team brings unmatched knowledge to every project.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="text-alto-accent mr-3 mt-1">
                    <CheckCircle size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-alto-blue mb-1">Quality</h4>
                    <p className="text-alto-dark-gray">We never compromise on materials or workmanship, ensuring your building project is built to last.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="text-alto-accent mr-3 mt-1">
                    <CheckCircle size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-alto-blue mb-1">Transparency</h4>
                    <p className="text-alto-dark-gray">Clear communication and detailed proposals mean no surprises throughout your project.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="text-alto-accent mr-3 mt-1">
                    <CheckCircle size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-alto-blue mb-1">Full Service</h4>
                    <p className="text-alto-dark-gray">From design to handover, we handle every aspect of your building project for a stress-free experience.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80" 
                alt="Alto Builders team on site" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <CallToActionSection 
        title="Ready to Start Your Project?"
        subtitle="Contact us today to schedule your free consultation"
        buttonText="Get Started"
        buttonLink="/contact"
      />

      <Footer />
    </>
  );
};

export default Services;

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
