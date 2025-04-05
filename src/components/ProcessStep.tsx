
import { ReactNode, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

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
      className="flex"
    >
      <motion.div 
        className="mr-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          x: isVisible ? 0 : -20 
        }}
        transition={{ duration: 0.7 }}
      >
        <motion.div 
          className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-alto-accent to-alto-blue text-white font-bold text-xl shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: isVisible ? 1 : 0.8,
            opacity: isVisible ? 1 : 0 
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {number}
        </motion.div>
        <motion.div 
          className="h-full w-px bg-gradient-to-b from-alto-accent to-alto-blue mx-auto mt-2 mb-2 hidden md:block"
          initial={{ height: 0 }}
          animate={{ height: isVisible ? '100%' : 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        ></motion.div>
      </motion.div>
      <div>
        <motion.div 
          className="flex items-center mb-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ 
            opacity: isVisible ? 1 : 0,
            x: isVisible ? 0 : 20 
          }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {icon && <span className="mr-2 text-alto-blue">{icon}</span>}
          <h3 className="text-xl font-semibold text-alto-blue">{title}</h3>
        </motion.div>
        <motion.p 
          className="text-alto-dark-gray mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};

export default ProcessStep;
