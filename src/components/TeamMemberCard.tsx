
import { Facebook, Linkedin } from 'lucide-react';

interface TeamMemberCardProps {
  name: string;
  position: string;
  image: string;
  bio: string;
  facebook?: string;
  linkedin?: string;
}

const TeamMemberCard = ({ 
  name, 
  position, 
  image, 
  bio,
  facebook,
  linkedin
}: TeamMemberCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden card-shadow">
      <div className="relative overflow-hidden h-64 md:h-80">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-alto-blue">{name}</h3>
        <p className="text-alto-accent mb-4">{position}</p>
        <p className="text-alto-dark-gray mb-4 line-clamp-3">{bio}</p>
        
        <div className="flex space-x-3">
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
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
