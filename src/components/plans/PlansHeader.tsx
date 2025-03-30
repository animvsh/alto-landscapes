
import React from 'react';
import { motion } from 'framer-motion';

interface PlansHeaderProps {
  title: string;
  subtitle: string;
}

const PlansHeader = ({ title, subtitle }: PlansHeaderProps) => {
  return (
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
    >
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h2>
      
      <motion.p 
        className="section-subtitle mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {subtitle}
      </motion.p>
      
      <motion.p 
        className="mt-4 text-alto-dark-gray max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Our in-house design team specializes in creating plans that integrate seamlessly with your main residence, 
        ensuring your ADU's exterior complements your property. From minor modifications to completely bespoke designs, 
        including stacked ADUs and guest house layouts, we offer a wide range of options to bring your vision to life.
      </motion.p>
    </motion.div>
  );
};

export default PlansHeader;
