
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  location: string;
  image: string;
  link: string;
  description?: string;
}

const ProjectCard = ({ title, location, image, link, description }: ProjectCardProps) => {
  return (
    <Link to={link} className="block">
      <div className="bg-white rounded-lg overflow-hidden card-shadow group">
        <div className="relative overflow-hidden h-64">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            <p className="text-white/80">{location}</p>
            {description && (
              <p className="text-white/90 text-sm mt-2 line-clamp-2">{description}</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
