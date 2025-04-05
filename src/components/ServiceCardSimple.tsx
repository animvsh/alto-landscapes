
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

const ServiceCardSimple = ({ title, description, imageSrc, link }: ServiceCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <Link to={link} className="block">
        <div className="h-64 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-alto-blue mb-3">{title}</h3>
          <p className="text-alto-dark-gray mb-4">{description}</p>
          <span className="text-alto-accent font-medium inline-flex items-center">
            Learn More
            <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCardSimple;
