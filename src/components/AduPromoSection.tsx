
import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const AduPromoSection = () => {
  return (
    <ScrollReveal animation="slide-up" delay={0.4} className="mt-16">
      <div className="p-8 bg-gradient-to-r from-white to-alto-light-gray rounded-2xl shadow-xl border border-gray-100">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/5 mb-6 md:mb-0 flex justify-center">
            <div className="bg-gradient-to-br from-alto-blue to-alto-accent rounded-full p-6 inline-flex shadow-lg transform transition-all duration-500 hover:scale-105">
              <Hammer className="h-12 w-12 text-white" />
            </div>
          </div>
          <div className="md:w-3/5 md:px-8">
            <h3 className="text-2xl font-semibold text-alto-blue mb-2">Custom ADU Construction</h3>
            <p className="text-alto-dark-gray">
              Maximize your property's potential with our custom ADU solutions. Whether you're looking to create additional living space for family members, generate rental income, or increase your home's value, our expert team will guide you through every step of the process.
            </p>
          </div>
          <div className="md:w-1/5 mt-6 md:mt-0 text-center">
            <Link 
              to="/services/adu" 
              className="btn-primary inline-block transform transition-all duration-500 hover:scale-105 hover:shadow-lg"
            >
              Explore ADUs
            </Link>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default AduPromoSection;
