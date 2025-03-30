
import React from 'react';
import { Home, Bed, BedDouble, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const PlansNavigation = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: { 
      y: -5, 
      scale: 1.05,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
    }
  };

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-8 mb-10 border border-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="flex flex-wrap gap-4 justify-center">
        <motion.a 
          href="#studio-plans" 
          className="inline-flex items-center btn-secondary gap-2 group"
          variants={itemVariants}
          whileHover="hover"
        >
          <Home size={18} className="group-hover:text-alto-accent transition-colors" /> 
          <span>Studio Plans</span>
        </motion.a>
        
        <motion.a 
          href="#one-bedroom-plans" 
          className="inline-flex items-center btn-secondary gap-2 group"
          variants={itemVariants}
          whileHover="hover"
        >
          <Bed size={18} className="group-hover:text-alto-accent transition-colors" /> 
          <span>One Bedroom Plans</span>
        </motion.a>
        
        <motion.a 
          href="#two-bedroom-plans" 
          className="inline-flex items-center btn-secondary gap-2 group"
          variants={itemVariants}
          whileHover="hover"
        >
          <BedDouble size={18} className="group-hover:text-alto-accent transition-colors" /> 
          <span>Two Bedroom Plans</span>
        </motion.a>
        
        <motion.a 
          href="#custom-plans" 
          className="inline-flex items-center btn-secondary gap-2 group"
          variants={itemVariants}
          whileHover="hover"
        >
          <FileText size={18} className="group-hover:text-alto-accent transition-colors" /> 
          <span>Custom Plans</span>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default PlansNavigation;
