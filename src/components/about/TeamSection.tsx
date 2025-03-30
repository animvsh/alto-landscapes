
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";

const TeamSection = () => {
  return (
    <div className="text-center mb-12">
      <h2 className="section-title">Meet Our Team</h2>
      <p className="section-subtitle mx-auto mb-10">
        The dedicated professionals behind Alto Builders
      </p>
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-8 rounded-lg card-shadow">
          <img 
            src="/lovable-uploads/103a79ba-0e63-4e5c-ba60-296a27569ab2.png" 
            alt="Paul and Simon Manfredi, Alto Builders Co-Founders" 
            className="w-full rounded-lg shadow-lg mb-6"
          />
          <p className="text-center text-lg font-semibold text-alto-blue mb-2">Paul and Simon Manfredi</p>
          <p className="text-center text-alto-dark-gray mb-6">Co-Founders, Alto Builders</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-alto-blue mb-3">Paul Manfredi</h3>
              <p className="text-alto-dark-gray mb-1 font-medium">Co-Founder</p>
              <p className="text-alto-dark-gray mb-4">
                With over 30 years of expertise in the building industry, Paul stands as a cornerstone of the Alto team. His journey into construction, a path shaped by a deep, familial legacy, began under the guidance of his father.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-alto-blue mb-3">Simon Manfredi</h3>
              <p className="text-alto-dark-gray mb-1 font-medium">Co-Founder</p>
              <p className="text-alto-dark-gray mb-4">
                Simon's building journey, enriched by a distinguished education from the University of British Columbia's School of Architecture and Landscape (SALA) & the Sauder School of Business, mirrors the foundational principles instilled in him by his father.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
