
import { ReactNode, useEffect, useRef, useState } from 'react';

interface InfoCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

const InfoCard = ({ title, description, icon }: InfoCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`bg-white p-6 md:p-8 rounded-lg card-shadow border border-gray-100 transition-all duration-700 transform 
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {icon && (
        <div className="mb-5 text-alto-accent bg-alto-light-gray w-14 h-14 rounded-full flex items-center justify-center">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-alto-blue mb-3">{title}</h3>
      <p className="text-alto-dark-gray">{description}</p>
    </div>
  );
};

export default InfoCard;
