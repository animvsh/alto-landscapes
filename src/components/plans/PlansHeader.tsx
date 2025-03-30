
import React from 'react';

interface PlansHeaderProps {
  title: string;
  subtitle: string;
}

const PlansHeader = ({ title, subtitle }: PlansHeaderProps) => {
  return (
    <div className="text-center mb-12">
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle mx-auto">
        {subtitle}
      </p>
      <p className="mt-4 text-alto-dark-gray max-w-4xl mx-auto">
        Our in-house design team specializes in creating plans that integrate seamlessly with your main residence, 
        ensuring your ADU's exterior complements your property. From minor modifications to completely bespoke designs, 
        including stacked ADUs and guest house layouts, we offer a wide range of options to bring your vision to life.
      </p>
    </div>
  );
};

export default PlansHeader;
