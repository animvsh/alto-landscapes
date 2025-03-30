
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FloorPlanCard from '../FloorPlanCard';
import { FloorPlan } from '../../data/types/FloorPlan';
import { motion } from 'framer-motion';

interface FeaturedPlansSectionProps {
  plans: FloorPlan[];
  count?: number;
  title?: string;
  subtitle?: string;
}

const FeaturedPlansSection = ({ 
  plans, 
  count = 8, 
  title = "Build-Ready Floor Plans",
  subtitle
}: FeaturedPlansSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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
        damping: 12
      }
    }
  };
  
  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-alto-blue mb-2">{title}</h3>
        {subtitle && (
          <p className="text-alto-dark-gray text-center max-w-3xl mx-auto mb-8">{subtitle}</p>
        )}
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {plans.slice(0, count).map((plan, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="h-full"
          >
            <FloorPlanCard 
              name={plan.name} 
              specs={plan.specs} 
              image={plan.image} 
              link={plan.link}
              price={plan.price}
              squareFeet={plan.squareFeet}
              description={plan.description}
              floorPlanImage={plan.floorPlanImage}
            />
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Link to="/plans" className="btn-secondary flex items-center justify-center mx-auto w-fit group transition-all duration-300">
          <span className="mr-2">See All Floor Plans</span> 
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </motion.div>
    </div>
  );
};

export default FeaturedPlansSection;
