
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import FloorPlanCard from '../FloorPlanCard';
import { FloorPlan } from '../../data/floorPlansData';

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
  return (
    <div id={id} className="mb-16 bg-white rounded-lg p-8 shadow-md">
      <div 
        className="flex justify-between items-center mb-6 cursor-pointer"
        onClick={onToggle}
      >
        <h3 className="text-2xl font-semibold text-alto-blue">
          {title}
        </h3>
        {isExpanded ? (
          <ChevronUp className="text-alto-blue" />
        ) : (
          <ChevronDown className="text-alto-blue" />
        )}
      </div>
      
      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {plans.map((plan, index) => (
            <FloorPlanCard
              key={index}
              name={plan.name}
              specs={plan.specs}
              image={plan.floorPlanImage || plan.image}
              link={`/plans/${plan.name.toLowerCase().replace(/\s+/g, '-')}`}
              price={plan.price}
              squareFeet={plan.squareFeet}
              description={plan.description}
              floorPlanImage={plan.floorPlanImage}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PlanTypeSection;
