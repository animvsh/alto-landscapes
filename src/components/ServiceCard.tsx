
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <Link to={link} className="block">
      <div className="bg-white p-6 rounded-lg card-shadow group hover:bg-alto-blue transition-colors duration-300">
        <div className="text-alto-blue group-hover:text-white transition-colors duration-300 mb-4 text-3xl">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-alto-blue group-hover:text-white transition-colors duration-300 mb-3">
          {title}
        </h3>
        <p className="text-alto-dark-gray group-hover:text-white/80 transition-colors duration-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default ServiceCard;
