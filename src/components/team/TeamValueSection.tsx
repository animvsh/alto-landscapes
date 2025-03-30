
import React from 'react';
import { CheckCircle } from 'lucide-react';

const TeamValueSection = () => {
  const values = [
    {
      title: "Expertise & Experience",
      description: "Our team brings decades of combined experience in construction, design, and project management to every project."
    },
    {
      title: "Client-Centered Approach",
      description: "We believe in transparent communication and putting our clients' needs at the center of everything we do."
    },
    {
      title: "Attention to Detail",
      description: "We're meticulous about every aspect of your project, from the initial designs to the finishing touches."
    },
    {
      title: "Innovation",
      description: "We stay at the forefront of construction technology and sustainable building practices."
    },
    {
      title: "Integrity",
      description: "We stand behind our work and maintain the highest standards of professional integrity."
    },
    {
      title: "Community Focus",
      description: "As a local business, we're committed to enhancing the communities we serve through thoughtful development."
    }
  ];

  return (
    <div className="py-16 bg-white rounded-lg card-shadow mb-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle mx-auto">
            The principles that guide our team every day
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="flex items-start">
              <div className="text-alto-blue mr-4 mt-1">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-alto-blue mb-2">{value.title}</h3>
                <p className="text-alto-dark-gray">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamValueSection;
