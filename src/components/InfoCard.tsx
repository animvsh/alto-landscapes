
import { ReactNode } from 'react';

interface InfoCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

const InfoCard = ({ title, description, icon }: InfoCardProps) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg card-shadow">
      {icon && <div className="text-alto-blue mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold text-alto-blue mb-3">{title}</h3>
      <p className="text-alto-dark-gray">{description}</p>
    </div>
  );
};

export default InfoCard;
