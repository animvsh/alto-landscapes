import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FloorPlanCard from '../FloorPlanCard';
import { FloorPlan } from '../../data/types/FloorPlan';

interface FeaturedPlansSectionProps {
  plans: {
    name: string;
    specs: string;
    image: string;
    link: string;
    price: string;
    squareFeet?: string;
    description?: string;
    floorPlanImage?: string;
  }[];
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
      <h3 className="text-2xl font-semibold text-alto-blue mb-2 text-center">{title}</h3>
      {subtitle && (
        <p className="text-alto-dark-gray text-center max-w-3xl mx-auto mb-8">{subtitle}</p>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {plans.slice(0, count).map((plan, index) => (
          <FloorPlanCard 
            key={index} 
            name={plan.name} 
            specs={plan.specs} 
            image={plan.image} 
            link={plan.link}
            price={plan.price}
            squareFeet={plan.squareFeet}
            description={plan.description}
            floorPlanImage={plan.floorPlanImage}
          />
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Link to="/plans" className="btn-secondary flex items-center justify-center mx-auto w-fit">
          See All Floor Plans <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPlansSection;
