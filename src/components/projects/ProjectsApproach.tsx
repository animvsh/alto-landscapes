
import React from 'react';

const ProjectsApproach = () => {
  return (
    <section className="py-20 bg-alto-light-gray">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <h2 className="section-title">Our Approach</h2>
            <p className="text-alto-dark-gray mb-6">
              Every Alto Builders project begins with a thorough understanding of our client's vision, lifestyle, and property. We believe that successful ADUs harmoniously blend form and function, creating spaces that are both beautiful and practical.
            </p>
            <p className="text-alto-dark-gray mb-6">
              Our design team works closely with clients to develop custom solutions that maximize space, optimize natural light, and create seamless indoor-outdoor connections. We pay meticulous attention to both architectural details and interior finishes to ensure a cohesive, high-quality result.
            </p>
            <p className="text-alto-dark-gray">
              From concept to completion, we maintain transparent communication and rigorous quality control, resulting in ADUs that enhance both property value and lifestyle.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1618220179428-22790b485390?auto=format&fit=crop&w=800&q=80" 
              alt="Alto Builders Design Process" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsApproach;
