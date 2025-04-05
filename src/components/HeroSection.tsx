
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HeroSectionProps } from './sections/interfaces';
import { motion } from 'framer-motion';

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  buttonText = "START YOUR BUILD",
  buttonLink = "/contact",
  showScrollIndicator = true,
  onScrollDown,
  className
}: HeroSectionProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const handleScrollDown = () => {
    if (onScrollDown) {
      onScrollDown();
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden ${className || ''}`}
    >
      {/* Parallax background with enhanced overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0 transform transition-transform duration-1000"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          transform: isLoaded ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 10s ease-out'
        }}
      />
      
      {/* Overlay with luxurious gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-alto-blue/30 z-10"></div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-1/4 left-[10%] w-40 h-40 border border-white/10 rounded-full z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: isLoaded ? 1 : 0, 
          opacity: isLoaded ? 0.2 : 0 
        }}
        transition={{ duration: 1.5, delay: 0.5 }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-[30%] right-[15%] w-64 h-64 border border-white/10 rounded-full z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: isLoaded ? 1 : 0, 
          opacity: isLoaded ? 0.2 : 0 
        }}
        transition={{ duration: 1.5, delay: 0.8 }}
      ></motion.div>
      
      <div className="container-custom text-white relative z-20">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: isLoaded ? 1 : 0, 
              y: isLoaded ? 0 : 30 
            }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: isLoaded ? 1 : 0, 
              y: isLoaded ? 0 : 30 
            }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {subtitle}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: isLoaded ? 1 : 0, 
              y: isLoaded ? 0 : 30 
            }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link 
              to={buttonLink} 
              className="bg-gradient-to-r from-alto-accent to-alto-blue text-white font-medium py-3 px-8 rounded-full inline-block shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-105"
            >
              {buttonText}
            </Link>
          </motion.div>
        </div>
      </div>
      
      {showScrollIndicator && (
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
          initial={{ opacity: 0, y: -10 }}
          animate={{ 
            opacity: isLoaded ? 1 : 0,
            y: isLoaded ? 0 : -10
          }}
          transition={{ duration: 0.8, delay: 1 }}
          onClick={handleScrollDown}
        >
          <div className="w-12 h-12 rounded-full border-2 border-white/60 flex items-center justify-center animate-bounce hover:border-white transition-all duration-300">
            <ArrowDown size={24} className="text-white" />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default HeroSection;
