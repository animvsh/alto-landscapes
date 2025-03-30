
import React from 'react';
import { motion } from 'framer-motion';

interface PlanDetailBannerProps {
  name: string;
  specs: string;
  price: string;
  squareFeet: string;
  stories: string;
  bedrooms: string;
  bathrooms: string;
}

const PlanDetailBanner = ({
  name,
  specs,
  price,
  squareFeet,
  stories,
  bedrooms,
  bathrooms
}: PlanDetailBannerProps) => {
  const bannerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-gradient-to-r from-alto-blue to-alto-light-blue py-10 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="flex flex-col lg:flex-row justify-between items-center"
          variants={bannerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-6 lg:mb-0" variants={itemVariants}>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{name}</h1>
            <p className="text-xl opacity-90">{specs}</p>
          </motion.div>
          <motion.div 
            className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20 shadow-xl"
            variants={itemVariants}
          >
            <div className="text-center">
              <p className="text-2xl font-bold mb-1">{price}</p>
              <p className="text-sm opacity-80">Starting Price</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <motion.div className="text-center" variants={itemVariants}>
                <p className="font-semibold">{squareFeet}</p>
                <p className="text-xs opacity-80">Square Feet</p>
              </motion.div>
              <motion.div className="text-center" variants={itemVariants}>
                <p className="font-semibold">{stories}</p>
                <p className="text-xs opacity-80">Stories</p>
              </motion.div>
              <motion.div className="text-center" variants={itemVariants}>
                <p className="font-semibold">{bedrooms}</p>
                <p className="text-xs opacity-80">Bedrooms</p>
              </motion.div>
              <motion.div className="text-center" variants={itemVariants}>
                <p className="font-semibold">{bathrooms}</p>
                <p className="text-xs opacity-80">Bathrooms</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PlanDetailBanner;
