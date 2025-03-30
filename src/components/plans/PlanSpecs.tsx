
import React from 'react';
import { motion } from 'framer-motion';
import { Home, Bed, Bath, Map } from 'lucide-react';

interface PlanSpecsProps {
  squareFeet: string;
  bedrooms: string;
  bathrooms: string;
  stories: string;
}

const PlanSpecs = ({ squareFeet, bedrooms, bathrooms, stories }: PlanSpecsProps) => {
  return (
    <motion.div 
      className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
    >
      <motion.div 
        className="flex flex-col items-center justify-center p-4 bg-alto-light-gray rounded-lg hover:shadow-md transition-shadow"
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
      >
        <Home size={24} className="text-alto-blue mb-2" />
        <span className="text-sm text-alto-dark-gray">
          {squareFeet}
        </span>
      </motion.div>
      
      <motion.div 
        className="flex flex-col items-center justify-center p-4 bg-alto-light-gray rounded-lg hover:shadow-md transition-shadow"
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
      >
        <Bed size={24} className="text-alto-blue mb-2" />
        <span className="text-sm text-alto-dark-gray">
          {bedrooms} {bedrooms === "1" ? "Bedroom" : bedrooms === "0" ? "Bedroom" : "Bedrooms"}
        </span>
      </motion.div>
      
      <motion.div 
        className="flex flex-col items-center justify-center p-4 bg-alto-light-gray rounded-lg hover:shadow-md transition-shadow"
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
      >
        <Bath size={24} className="text-alto-blue mb-2" />
        <span className="text-sm text-alto-dark-gray">
          {bathrooms} {bathrooms === "1" ? "Bathroom" : "Bathrooms"}
        </span>
      </motion.div>
      
      <motion.div 
        className="flex flex-col items-center justify-center p-4 bg-alto-light-gray rounded-lg hover:shadow-md transition-shadow"
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
      >
        <Map size={24} className="text-alto-blue mb-2" />
        <span className="text-sm text-alto-dark-gray">
          {stories}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default PlanSpecs;
