
import { ReactNode, useEffect, useRef, useState } from 'react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon?: ReactNode;
}

const ProcessStep = ({ number, title, description, icon }: ProcessStepProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const stepRef = useRef<HTMLDivElement>(null);

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
        rootMargin: '0px 0px -70px 0px'
      }
    );

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={stepRef}
      className={`flex transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
    >
      <div className="mr-6">
        <div className={`flex items-center justify-center w-14 h-14 rounded-full bg-alto-accent text-white font-bold text-xl shadow-md transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          {number}
        </div>
        <div className={`h-full w-px bg-alto-accent mx-auto mt-2 mb-2 opacity-50 hidden md:block transition-all duration-700 delay-400 ${isVisible ? 'h-full' : 'h-0'}`}></div>
      </div>
      <div>
        <div className={`flex items-center mb-2 transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
          {icon && <span className="mr-2 text-alto-blue">{icon}</span>}
          <h3 className="text-xl font-semibold text-alto-blue">{title}</h3>
        </div>
        <p className={`text-alto-dark-gray mb-8 transition-all duration-500 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;
