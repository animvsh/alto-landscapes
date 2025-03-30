
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
        rootMargin: '0px 0px -50px 0px'
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
        <div className={`mb-5 text-alto-accent bg-alto-light-gray w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 delay-200 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          {icon}
        </div>
      )}
      <h3 className={`text-xl font-semibold text-alto-blue mb-3 transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>{title}</h3>
      <p className={`text-alto-dark-gray transition-all duration-500 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>{description}</p>
    </div>
  );
};

export default InfoCard;
