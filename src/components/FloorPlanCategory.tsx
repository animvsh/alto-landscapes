
import React from 'react';
import FloorPlanCard from './FloorPlanCard';

interface FloorPlan {
  name: string;
  specs: string;
  price: string;
  image: string;
}

interface FloorPlanCategoryProps {
  title: string;
  plans: FloorPlan[];
}

const FloorPlanCategory = ({ title, plans }: FloorPlanCategoryProps) => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-semibold text-alto-blue mb-6 border-b border-alto-light-gray pb-2">
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <FloorPlanCard
            key={index}
            name={plan.name || `Plan ${index + 1}`}
            specs={plan.specs}
            image={plan.image}
            link={`/plans/${plan.name?.toLowerCase().replace(/\s+/g, '-') || `plan-${index + 1}`}`}
            price={plan.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FloorPlanCategory;
