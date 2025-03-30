
import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import FloorPlanCard from '../FloorPlanCard';
import { FloorPlan } from '../../data/types/FloorPlan';
import { motion, AnimatePresence } from 'framer-motion';

interface PlanTypeSectionProps {
  title: string;
  plans: FloorPlan[];
  isExpanded: boolean;
  onToggle: () => void;
  id: string;
}

const PlanTypeSection = ({ 
  title, 
  plans, 
  isExpanded, 
  onToggle, 
  id 
}: PlanTypeSectionProps) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
      id={id} 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      className="mb-16 bg-white rounded-lg p-8 shadow-lg border border-gray-100"
    >
      <div 
        className="flex justify-between items-center mb-6 cursor-pointer hover:bg-alto-light-gray/20 p-3 rounded-md transition-all duration-300 group"
        onClick={onToggle}
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-alto-blue">
          {title}
        </h3>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-alto-light-gray/40 p-2 rounded-full"
        >
          {isExpanded ? (
            <ChevronUp className="text-alto-blue transition-transform duration-300" />
          ) : (
            <ChevronDown className="text-alto-blue transition-transform duration-300" />
          )}
        </motion.div>
      </div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, height: 0 }}
          >
            {plans.map((plan, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="h-full"
              >
                <FloorPlanCard
                  name={plan.name}
                  specs={plan.specs}
                  image={plan.floorPlanImage || plan.image}
                  link={`/plans/${plan.name.toLowerCase().replace(/\s+/g, '-')}`}
                  price={plan.price}
                  squareFeet={plan.squareFeet}
                  description={plan.description}
                  floorPlanImage={plan.floorPlanImage}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PlanTypeSection;
