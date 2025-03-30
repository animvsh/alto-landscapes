
import React from 'react';
import { Home, Bed, BedDouble, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const PlansNavigation = () => {
  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { y: -5, scale: 1.05 }
  };

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-8 mb-10 border border-gray-100"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-wrap gap-4 justify-center">
        <motion.a 
          href="#studio-plans" 
          className="inline-flex items-center btn-secondary gap-2 group"
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          transition={{ duration: 0.3 }}
        >
          <Home size={18} className="group-hover:text-alto-accent transition-colors" /> 
          <span>Studio Plans</span>
        </motion.a>
        
        <motion.a 
          href="#one-bedroom-plans" 
          className="inline-flex items-center btn-secondary gap-2 group"
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Bed size={18} className="group-hover:text-alto-accent transition-colors" /> 
          <span>One Bedroom Plans</span>
        </motion.a>
        
        <motion.a 
          href="#two-bedroom-plans" 
          className="inline-flex items-center btn-secondary gap-2 group"
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <BedDouble size={18} className="group-hover:text-alto-accent transition-colors" /> 
          <span>Two Bedroom Plans</span>
        </motion.a>
        
        <motion.a 
          href="#custom-plans" 
          className="inline-flex items-center btn-secondary gap-2 group"
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <FileText size={18} className="group-hover:text-alto-accent transition-colors" /> 
          <span>Custom Plans</span>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default PlansNavigation;
