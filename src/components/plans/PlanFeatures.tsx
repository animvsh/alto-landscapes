
import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface PlanFeaturesProps {
  features: string[];
}

const PlanFeatures = ({ features }: PlanFeaturesProps) => {
  return (
    <motion.div className="mb-8">
      <h3 className="text-xl font-semibold text-alto-blue mb-3">Key Features</h3>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <motion.li 
            key={idx} 
            className="flex items-start"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * idx, duration: 0.5 }}
          >
            <Check size={18} className="text-alto-accent mr-2 mt-1 flex-shrink-0" />
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default PlanFeatures;
