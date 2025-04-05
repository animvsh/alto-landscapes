
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import CallToActionSection from '../../components/CallToActionSection';
import BathroomProjectsSection from '../../components/projects/BathroomProjectsSection';
import { Card, CardContent } from "@/components/ui/card";
import { Check } from 'lucide-react';
import PageTransition from '../../components/PageTransition';

const BathroomRemodeling = () => {
  const benefits = [
    "Increased home value and buyer appeal",
    "Improved functionality and storage",
    "Enhanced energy and water efficiency",
    "Better lighting and ventilation",
    "Creation of a personal spa-like retreat",
    "Elimination of mold, mildew and water damage",
    "Accommodation for aging in place or accessibility",
    "Updated style and modern aesthetics"
  ];

  return (
    <PageTransition>
      <Navbar />
      
      <HeroSection 
        title="BATHROOM REMODELING"
        subtitle="Transform your bathroom into a functional and beautiful space"
        backgroundImage="/lovable-uploads/b5cfe888-e612-4091-8c55-46069e2c7af0.png"
      />
      
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-alto-blue mb-6">Bathroom Remodeling Excellence</h2>
              <p className="text-alto-dark-gray mb-6">
                Bathroom remodeling frequently tops the list of priorities for our clients. While bathrooms are fundamentally practical spaces, there's no need to limit them to just functional design. When collaborating with our team, we focus on maximizing every inch of your bathroom space.
              </p>
              <p className="text-alto-dark-gray mb-6">
                We take the time to understand your vision, offering options that enhance the final result while adhering to your budget. Remodeling a bathroom can be an exciting and creative endeavor, allowing you to tailor the ambiance uniquely to your preferences.
              </p>
              <p className="text-alto-dark-gray">
                Despite often being smaller spaces, bathrooms hold limitless potential for customization. We are eager to get inventive and help you realize your dream bathroom.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/e5557582-9fca-493d-be19-df092fa4a489.png" 
                  alt="Luxury bathroom vanity" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/ac5d6273-341c-4af1-b58a-f0a6d0ec96df.png" 
                  alt="Modern bathroom shower" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/19c1bef5-091d-45ef-9f02-5700f10efaf8.png" 
                  alt="Freestanding bathtub" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/535cc03f-b780-444f-8aba-65e863541e13.png" 
                  alt="Double vanity bathroom" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-alto-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-alto-blue mb-4">Benefits of Bathroom Remodeling</h2>
            <p className="text-xl text-alto-dark-gray max-w-3xl mx-auto">
              Investing in your bathroom offers numerous advantages beyond just aesthetics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white h-full">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Check size={20} className="text-alto-accent mr-3 mt-1 flex-shrink-0" />
                    <p className="text-alto-dark-gray">{benefit}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/c21b2613-e775-436c-b962-eccd213a044b.png" 
                    alt="Chief Architect Logo" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/db2ae91a-2a43-4620-9356-8dfdbe5e9f0d.png" 
                    alt="Buildertrend Logo" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-alto-blue mb-6">Starting on the Right Foot</h2>
              <p className="text-alto-dark-gray mb-6">
                Struggling to turn your bathroom into the relaxing sanctuary you've always wanted? Our expert team specializes in bathroom remodeling, designing spaces that combine functionality, elegance, and comfort.
              </p>
              <p className="text-alto-dark-gray mb-6">
                Using Chief Architect, we create detailed 3D renderings so you can visualize every element of your new bathroom, from custom vanities to luxurious showers, before construction even begins.
              </p>
              <p className="text-alto-dark-gray">
                With Buildertrend, our project management software, we ensure seamless communication, accurate scheduling, and full transparency, making the entire remodeling process smooth and stress-free. Whether you're upgrading your fixtures or reimagining the entire space, we deliver exceptional craftsmanship to transform your bathroom into a serene retreat.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <BathroomProjectsSection />
      
      <CallToActionSection 
        title="Ready to Transform Your Bathroom?"
        subtitle="Contact us today to schedule your free consultation"
        buttonText="Start Your Project"
        buttonLink="/contact"
      />
      
      <Footer />
    </PageTransition>
  );
};

export default BathroomRemodeling;
