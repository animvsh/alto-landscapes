
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import FloorPlanCard from '../FloorPlanCard';
import { FloorPlan } from '../../data/types/FloorPlan';

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
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div 
      id={id} 
      ref={sectionRef}
      className={`mb-16 bg-white rounded-lg p-8 shadow-md transform transition-all duration-700 ${
        animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div 
        className="flex justify-between items-center mb-6 cursor-pointer hover:bg-alto-light-gray/20 p-2 rounded-md transition-colors"
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
            <div 
              key={index}
              className="transform transition-all duration-500" 
              style={{ 
                transitionDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.5s ease forwards', 
                opacity: 0 
              }}
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlanTypeSection;
