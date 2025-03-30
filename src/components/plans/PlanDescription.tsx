
import React from 'react';
import { motion } from 'framer-motion';

interface PlanDescriptionProps {
  planName: string;
  description: string;
}

const PlanDescription = ({ planName, description }: PlanDescriptionProps) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div variants={fadeIn}>
      <h2 className="text-2xl font-semibold text-alto-blue mb-4">About {planName}</h2>
      <motion.p className="text-alto-dark-gray mb-6" variants={fadeIn}>
        {description}
      </motion.p>
    </motion.div>
  );
};

export default PlanDescription;
