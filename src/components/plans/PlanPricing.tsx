
import React from 'react';
import { motion } from 'framer-motion';

interface PlanPricingProps {
  price: string;
}

const PlanPricing = ({ price }: PlanPricingProps) => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-alto-light-gray to-white p-6 rounded-lg mb-8 shadow-sm"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3 className="text-xl font-semibold text-alto-blue mb-3">Pricing Details</h3>
      <p className="text-alto-dark-gray mb-4">Starting at {price}</p>
      <p className="text-sm text-alto-dark-gray">
        Pricing includes standard finishes and fixtures. Customize your ADU with premium options available upon request.
      </p>
    </motion.div>
  );
};

export default PlanPricing;
