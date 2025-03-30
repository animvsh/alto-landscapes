
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";

interface PlanGalleryProps {
  images: string[];
  planName: string;
}

const PlanGallery = ({ images, planName }: PlanGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="mb-8">
      <div className="relative">
        <div className="overflow-hidden rounded-lg shadow-lg aspect-[4/3] bg-alto-light-gray">
          <img
            src={images[currentImageIndex]}
            alt={`${planName} view ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <button 
            className="absolute top-2 right-2 bg-white/80 p-2 rounded-md hover:bg-white transition-colors z-10"
            onClick={() => setLightboxOpen(true)}
            aria-label="View full size image"
          >
            <Maximize size={20} className="text-alto-blue" />
          </button>
        </div>
        
        {images.length > 1 && (
          <>
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all hover:scale-110"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} className="text-alto-blue" />
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all hover:scale-110"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight size={24} className="text-alto-blue" />
            </button>
          </>
        )}
        
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/40 px-3 py-1 rounded-full text-white text-sm">
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>
      
      {images.length > 1 && (
        <ScrollArea className="mt-4 h-24">
          <div className="flex space-x-2">
            {images.map((image, index) => (
              <button
                key={index}
                className={`flex-shrink-0 rounded-md overflow-hidden transition-all ${
                  currentImageIndex === index 
                    ? 'ring-2 ring-alto-blue ring-offset-2' 
                    : 'opacity-70 hover:opacity-100'
                }`}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`View image ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`${planName} thumbnail ${index + 1}`}
                  className="w-24 h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </ScrollArea>
      )}
      
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center" onClick={() => setLightboxOpen(false)}>
          <div className="relative max-w-7xl max-h-screen p-4">
            <img
              src={images[currentImageIndex]}
              alt={`${planName} full view`}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close lightbox"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanGallery;
