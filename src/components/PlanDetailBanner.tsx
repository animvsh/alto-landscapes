
import React from 'react';

interface PlanDetailBannerProps {
  name: string;
  specs: string;
  price: string;
  squareFeet: string;
  stories: string;
  bedrooms: string;
  bathrooms: string;
}

const PlanDetailBanner = ({
  name,
  specs,
  price,
  squareFeet,
  stories,
  bedrooms,
  bathrooms
}: PlanDetailBannerProps) => {
  return (
    <div className="bg-alto-blue py-10 text-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-6 lg:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{name}</h1>
            <p className="text-xl opacity-90">{specs}</p>
          </div>
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-center">
              <p className="text-2xl font-bold mb-1">{price}</p>
              <p className="text-sm opacity-80">Starting Price</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="text-center">
                <p className="font-semibold">{squareFeet}</p>
                <p className="text-xs opacity-80">Square Feet</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">{stories}</p>
                <p className="text-xs opacity-80">Stories</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">{bedrooms}</p>
                <p className="text-xs opacity-80">Bedrooms</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">{bathrooms}</p>
                <p className="text-xs opacity-80">Bathrooms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanDetailBanner;
