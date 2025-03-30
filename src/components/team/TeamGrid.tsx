
import React from 'react';
import TeamMemberCard from '../TeamMemberCard';
import { teamMembers } from '../../data/teamData';

const TeamGrid = () => {
  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="section-title">Our Leadership</h2>
        <p className="section-subtitle mx-auto">
          Meet the experts behind Alto Builders' success
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
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
