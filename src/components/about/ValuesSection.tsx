
import React from 'react';
import { CheckCircle } from 'lucide-react';

const ValueCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="bg-white p-8 rounded-lg card-shadow">
      <div className="text-alto-accent mb-4">
        <CheckCircle size={40} />
      </div>
      <h3 className="text-xl font-semibold text-alto-blue mb-3">{title}</h3>
      <p className="text-alto-dark-gray">
        {description}
      </p>
    </div>
  );
};

const ValuesSection = () => {
  const values = [
    {
      title: "Quality Craftsmanship",
      description: "We never compromise on quality. From materials to finishes, we ensure every detail meets our exacting standards."
    },
    {
      title: "Client-Centered Approach",
      description: "Your vision drives our work. We listen carefully to understand your needs and deliver solutions that exceed expectations."
    },
    {
      title: "Transparency",
      description: "Clear communication and straightforward pricing ensure you're informed and comfortable throughout the process."
    },
    {
      title: "Innovation",
      description: "We stay at the forefront of design trends and construction techniques to deliver modern, efficient ADUs."
    },
    {
      title: "Sustainability",
      description: "We prioritize eco-friendly materials and energy-efficient designs to minimize environmental impact."
    },
    {
      title: "Community",
      description: "As local builders, we're committed to strengthening our communities through thoughtful development."
    }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="section-title">Our Values</h2>
        <p className="section-subtitle mx-auto">
          The principles that guide everything we do
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <ValueCard 
            key={index} 
            title={value.title} 
            description={value.description} 
          />
        ))}
      </div>
    </div>
  );
};

export default ValuesSection;
