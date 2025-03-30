
import React from 'react';
import { Link } from 'react-router-dom';

const CustomPlansSection = () => {
  return (
    <div id="custom-plans" className="bg-alto-blue text-white p-8 rounded-lg mt-16 shadow-md">
      <h3 className="text-2xl font-semibold mb-4">Need a Custom ADU Floor Plan?</h3>
      <p className="mb-6">
        Looking to customize an accessory dwelling unit (ADU) to perfectly fit your property or expand your project 
        with multiple attached or stacked units? We're experienced ADU builders who can bring your vision to life! 
        Whether you want to modify one of our existing ADU plans or create a fully custom design, our expert in-house 
        drafting team is here to help. Contact us today to start planning your personalized ADU project!
      </p>
      <Link to="/contact" className="btn-accent">Start Now</Link>
    </div>
  );
};

export default CustomPlansSection;
