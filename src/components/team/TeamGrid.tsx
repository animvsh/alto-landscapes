import React from 'react';
import TeamMemberCard from '../TeamMemberCard';
import { teamMembers } from '../../data/teamData';

const TeamGrid = () => {
  // Get founders (first two members) and other team members
  const founders = teamMembers.slice(0, 2);
  const otherTeamMembers = teamMembers.slice(2);

  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="section-title">Our Leadership</h2>
        <p className="section-subtitle mx-auto">
          Meet the experts behind Alto Builders' success
        </p>
      </div>
      
      {/* Founders Section with larger cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {founders.map((founder, index) => (
          <TeamMemberCard
            key={index}
            name={founder.name}
            position={founder.position}
            image={founder.image}
            bio={founder.bio}
            fullBio={founder.fullBio}
            facebook={founder.facebook}
            linkedin={founder.linkedin}
            instagram={founder.instagram}
          />
        ))}
      </div>
      
      {/* Other Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {otherTeamMembers.map((member, index) => (
          <TeamMemberCard
            key={index + 2}
            name={member.name}
            position={member.position}
            image={member.image}
            bio={member.bio}
            fullBio={member.fullBio}
            facebook={member.facebook}
            linkedin={member.linkedin}
            instagram={member.instagram}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;
