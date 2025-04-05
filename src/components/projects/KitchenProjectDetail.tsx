
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import PlanGallery from '../PlanGallery';

interface KitchenProjectDetailProps {
  title: string;
  location: string;
  images: string[];
}

const KitchenProjectDetail = ({ title, location, images }: KitchenProjectDetailProps) => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <PlanGallery images={images} planName={title} />
          </div>
          
          <div>
            <h2 className="section-title mb-6">{title}</h2>
            <p className="text-lg text-alto-dark-gray mb-8">
              At Alto Builders, we understand the kitchen is more than just a room; it's the heart of your home where people gather. 
              Our team is dedicated to transforming your kitchen to reflect your lifestyle and needs. With our expertise in kitchen 
              remodeling, we introduce features that enhance its beauty, functionality, and safety.
            </p>
            
            <p className="text-lg text-alto-dark-gray mb-8">
              Our craftsmen and design specialists are adept at bringing your ideas to life, beginning with a complimentary 
              design consultation. We specialize in structural work, custom cabinetry, stone fabrication, tile installation, 
              and appliance fitting. Our extensive knowledge of materials ensures your kitchen remains not only aesthetically 
              pleasing but also durable and low maintenance.
            </p>
            
            <div className="bg-alto-light-gray p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Starting on the Right Foot</h3>
              <p className="text-alto-dark-gray mb-4">
                Are you facing the common dilemma of never having enough storage, no matter how spacious your home? 
                Our expert team addresses this issue by combining innovative design with maximum functionality, utilizing 
                every inch of your space. Leveraging Chief Architect, we create detailed 3D renderings that allow you to 
                visualize custom millwork and unique cabinetry solutions designed specifically for your needs.
              </p>
              <p className="text-alto-dark-gray">
                Paired with Buildertrend, our project management software, we ensure seamless communication, precise scheduling, 
                and complete transparency throughout the entire renovation process. Whether it's a kitchen renovation or another 
                home improvement project, we deliver outstanding craftsmanship, elevating your home's style, functionality, and value.
              </p>
            </div>
            
            <div className="border-t pt-6 space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="text-alto-blue mt-1" size={20} />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:8188077587" className="text-alto-blue hover:underline">818-807-7587</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="text-alto-blue mt-1" size={20} />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:info@altobuilds.com" className="text-alto-blue hover:underline">info@altobuilds.com</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="text-alto-blue mt-1" size={20} />
                <div>
                  <p className="font-medium">Locations</p>
                  <p className="text-alto-dark-gray">5450 Lake Lindero Dr. Agoura Hills, CA 91301</p>
                  <p className="text-alto-dark-gray">41969 Margarita Rd Temecula, CA 92591</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button asChild className="btn-primary">
                <Link to="/contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KitchenProjectDetail;
