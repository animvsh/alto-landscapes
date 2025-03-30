
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CallToActionSectionProps } from './interfaces';

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
      className={`relative py-20 md:py-28 overflow-hidden ${className || ''}`}
    >
      <div 
        className="absolute inset-0 bg-alto-blue"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(26, 53, 94, 0.95) 0%, rgba(26, 53, 94, 0.8) 100%)',
          backgroundSize: 'cover',
        }}
      ></div>
      
      <div className="container-custom text-center relative z-10">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{title}</h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">{subtitle}</p>
          <Link 
            to={buttonLink} 
            className="btn-accent inline-block shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            {buttonText}
          </Link>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className={`absolute -bottom-6 left-0 w-20 h-20 bg-alto-accent/20 rounded-full transition-all duration-1000 delay-300 ${isVisible ? 'opacity-30 translate-x-0' : 'opacity-0 -translate-x-20'}`}></div>
      <div className={`absolute top-10 right-10 w-16 h-16 bg-alto-accent/20 rounded-full transition-all duration-1000 delay-500 ${isVisible ? 'opacity-30 translate-x-0' : 'opacity-0 translate-x-20'}`}></div>
    </section>
  );
};

export default CallToActionSection;
