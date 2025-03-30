
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
  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold text-alto-blue mb-2 text-center">{title}</h3>
        {subtitle && (
          <p className="text-alto-dark-gray text-center max-w-3xl mx-auto mb-8">{subtitle}</p>
        )}
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {plans.slice(0, count).map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
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
      </div>
      
      <motion.div 
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Link to="/plans" className="btn-secondary flex items-center justify-center mx-auto w-fit">
          See All Floor Plans <ArrowRight size={16} className="ml-2" />
        </Link>
      </motion.div>
    </div>
  );
};

export default FeaturedPlansSection;
