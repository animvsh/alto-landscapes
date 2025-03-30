
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
  
  return (
    <div className="bg-white rounded-lg overflow-hidden card-shadow group">
      <div className="relative overflow-hidden h-64">
        <img 
          src={displayImage} 
          alt={`${name} floor plan`} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-alto-blue mb-2">{name}</h3>
        <div className="flex justify-between items-center mb-2">
          <p className="text-alto-dark-gray">{specs}</p>
          {price && <p className="text-alto-accent font-semibold">{price}</p>}
        </div>
        {squareFeet && (
          <p className="text-sm text-alto-gray mb-2">{squareFeet}</p>
        )}
        {description && (
          <p className="text-sm text-alto-dark-gray mb-3 line-clamp-2">{description}</p>
        )}
        <Link 
          to={link} 
          className="inline-block text-alto-accent font-medium hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default FloorPlanCard;
