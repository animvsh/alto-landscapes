
import React from 'react';
import { Home, Bed, BedDouble, FileText } from 'lucide-react';

const PlansNavigation = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-10">
      <div className="flex flex-wrap gap-4 justify-center">
        <a href="#studio-plans" className="inline-flex items-center btn-secondary">
          <Home size={18} className="mr-2" /> Studio Plans
        </a>
        <a href="#one-bedroom-plans" className="inline-flex items-center btn-secondary">
          <Bed size={18} className="mr-2" /> One Bedroom Plans
        </a>
        <a href="#two-bedroom-plans" className="inline-flex items-center btn-secondary">
          <BedDouble size={18} className="mr-2" /> Two Bedroom Plans
        </a>
        <a href="#custom-plans" className="inline-flex items-center btn-secondary">
          <FileText size={18} className="mr-2" /> Custom Plans
        </a>
      </div>
    </div>
  );
};

export default PlansNavigation;
