
import ServiceCard from '../ServiceCard';
import { ReactNode } from 'react';
import { Kitchen, Bath, Palmtree, Building } from '../icons/CustomIcons';
import { ClipboardCheck, Key } from 'lucide-react';

interface ServicesListProps {
  className?: string;
}

const ServicesList = ({ className }: ServicesListProps) => {
  const services = [
    {
      title: "Kitchen Remodeling",
      description: "Transform your kitchen with modern designs and premium materials.",
      icon: <Kitchen />,
      link: "/services/kitchen",
    },
    {
      title: "Bathroom Remodeling",
      description: "Create your perfect bathroom with our expert renovation services.",
      icon: <Bath />,
      link: "/services/bathroom",
    },
    {
      title: "Backyard Projects",
      description: "Enhance your outdoor living space with custom backyard solutions.",
      icon: <Palmtree />,
      link: "/services/backyard",
    },
    {
      title: "New Construction",
      description: "Build your dream home from the ground up with our comprehensive construction services.",
      icon: <Building />,
      link: "/services/new-construction",
    },
    {
      title: "Project Management",
      description: "Comprehensive oversight from concept to completion.",
      icon: <ClipboardCheck />,
      link: "/services/project-management",
    },
    {
      title: "Turn-Key Solutions",
      description: "End-to-end service for a hassle-free building experience.",
      icon: <Key />,
      link: "/services/turn-key",
    },
  ];

  return (
    <section className={`py-20 ${className || ''}`}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle mx-auto">
            Our full spectrum of services ensures a seamless building experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              icon={service.icon} 
              link={service.link} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
