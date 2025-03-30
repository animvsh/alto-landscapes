
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
      className={`relative min-h-screen flex items-center justify-start pt-20 pb-16 overflow-hidden ${className || ''}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Premium dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Hero pattern overlay */}
      <div className="absolute inset-0 bg-hero-pattern opacity-40"></div>
      
      <div className="container-custom text-white text-left relative z-10">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight tracking-tight text-shadow-lg uppercase"
          >
            {title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed max-w-2xl"
          >
            {subtitle}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              to={buttonLink} 
              className="premium-button"
            >
              {buttonText}
            </Link>
          </motion.div>
        </div>
      </div>
      
      {showScrollIndicator && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={handleScrollDown}
        >
          <div className="w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center animate-bounce">
            <ArrowDown size={24} className="text-white" />
          </div>
        </motion.div>
      )}

      {/* Enhanced luxury decorative elements */}
      <div className="absolute bottom-[20%] right-[10%] w-32 h-32 border border-white/20 rounded-full opacity-30"></div>
      <div className="absolute top-[30%] left-[5%] w-24 h-24 border border-white/20 rounded-full opacity-30"></div>
      <div className="absolute top-[20%] right-[20%] w-48 h-1 bg-alto-accent opacity-50"></div>
    </div>
  );
};

export default HeroSection;
