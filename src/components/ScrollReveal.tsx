
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade' | 'slide-up' | 'slide-right' | 'zoom';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

const ScrollReveal = ({
  children,
  animation = 'fade',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  className,
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const getAnimationVariants = () => {
    switch (animation) {
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { duration, delay }
          }
        };
      case 'slide-up':
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
              type: "spring", 
              stiffness: 100, 
              damping: 15,
              delay 
            }
          }
        };
      case 'slide-right':
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: { 
              type: "spring", 
              stiffness: 100, 
              damping: 15,
              delay 
            }
          }
        };
      case 'zoom':
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: { 
            opacity: 1, 
            scale: 1,
            transition: { 
              type: "spring", 
              stiffness: 100, 
              damping: 15,
              delay 
            }
          }
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { duration, delay }
          }
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={getAnimationVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
