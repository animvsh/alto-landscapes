
import React from 'react';

const LocalExpertiseSection = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <h2 className="section-title">Local Expertise Matters</h2>
            <p className="text-alto-dark-gray mb-6">
              Building an ADU requires navigating local regulations, zoning requirements, and building codes that vary significantly from city to city. Alto Builders brings in-depth knowledge of these local regulations across Greater Los Angeles and Ventura County.
            </p>
            <p className="text-alto-dark-gray mb-6">
              Our team stays up-to-date with the latest policy changes and maintains relationships with local building departments, ensuring a smooth permitting process for your project.
            </p>
            <p className="text-alto-dark-gray">
              Beyond regulations, we understand the unique architectural styles, climate considerations, and property characteristics of each neighborhood we serve, allowing us to design ADUs that complement existing structures and maximize property value.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1589308902200-4f5f269dfb4f?auto=format&fit=crop&w=800&q=80" 
              alt="Los Angeles cityscape" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalExpertiseSection;
