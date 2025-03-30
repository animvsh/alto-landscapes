
import React from 'react';
import FloorPlanCard from './FloorPlanCard';
import { FloorPlan } from '../data/types/FloorPlan';
import { motion } from 'framer-motion';

interface FloorPlanCategoryProps {
  title: string;
  plans: FloorPlan[];
}

const FloorPlanCategory = ({ title, plans }: FloorPlanCategoryProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        damping: 12
      }
    }
  };

  return (
    <motion.div 
      className="mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.h3 
        className="text-2xl font-semibold text-alto-blue mb-6 border-b border-alto-light-gray pb-2"
        variants={itemVariants}
      >
        {title}
      </motion.h3>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="h-full"
          >
            <FloorPlanCard
              name={plan.name || `Plan ${index + 1}`}
              specs={plan.specs}
              image={plan.floorPlanImage || plan.image}
              link={`/plans/${plan.name?.toLowerCase().replace(/\s+/g, '-') || `plan-${index + 1}`}`}
              price={plan.price}
              squareFeet={plan.squareFeet}
              description={plan.description}
              floorPlanImage={plan.floorPlanImage}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default FloorPlanCategory;
