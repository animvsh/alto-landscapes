
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
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Premium overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-alto-blue/40 to-transparent"></div>
      
      {/* Decorative overlay patterns */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01NC42MjcgMGw1LjM3MyA1LjM3M1Y2MGgtNjBWNS4zNzNMNS4zNzMgMGg0OS4yNTR6TTg1Ljk0OSA1LjM3M0w5MS4zMjIuMDAxbDUuMzc0IDUuMzc0djU0LjYyNmgtNjBWNS4zNzR6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+')]"></div>
      
      <div className="container-custom text-white text-center md:text-left relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-alto-accent font-semibold text-lg md:text-xl uppercase tracking-wider inline-block mb-4 px-3 py-1 rounded glass-card">Premium ADU Solutions</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="heading-accent">{title.split(' ').slice(0, 3).join(' ')} </span>
            <span>{title.split(' ').slice(3).join(' ')}</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed"
          >
            {subtitle}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link 
              to={buttonLink} 
              className="premium-gradient inline-block text-white text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium"
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
          <div className="w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center animate-bounce glass-card">
            <ArrowDown size={24} className="text-white" />
          </div>
        </motion.div>
      )}

      {/* Enhanced decorative elements */}
      <div className="absolute bottom-[20%] right-[10%] w-32 h-32 border border-white/20 rounded-full opacity-30"></div>
      <div className="absolute top-[30%] left-[5%] w-24 h-24 border border-white/20 rounded-full opacity-30"></div>
      <div className="absolute top-[20%] right-[20%] w-20 h-20 border border-white/10 rounded-full opacity-20"></div>
    </div>
  );
};

export default HeroSection;
