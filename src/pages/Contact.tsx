
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <Navbar />
      <HeroSection 
        title="CONTACT US"
        subtitle="Reach out to discuss your ADU project or schedule a consultation"
        backgroundImage="https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/5">
              <h2 className="section-title">Get In Touch</h2>
              <p className="text-alto-dark-gray mb-8">
                We're here to answer your questions and discuss your ADU project. Complete the form or contact us directly using the information below.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="text-alto-blue mr-4 mt-1">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-alto-dark-gray">
                      328 S La Brea Ave<br />
                      Los Angeles, CA 90038
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-alto-blue mr-4 mt-1">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-alto-dark-gray">
                      <a href="tel:8188077587" className="hover:text-alto-blue transition-colors">
                        818-807-7587
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-alto-blue mr-4 mt-1">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-alto-dark-gray">
                      <a href="mailto:info@altobuilds.com" className="hover:text-alto-blue transition-colors">
                        info@altobuilds.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-alto-blue mr-4 mt-1">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office Hours</h3>
                    <p className="text-alto-dark-gray">
                      Monday - Friday: 8:30 AM - 5:30 PM<br />
                      Saturday: By appointment<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-alto-blue mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-alto-blue text-white hover:bg-alto-light-blue transition-colors"
                    aria-label="Facebook"
                  >
                    <FacebookIcon />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-alto-blue text-white hover:bg-alto-light-blue transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-alto-blue text-white hover:bg-alto-light-blue transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:w-3/5">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-alto-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto">
              Find answers to common questions about our ADU services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg card-shadow">
              <h3 className="text-xl font-semibold text-alto-blue mb-3">How long does it typically take to build an ADU?</h3>
              <p className="text-alto-dark-gray">
                The timeline for an ADU project varies depending on design complexity, permitting, and construction. On average, our projects take 8-12 months from initial consultation to completion, with 2-3 months for design, 2-4 months for permitting, and 4-6 months for construction.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg card-shadow">
              <h3 className="text-xl font-semibold text-alto-blue mb-3">What is the typical cost range for an ADU?</h3>
              <p className="text-alto-dark-gray">
                ADU costs in Greater Los Angeles typically range from $250-$400 per square foot, depending on design complexity, site conditions, and finishes. Our standard models range from $235,000 to $350,000 all-inclusive, but we provide detailed estimates based on your specific project.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg card-shadow">
              <h3 className="text-xl font-semibold text-alto-blue mb-3">Can I rent out my ADU?</h3>
              <p className="text-alto-dark-gray">
                Yes, in most areas of Los Angeles and Ventura County, you can rent out your ADU. Current regulations generally allow for ADUs to be rented separately from the primary residence. We can provide specific information about rental regulations in your area during consultation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg card-shadow">
              <h3 className="text-xl font-semibold text-alto-blue mb-3">Do you handle all permitting and approvals?</h3>
              <p className="text-alto-dark-gray">
                Yes, our full-service approach includes handling all aspects of the permitting process. We prepare and submit all necessary documentation, coordinate with city officials, address any feedback or revision requests, and ensure all approvals are secured before construction begins.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg card-shadow">
              <h3 className="text-xl font-semibold text-alto-blue mb-3">Can I customize one of your standard floor plans?</h3>
              <p className="text-alto-dark-gray">
                Absolutely. Our standard floor plans serve as starting points that can be customized to suit your specific needs and preferences. We can modify layouts, adjust room sizes, change finishes, and incorporate special features while maintaining the efficiency and value of our proven designs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg card-shadow">
              <h3 className="text-xl font-semibold text-alto-blue mb-3">What warranties do you offer?</h3>
              <p className="text-alto-dark-gray">
                Alto Builders provides a comprehensive 1-year workmanship warranty and manages all manufacturer warranties on materials and systems. Additionally, we offer an optional extended structural warranty. Detailed warranty information is provided in our contract documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}
