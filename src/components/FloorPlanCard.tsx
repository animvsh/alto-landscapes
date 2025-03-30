
import { Link } from 'react-router-dom';

interface FloorPlanCardProps {
  name: string;
  specs: string;
  image: string;
  link: string;
  price?: string;
  squareFeet?: string;
  description?: string;
  floorPlanImage?: string;
}

const FloorPlanCard = ({ 
  name, 
  specs, 
  image, 
  link, 
  price, 
  squareFeet, 
  description,
  floorPlanImage 
}: FloorPlanCardProps) => {
  // Use floor plan image if available, otherwise use regular image
  const displayImage = floorPlanImage || image;
  
  // Transform the link to match our plan detail page pattern
  const planDetailLink = link.startsWith('/plans/') 
    ? link 
    : `/plans/${name.toLowerCase().replace(/\s+/g, '-')}`;
  
  return (
    <Link to={planDetailLink} className="block">
      <div className="bg-white rounded-lg overflow-hidden card-shadow group hover:translate-y-[-5px] transition-all duration-300">
        <div className="relative overflow-hidden h-64">
          <img 
            src={displayImage} 
            alt={`${name} floor plan`} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {price && (
            <div className="absolute top-0 right-0 bg-alto-accent text-white px-3 py-1 font-medium">
              {price}
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-alto-blue mb-2">{name}</h3>
          <div className="flex justify-between items-center mb-2">
            <p className="text-alto-dark-gray">{specs}</p>
            {squareFeet && (
              <p className="text-sm text-alto-gray">{squareFeet}</p>
            )}
          </div>
          {description && (
            <p className="text-sm text-alto-dark-gray mb-3 line-clamp-2">{description}</p>
          )}
          <span className="inline-block text-alto-accent font-medium hover:underline">
            View Details
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FloorPlanCard;
