
import React from 'react';
import { motion } from 'framer-motion';

interface PlansHeaderProps {
  title: string;
  subtitle: string;
}

const PlansHeader = ({ title, subtitle }: PlansHeaderProps) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        delay: 0.2
      }
    }
  };

  return (
    <motion.div 
      className="text-center mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.h2 
        className="section-title"
        variants={itemVariants}
      >
        {title}
      </motion.h2>
      
      <motion.p 
        className="section-subtitle mx-auto"
        variants={itemVariants}
      >
        {subtitle}
      </motion.p>
      
      <motion.p 
        className="mt-4 text-alto-dark-gray max-w-4xl mx-auto"
        variants={paragraphVariants}
      >
        Our in-house design team specializes in creating plans that integrate seamlessly with your main residence, 
        ensuring your ADU's exterior complements your property. From minor modifications to completely bespoke designs, 
        including stacked ADUs and guest house layouts, we offer a wide range of options to bring your vision to life.
      </motion.p>
    </motion.div>
  );
};

export default PlansHeader;
