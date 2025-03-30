
import { Link } from 'react-router-dom';

interface FloorPlanCardProps {
  name: string;
  specs: string;
  image: string;
  link: string;
}

const FloorPlanCard = ({ name, specs, image, link }: FloorPlanCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden card-shadow group">
      <div className="relative overflow-hidden h-64">
        <img 
          src={image} 
          alt={`${name} floor plan`} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-alto-blue mb-2">{name}</h3>
        <p className="text-alto-dark-gray mb-4">{specs}</p>
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
