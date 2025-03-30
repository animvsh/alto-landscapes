
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TeamMemberCardProps {
  name: string;
  position: string;
  image: string;
  bio: string;
  facebook?: string;
  linkedin?: string;
  instagram?: string;
  fullBio?: string;
}

const TeamMemberCard = ({ 
  name, 
  position, 
  image, 
  bio,
  facebook,
  linkedin,
  instagram,
  fullBio
}: TeamMemberCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hover: { scale: 1.05, transition: { duration: 0.5 } },
    initial: { scale: 1, transition: { duration: 0.5 } }
  };

  const overlayVariants = {
    hover: { opacity: 1, transition: { duration: 0.3 } },
    initial: { opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      ref={cardRef}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={cardVariants}
      className="bg-white rounded-lg overflow-hidden card-shadow transition-all duration-300 hover:shadow-lg"
    >
      <motion.div 
        className="relative overflow-hidden h-64 md:h-80"
        whileHover="hover"
        initial="initial"
      >
        <motion.img 
          variants={imageVariants}
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <motion.div 
          variants={overlayVariants}
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
        >
          <div className="absolute bottom-4 left-4 right-4 flex space-x-3">
            {facebook && (
              <a 
                href={facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/90 p-2 rounded-full text-alto-blue hover:bg-alto-blue hover:text-white transition-colors"
                aria-label={`${name}'s Facebook profile`}
              >
                <Facebook size={18} />
              </a>
            )}
            {linkedin && (
              <a 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/90 p-2 rounded-full text-alto-blue hover:bg-alto-blue hover:text-white transition-colors"
                aria-label={`${name}'s LinkedIn profile`}
              >
                <Linkedin size={18} />
              </a>
            )}
            {instagram && (
              <a 
                href={instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/90 p-2 rounded-full text-alto-blue hover:bg-alto-blue hover:text-white transition-colors"
                aria-label={`${name}'s Instagram profile`}
              >
                <Instagram size={18} />
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-alto-blue">{name}</h3>
        <p className="text-alto-accent mb-4">{position}</p>
        
        <div className="mb-4">
          {isExpanded && fullBio ? (
            <motion.p 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              className="text-alto-dark-gray"
            >
              {fullBio}
            </motion.p>
          ) : (
            <p className="text-alto-dark-gray line-clamp-3">{bio}</p>
          )}
        </div>
        
        {fullBio && (
          <Button 
            variant="outline" 
            className="w-full mt-2 text-alto-blue border-alto-blue hover:bg-alto-blue hover:text-white"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show Less" : "Read More"}
          </Button>
        )}
        
        <div className="flex space-x-3 mt-4">
          {facebook && (
            <a 
              href={facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-alto-dark-gray hover:text-alto-blue transition-colors"
              aria-label={`${name}'s Facebook profile`}
            >
              <Facebook size={18} />
            </a>
          )}
          {linkedin && (
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-alto-dark-gray hover:text-alto-blue transition-colors"
              aria-label={`${name}'s LinkedIn profile`}
            >
              <Linkedin size={18} />
            </a>
          )}
          {instagram && (
            <a 
              href={instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-alto-dark-gray hover:text-alto-blue transition-colors"
              aria-label={`${name}'s Instagram profile`}
            >
              <Instagram size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
