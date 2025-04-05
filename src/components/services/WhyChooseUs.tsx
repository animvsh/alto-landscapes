
import { CheckCircle } from '../CheckCircle';

interface WhyChooseUsProps {
  className?: string;
}

const WhyChooseUs = ({ className }: WhyChooseUsProps) => {
  return (
    <section className={`py-20 ${className || ''}`}>
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
  );
};

export default WhyChooseUs;
