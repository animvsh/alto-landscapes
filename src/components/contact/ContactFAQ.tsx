
import React from 'react';

const ContactFAQ = () => {
  return (
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
  );
};

export default ContactFAQ;
