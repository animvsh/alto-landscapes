
import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    location: string;
    image: string;
    description?: string;
  };
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden bg-white rounded-xl">
        <div className="relative">
          <div className="absolute top-4 right-4 z-10">
            <button 
              onClick={onClose}
              className="bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
            >
              <X size={24} className="text-alto-blue" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="h-full">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover aspect-square md:aspect-auto"
              />
            </div>
            
            <div className="p-6 md:p-10 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-alto-blue mb-2">
                  {project.title}
                </h2>
                <p className="text-alto-dark-gray mb-6">
                  {project.location}
                </p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="prose max-w-none mb-8"
                >
                  {project.description ? (
                    <p className="text-lg">{project.description}</p>
                  ) : (
                    <>
                      <p className="text-lg mb-4">
                        This elegant Accessory Dwelling Unit showcases our commitment to sophisticated design and 
                        quality craftsmanship. Featuring modern amenities and thoughtful space utilization, 
                        this ADU perfectly balances luxury and functionality.
                      </p>
                      <p className="text-lg">
                        The interior boasts premium finishes, ample natural light, and seamless 
                        indoor-outdoor flow, creating a comfortable living environment that complements 
                        the main residence while standing as a distinct, refined space.
                      </p>
                    </>
                  )}
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-auto"
              >
                <div className="bg-alto-light-gray p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-2">Project Highlights</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="text-alto-accent mr-2">•</div>
                      <span>Premium materials and finishes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-alto-accent mr-2">•</div>
                      <span>Energy-efficient design</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-alto-accent mr-2">•</div>
                      <span>Customized to client specifications</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
