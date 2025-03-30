
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HeroSectionProps } from './sections/interfaces';

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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay gradient for premium feel */}
      <div className="absolute inset-0 bg-gradient-to-r from-alto-blue/30 to-transparent"></div>
      
      <div className="container-custom text-white text-center md:text-left relative z-10">
        <div className="max-w-3xl">
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {title}
          </h1>
          <p 
            className={`text-xl md:text-2xl mb-8 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {subtitle}
          </p>
          <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link 
              to={buttonLink} 
              className="btn-accent inline-block text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
      
      {showScrollIndicator && (
        <div 
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onClick={handleScrollDown}
        >
          <div className="w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center animate-bounce">
            <ArrowDown size={24} className="text-white" />
          </div>
        </div>
      )}

      {/* Decorative elements */}
      <div className={`absolute bottom-[20%] right-[10%] w-32 h-32 border border-white/20 rounded-full transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-30 scale-100' : 'opacity-0 scale-50'}`}></div>
      <div className={`absolute top-[30%] left-[5%] w-24 h-24 border border-white/20 rounded-full transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-30 scale-100' : 'opacity-0 scale-50'}`}></div>
    </div>
  );
};

export default HeroSection;
