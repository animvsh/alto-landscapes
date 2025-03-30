
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FloorPlanCard from '../FloorPlanCard';
import { FloorPlansSectionProps } from './interfaces';

// Define the floor plan interface
interface FloorPlan {
  name: string;
  specs: string;
  image: string;
  link: string;
  price: string;
}

const defaultFloorPlans: FloorPlan[] = [
  {
    name: "The Spruce Plan",
    specs: "2 Bed, 2.5 Bath",
    image: "/lovable-uploads/f9b428c1-3ef4-4d46-87ba-368a64a9ba47.png",
    link: "/plans/the-spruce-plan",
    price: "$320,000",
  },
  {
    name: "The Birch Plan",
    specs: "2 Bed, 2 Bath",
    image: "/lovable-uploads/87aa8cc7-0176-4780-927b-2fe210f9535d.png",
    link: "/plans/the-birch-plan",
    price: "$280,000",
  },
  {
    name: "The Hickory Plan",
    specs: "2 Bed, 1 Bath",
    image: "/lovable-uploads/15387f04-3154-42ef-b673-a243a66904de.png",
    link: "/plans/the-hickory-plan",
    price: "$220,000",
  },
  {
    name: "The Whistler Plan",
    specs: "2 Bed, 1 Bath",
    image: "/lovable-uploads/317d251a-25e4-401a-8f49-b4f6b1b4c652.png",
    link: "/plans/the-whistler-plan",
    price: "$210,000",
  },
];

const additionalFloorPlans: FloorPlan[] = [
  {
    name: "The Willow Plan",
    specs: "Studio, 1 Bath",
    image: "/lovable-uploads/34a83205-08c6-422c-8432-17ce1ceb1bea.png",
    link: "/plans/the-willow-plan",
    price: "$150,000",
  },
  {
    name: "The Redwood Plan",
    specs: "2 Bed, 1 Bath",
    image: "/lovable-uploads/9e390d7a-1b19-4862-8706-7a0630051ed3.png",
    link: "/plans/the-redwood-plan",
    price: "$260,000",
  },
  {
    name: "The Palm Plan",
    specs: "1 Bed, 2 Bath",
    image: "/lovable-uploads/c39f088a-7d6d-452f-9dcb-a62f496abf7e.png",
    link: "/plans/the-palm-plan",
    price: "$200,000",
  },
  {
    name: "The Cedar Plan",
    specs: "2 Bed, 2 Bath",
    image: "/lovable-uploads/d92cf2ac-d227-4b35-8771-6272c332f425.png",
    link: "/plans/the-cedar-plan",
    price: "$295,000",
  },
];

const FloorPlansSection = ({ 
  title = "Our Floor Plans",
  subtitle = "Take a look at our floor plans. Building an ADU starts with the right inspiration. Explore some of our favorite floor plans to see the endless possibilities for your own space.",
  showAllPlansLink = true,
  className
}: FloorPlansSectionProps) => {
  return (
    <section id="floor-plans-section" className={`py-20 ${className || ''}`}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {defaultFloorPlans.map((plan, index) => (
            <FloorPlanCard 
              key={index} 
              name={plan.name} 
              specs={plan.specs} 
              image={plan.image} 
              link={plan.link}
              price={plan.price}
            />
          ))}
        </div>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {additionalFloorPlans.map((plan, index) => (
            <FloorPlanCard 
              key={index} 
              name={plan.name} 
              specs={plan.specs} 
              image={plan.image} 
              link={plan.link}
              price={plan.price}
            />
          ))}
        </div>

        {showAllPlansLink && (
          <div className="mt-12 text-center">
            <Link to="/plans" className="btn-secondary flex items-center justify-center mx-auto w-fit">
              All Floor Plans <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FloorPlansSection;
