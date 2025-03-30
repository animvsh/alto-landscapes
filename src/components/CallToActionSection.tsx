
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CallToActionSectionProps } from './sections/interfaces';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CallToActionSection = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  className
}: CallToActionSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`relative py-24 md:py-32 overflow-hidden ${className || ''}`}
    >
      <div 
        className="absolute inset-0 bg-premium-gradient"
        style={{
          backgroundSize: 'cover',
        }}
      ></div>
      
      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01NC42MjcgMGw1LjM3MyA1LjM3M1Y2MGgtNjBWNS4zNzNMNS4zNzMgMGg0OS4yNTR6TTg1Ljk0OSA1LjM3M0w5MS4zMjIuMDAxbDUuMzc0IDUuMzc0djU0LjYyNmgtNjBWNS4zNzR6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+')]"></div>
      
      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block text-alto-accent font-medium text-lg tracking-wider mb-6 bg-white/10 px-4 py-2 rounded-full">TAKE THE NEXT STEP</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            <span className="heading-accent">{title.split(' ').slice(0, 3).join(' ')} </span>
            <span>{title.split(' ').slice(3).join(' ')}</span>
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <Link 
            to={buttonLink} 
            className="bg-white hover:bg-alto-accent text-alto-blue hover:text-white inline-flex items-center gap-2 px-8 py-4 rounded-lg shadow-lg hover:shadow-xl font-medium transition-all duration-300 transform hover:-translate-y-1 text-lg group"
          >
            {buttonText}
            <ArrowRight size={18} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full transform -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full transform translate-y-1/4 translate-x-1/4"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/5 rounded-full"></div>
    </section>
  );
};

export default CallToActionSection;
