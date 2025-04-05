
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { bathroomProjects } from '../../data/bathroomProjectsData';
import { ChevronLeft, ChevronRight, MapPin, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import CallToActionSection from '../CallToActionSection';

const BathroomProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [project, setProject] = useState(
    bathroomProjects.find(p => p.id === projectId) || bathroomProjects[0]
  );

  useEffect(() => {
    // Find the project based on the projectId from URL params
    const foundProject = bathroomProjects.find(p => p.id === projectId);
    if (foundProject) {
      setProject(foundProject);
      setCurrentImageIndex(0); // Reset image index when project changes
      window.scrollTo(0, 0);
    }
  }, [projectId]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  if (!project) {
    return (
      <div className="container-custom py-20">
        <p>Project not found.</p>
        <Link to="/projects" className="text-alto-accent hover:underline">
          Return to Projects
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="pt-28 pb-16 bg-alto-light-gray">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Image Gallery */}
            <motion.div 
              className="md:w-3/5 relative rounded-lg overflow-hidden card-shadow bg-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-[500px] bg-alto-blue/5">
                {project.images.map((img, idx) => (
                  <motion.div
                    key={idx}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: idx === currentImageIndex ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img 
                      src={img} 
                      alt={`${project.title} - Image ${idx + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {project.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        idx === currentImageIndex ? 'bg-white' : 'bg-white/40'
                      }`}
                      aria-label={`View image ${idx + 1}`}
                    />
                  ))}
                </div>

                <button 
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6 text-alto-blue" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6 text-alto-blue" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-3">
                  <MapPin className="h-5 w-5 text-alto-accent mr-2" />
                  <span className="text-alto-dark-gray">{project.location}</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-alto-blue mb-2">
                  {project.title}
                </h1>
              </div>
            </motion.div>

            {/* Project Details */}
            <motion.div 
              className="md:w-2/5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-lg p-6 mb-6 card-shadow h-full">
                <h2 className="text-xl font-semibold text-alto-blue mb-4">Project Features</h2>
                <ul className="space-y-3 mb-6">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-alto-accent mr-2 shrink-0 mt-1" />
                      <span className="text-alto-dark-gray">{feature}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="text-xl font-semibold text-alto-blue mt-6 mb-3">About This Project</h2>
                <p className="text-alto-dark-gray">{project.description}</p>
                
                <div className="mt-8">
                  <Link 
                    to="/contact" 
                    className="btn-primary w-full text-center block"
                  >
                    Start Your Bathroom Renovation
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-alto-blue mb-3">Our Bathroom Remodeling Process</h2>
            <p className="text-alto-dark-gray max-w-3xl mx-auto">
              We ensure a seamless renovation experience from concept to completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-alto-light-gray p-6 rounded-lg text-center">
              <div className="bg-alto-blue w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-alto-blue mb-2">Design & Planning</h3>
              <p className="text-alto-dark-gray">We collaborate closely with you to understand your vision and create detailed plans with 3D renderings.</p>
            </div>
            
            <div className="bg-alto-light-gray p-6 rounded-lg text-center">
              <div className="bg-alto-blue w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-alto-blue mb-2">Material Selection</h3>
              <p className="text-alto-dark-gray">Choose from premium fixtures, tiles, vanities and more with guidance from our design experts.</p>
            </div>
            
            <div className="bg-alto-light-gray p-6 rounded-lg text-center">
              <div className="bg-alto-blue w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-alto-blue mb-2">Expert Construction</h3>
              <p className="text-alto-dark-gray">Our skilled team handles every aspect of construction with attention to detail and quality craftsmanship.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-alto-blue text-white py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Bathroom Transformation?</h2>
              <p className="text-white/80 max-w-2xl">
                Our team is ready to help you create the bathroom of your dreams. Let's discuss your project and make it a reality.
              </p>
            </div>
            <div className="md:w-1/3 text-center md:text-right">
              <Link to="/contact" className="inline-block bg-white text-alto-blue px-8 py-3 rounded-full font-medium hover:bg-alto-accent hover:text-white transition-colors">
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-alto-blue mb-8 text-center">More Bathroom Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bathroomProjects
              .filter(p => p.id !== projectId)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link 
                  key={relatedProject.id} 
                  to={`/projects/bathroom/${relatedProject.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg overflow-hidden card-shadow transition-transform transform group-hover:-translate-y-1">
                    <div className="h-56 overflow-hidden">
                      <img 
                        src={relatedProject.images[0]} 
                        alt={relatedProject.title} 
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-alto-blue">{relatedProject.title}</h3>
                      <p className="text-alto-accent text-sm">{relatedProject.location}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      <CallToActionSection 
        title="Transform Your Bathroom With Us"
        subtitle="Contact us today to schedule your free design consultation"
        buttonText="Start Your Project"
        buttonLink="/contact"
      />
    </>
  );
};

export default BathroomProjectDetail;
