
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

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

  return (
    <div className="bg-white rounded-lg overflow-hidden card-shadow transition-all duration-300 hover:shadow-lg">
      <div className="relative overflow-hidden h-64 md:h-80">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
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
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-alto-blue">{name}</h3>
        <p className="text-alto-accent mb-4">{position}</p>
        
        <div className="mb-4">
          {isExpanded && fullBio ? (
            <p className="text-alto-dark-gray">{fullBio}</p>
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
    </div>
  );
};

export default TeamMemberCard;
