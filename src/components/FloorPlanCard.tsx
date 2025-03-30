
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
  const [isHovered, setIsHovered] = useState(false);
  
  // Use floor plan image if available, otherwise use regular image
  const displayImage = floorPlanImage || image;
  
  // Transform the link to match our plan detail page pattern
  const planDetailLink = link.startsWith('/plans/') 
    ? link 
    : `/plans/${name.toLowerCase().replace(/\s+/g, '-')}`;
  
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Link 
        to={planDetailLink} 
        className="block h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="bg-white rounded-lg overflow-hidden card-shadow group h-full flex flex-col transition-all duration-300">
          <div className="relative overflow-hidden h-64">
            <motion.img 
              src={displayImage} 
              alt={`${name} floor plan`} 
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.7 }}
            />
            
            {price && (
              <div className="absolute top-0 right-0 bg-alto-accent text-white px-3 py-1 font-medium">
                {price}
              </div>
            )}
            
            <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <motion.div 
                className="px-4 py-2 rounded-full bg-white text-alto-blue font-medium"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                View Details
              </motion.div>
            </div>
          </div>
          
          <div className="p-6 flex flex-col flex-grow">
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
            <span className="inline-block text-alto-accent font-medium mt-auto">
              View Details
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default FloorPlanCard;
