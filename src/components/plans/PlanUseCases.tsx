
import React from 'react';
import { motion } from 'framer-motion';

interface PlanUseCasesProps {
  planName: string;
}

const PlanUseCases = ({ planName }: PlanUseCasesProps) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <h2 className="text-2xl font-semibold text-alto-blue mb-6">Popular Uses for {planName}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-lg font-semibold text-alto-blue mb-2">Guest Suite</h3>
          <p className="text-alto-dark-gray">
            Provide guests with a private, fully-equipped space featuring all essential amenities for a comfortable stay.
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300, delay: 0.05 }}
        >
          <h3 className="text-lg font-semibold text-alto-blue mb-2">Rental Unit</h3>
          <p className="text-alto-dark-gray">
            Create an attractive rental opportunity with a well-designed unit that tenants will appreciate for its thoughtful layout.
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold text-alto-blue mb-2">Independent Living</h3>
          <p className="text-alto-dark-gray">
            Ideal for family members seeking an independent yet connected living space with all the comforts of home.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PlanUseCases;
