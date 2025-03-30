
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FloorPlanCard from '../FloorPlanCard';

// Define the floor plan interface
interface FloorPlan {
  name: string;
  specs: string;
  image: string;
  link: string;
  price: string;
}

interface FloorPlansSectionProps {
  title?: string;
  subtitle?: string;
}

const FloorPlansSection = ({ 
  title = "Our Floor Plans",
  subtitle = "Take a look at our floor plans. Building an ADU starts with the right inspiration. Explore some of our favorite floor plans to see the endless possibilities for your own space."
}: FloorPlansSectionProps) => {
  // Floor plans data - adding price
  const floorPlans = [
    {
      name: "The Yosemite Plan",
      specs: "2 Bed, 2.5 Bath",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80",
      link: "/plans/yosemite",
      price: "$320,000",
    },
    {
      name: "The Glacier Plan",
      specs: "2 Bed, 2 Bath",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&q=80",
      link: "/plans/glacier",
      price: "$280,000",
    },
    {
      name: "The Hickory Plan",
      specs: "2 Bed, 1 Bath",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=600&q=80",
      link: "/plans/hickory",
      price: "$220,000",
    },
    {
      name: "The Whistler Plan",
      specs: "2 Bed, 1 Bath",
      image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=600&q=80",
      link: "/plans/whistler",
      price: "$210,000",
    },
  ];

  // Additional floor plans - adding price
  const additionalFloorPlans = [
    {
      name: "The Pine Plan",
      specs: "Studio, 1 Bath",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=600&q=80",
      link: "/plans/pine",
      price: "$150,000",
    },
    {
      name: "The Redwood Plan",
      specs: "2 Bed, 1 Bath",
      image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=600&q=80",
      link: "/plans/redwood",
      price: "$260,000",
    },
    {
      name: "The Palm Plan",
      specs: "1 Bed, 2 Bath",
      image: "https://images.unsplash.com/photo-1523837157348-ffbdaccfc7de?auto=format&fit=crop&w=600&q=80",
      link: "/plans/palm",
      price: "$200,000",
    },
    {
      name: "The Beech Plan",
      specs: "2 Bed, 2 Bath",
      image: "https://images.unsplash.com/photo-1503174971373-b1f69a8bdbc7?auto=format&fit=crop&w=600&q=80",
      link: "/plans/beech",
      price: "$295,000",
    },
  ];

  return (
    <section id="floor-plans-section" className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {floorPlans.map((plan, index) => (
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

        <div className="mt-12 text-center">
          <Link to="/floor-plans" className="btn-secondary flex items-center justify-center mx-auto w-fit">
            All Floor Plans <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FloorPlansSection;
