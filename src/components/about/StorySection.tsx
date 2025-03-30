
import React from 'react';

const StorySection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mb-16">
      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
        <h2 className="section-title">Our Story</h2>
        <p className="text-alto-dark-gray mb-6">
          Founded in 2015 by brothers Paul and Simon Manfredi, Alto Builders was born from a shared vision to transform the ADU building experience in Greater Los Angeles.
        </p>
        <p className="text-alto-dark-gray mb-6">
          With backgrounds in architecture and construction management, the Manfredi brothers recognized a growing need for high-quality, custom ADUs that could be built efficiently and affordably without compromising on design or craftsmanship.
        </p>
        <p className="text-alto-dark-gray">
          Today, Alto Builders has completed over 100 successful ADU projects across Los Angeles and Ventura County, earning a reputation for excellence, reliability, and exceptional client service.
        </p>
      </div>
      <div className="md:w-1/2">
        <img 
          src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=800&q=80" 
          alt="Alto Builders Headquarters" 
          className="rounded-lg shadow-lg w-full"
        />
      </div>
    </div>
  );
};

export default StorySection;
