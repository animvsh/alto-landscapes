
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
  showScrollIndicator?: boolean;
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  buttonText = "START YOUR BUILD",
  buttonLink = "/contact",
  showScrollIndicator = true
}: HeroSectionProps) => {
  
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container-custom text-white text-center md:text-left">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-0 animate-fade-in-delay-1">
            {subtitle}
          </p>
          <div className="opacity-0 animate-fade-in-delay-2">
            <Link to={buttonLink} className="btn-accent inline-block text-lg">
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
      
      {showScrollIndicator && (
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
          onClick={handleScrollDown}
        >
          <ArrowDown size={32} className="text-white" />
        </div>
      )}
    </div>
  );
};

export default HeroSection;
