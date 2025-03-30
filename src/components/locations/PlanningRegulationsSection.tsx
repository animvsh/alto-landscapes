
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from '../CheckCircle';

const PlanningRegulationsSection = () => {
  return (
    <section className="py-20 bg-alto-light-gray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Planning Regulations by Area</h2>
          <p className="section-subtitle mx-auto">
            Understanding the key ADU regulations in different regions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg card-shadow">
            <h3 className="text-xl font-semibold text-alto-blue mb-4">City of Los Angeles</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="text-alto-accent mr-2 mt-1">
                  <CheckCircle size={16} />
                </div>
                <div>
                  <p className="font-medium">Maximum Size:</p>
                  <p className="text-sm text-alto-dark-gray">Up to 1,200 sq ft or 50% of the primary dwelling (whichever is less)</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="text-alto-accent mr-2 mt-1">
                  <CheckCircle size={16} />
                </div>
                <div>
                  <p className="font-medium">Parking:</p>
                  <p className="text-sm text-alto-dark-gray">No additional parking required if within 1/2 mile of public transit</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="text-alto-accent mr-2 mt-1">
                  <CheckCircle size={16} />
                </div>
                <div>
                  <p className="font-medium">Owner Occupancy:</p>
                  <p className="text-sm text-alto-dark-gray">Not required for new ADUs until 2025</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg card-shadow">
            <h3 className="text-xl font-semibold text-alto-blue mb-4">Santa Monica</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="text-alto-accent mr-2 mt-1">
                  <CheckCircle size={16} />
                </div>
                <div>
                  <p className="font-medium">Maximum Size:</p>
                  <p className="text-sm text-alto-dark-gray">Up to 1,000 sq ft, regardless of lot size</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="text-alto-accent mr-2 mt-1">
                  <CheckCircle size={16} />
                </div>
                <div>
                  <p className="font-medium">Parking:</p>
                  <p className="text-sm text-alto-dark-gray">One parking space required, with several exemptions available</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="text-alto-accent mr-2 mt-1">
                  <CheckCircle size={16} />
                </div>
                <div>
                  <p className="font-medium">Design Requirements:</p>
                  <p className="text-sm text-alto-dark-gray">Must complement the architectural style of the primary dwelling</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg card-shadow">
            <h3 className="text-xl font-semibold text-alto-blue mb-4">Ventura County</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="text-alto-accent mr-2 mt-1">
                  <CheckCircle size={16} />
                </div>
                <div>
                  <p className="font-medium">Maximum Size:</p>
                  <p className="text-sm text-alto-dark-gray">Up to 1,200 sq ft for detached ADUs</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="text-alto-accent mr-2 mt-1">
                  <CheckCircle size={16} />
                </div>
                <div>
                  <p className="font-medium">Minimum Lot Size:</p>
                  <p className="text-sm text-alto-dark-gray">No minimum lot size requirement</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="text-alto-accent mr-2 mt-1">
                  <CheckCircle size={16} />
                </div>
                <div>
                  <p className="font-medium">Setbacks:</p>
                  <p className="text-sm text-alto-dark-gray">4 ft from side and rear property lines</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg card-shadow">
            <h3 className="text-xl font-semibold text-alto-blue mb-4">San Fernando Valley</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="text-alto-accent mr-2 mt-1">
                  <CheckCircle size={16} />
                </div>
                <div>
                  <p className="font-medium">Notable Benefits:</p>
                  <p className="text-sm text-alto-dark-gray">Larger lot sizes often allow for maximum ADU square footage</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="text-alto-accent mr-2 mt-1">
                  <CheckCircle size={16} />
                </div>
                <div>
                  <p className="font-medium">Special Considerations:</p>
                  <p className="text-sm text-alto-dark-gray">Hillside regulations may apply in certain neighborhoods</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="text-alto-accent mr-2 mt-1">
                  <CheckCircle size={16} />
                </div>
                <div>
                  <p className="font-medium">Common Styles:</p>
                  <p className="text-sm text-alto-dark-gray">Modern, ranch, and mid-century designs are popular in this region</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-alto-dark-gray mb-6">
            Regulations can change and vary by specific location. Contact us for the most up-to-date information for your property.
          </p>
          <Link to="/contact" className="btn-primary">
            Get Location-Specific Information
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlanningRegulationsSection;
