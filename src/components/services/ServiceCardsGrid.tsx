
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, ChefHat, Bath, Palmtree, Home } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgImage: string;
  link: string;
}

const serviceCards: ServiceCard[] = [
  {
    title: "Kitchen Remodeling",
    description: "Transform your kitchen into a beautiful and functional space that meets your unique needs with our expert design-build services.",
    icon: <ChefHat className="h-10 w-10" />,
    bgImage: "/lovable-uploads/a9f018d8-dc43-4cbf-8531-2e2ebfb5af32.png",
    link: "/services/kitchen"
  },
  {
    title: "Bathroom Remodeling",
    description: "Create a luxurious bathroom retreat that combines style, functionality, and innovative design tailored to your preferences.",
    icon: <Bath className="h-10 w-10" />,
    bgImage: "/lovable-uploads/d33dd254-8f59-4d6a-a2bc-62328b665b2d.png",
    link: "/services/bathroom"
  },
  {
    title: "Backyard Projects",
    description: "Maximize your outdoor living space with custom patios, decks, outdoor kitchens, and landscaping solutions.",
    icon: <Palmtree className="h-10 w-10" />,
    bgImage: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&w=800&q=80",
    link: "/services/backyard"
  },
  {
    title: "New Construction",
    description: "Build your dream home from the ground up with our comprehensive design-build services and expert craftsmanship.",
    icon: <Home className="h-10 w-10" />,
    bgImage: "https://images.unsplash.com/photo-1590725121839-892b458a74fe?auto=format&fit=crop&w=800&q=80",
    link: "/services/new-construction"
  }
];

const ServiceCardsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      {serviceCards.map((service, index) => (
        <ScrollReveal 
          key={index}
          animation="zoom"
          delay={index * 0.15}
          className="h-full"
        >
          <Link to={service.link} className="block h-full">
            <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-500 group border-0 shadow-lg">
              <div 
                className="h-64 relative overflow-hidden"
                style={{
                  backgroundImage: `url(${service.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 transition-all duration-500 group-hover:from-black/90">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                </div>
                <div className="absolute top-6 right-6 bg-white/90 p-3 rounded-full shadow-lg">
                  {service.icon}
                </div>
              </div>
              <CardContent className="p-6 bg-gradient-to-br from-white to-alto-light-gray/30">
                <p className="text-alto-dark-gray mb-4">{service.description}</p>
                <div className="flex items-center text-alto-accent font-medium group-hover:translate-x-1 transition-transform duration-300">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:animate-pulse" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </ScrollReveal>
      ))}
    </div>
  );
};

export default ServiceCardsGrid;
