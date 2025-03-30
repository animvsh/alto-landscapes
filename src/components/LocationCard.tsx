
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface LocationCardProps {
  name: string;
  image: string;
  slug: string;
  description?: string;
}

const LocationCard = ({ name, image, slug, description }: LocationCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="location-card h-[400px] card-shadow group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className={`location-card-overlay ${isHovered ? 'opacity-100' : 'opacity-90'}`}></div>
        
        <div className="location-card-content group-hover:translate-y-[-8px]">
          <h3 className="text-2xl font-semibold mb-2 text-white text-shadow">{name}</h3>
          
          {description && (
            <p className={`text-white/80 mb-4 line-clamp-2 transform transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 translate-y-2'}`}>
              {description}
            </p>
          )}
          
          <Link 
            to={`/locations/${slug}`} 
            className={`inline-flex items-center gap-2 text-alto-accent transition-all duration-300 transform ${isHovered ? 'opacity-100' : 'opacity-0 translate-y-2'}`}
          >
            <span>Explore ADUs in {name}</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default LocationCard;
