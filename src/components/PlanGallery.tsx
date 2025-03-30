
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize, X } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from 'framer-motion';

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
        <motion.div 
          className="overflow-hidden rounded-lg shadow-lg aspect-[4/3] bg-alto-light-gray"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={`${planName} view ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.button 
            className="absolute top-2 right-2 bg-white/80 p-2 rounded-md hover:bg-white transition-colors z-10"
            onClick={() => setLightboxOpen(true)}
            aria-label="View full size image"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Maximize size={20} className="text-alto-blue" />
          </motion.button>
        </motion.div>
        
        {images.length > 1 && (
          <>
            <motion.button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all hover:scale-110"
              onClick={prevImage}
              aria-label="Previous image"
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronLeft size={24} className="text-alto-blue" />
            </motion.button>
            <motion.button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all hover:scale-110"
              onClick={nextImage}
              aria-label="Next image"
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronRight size={24} className="text-alto-blue" />
            </motion.button>
          </>
        )}
        
        <motion.div 
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/60 px-3 py-1 rounded-full text-white text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {currentImageIndex + 1} / {images.length}
        </motion.div>
      </div>
      
      {images.length > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ScrollArea className="mt-4 h-24">
            <div className="flex space-x-2">
              {images.map((image, index) => (
                <motion.button
                  key={index}
                  className={`flex-shrink-0 rounded-md overflow-hidden transition-all duration-300 ${
                    currentImageIndex === index 
                      ? 'ring-2 ring-alto-blue ring-offset-2' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`View image ${index + 1}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img
                    src={image}
                    alt={`${planName} thumbnail ${index + 1}`}
                    className="w-24 h-20 object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </ScrollArea>
        </motion.div>
      )}
      
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="relative max-w-7xl max-h-screen p-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[currentImageIndex]}
                alt={`${planName} full view`}
                className="max-w-full max-h-[90vh] object-contain"
              />
              <motion.button
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxOpen(false);
                }}
                aria-label="Close lightbox"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} className="text-white" />
              </motion.button>
              
              {images.length > 1 && (
                <>
                  <motion.button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    aria-label="Previous image"
                    whileHover={{ scale: 1.1, x: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft size={30} className="text-white" />
                  </motion.button>
                  <motion.button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    aria-label="Next image"
                    whileHover={{ scale: 1.1, x: 3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight size={30} className="text-white" />
                  </motion.button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PlanGallery;
