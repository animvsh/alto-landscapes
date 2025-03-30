
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const TeamHiringSection = () => {
  return (
    <div className="bg-alto-light-gray rounded-lg p-8 lg:p-12 mb-12">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" 
            alt="Team at work" 
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-2xl lg:text-3xl font-semibold text-alto-blue mb-4">Join Our Team</h2>
          <p className="text-alto-dark-gray mb-6">
            Alto Builders is always looking for talented professionals who are passionate about construction, design, and creating exceptional living spaces. If you're interested in joining our team, we'd love to hear from you.
          </p>
          <div className="space-y-4 mb-6">
            <div className="flex items-start">
              <div className="bg-alto-blue text-white rounded-full h-6 w-6 flex items-center justify-center text-sm mr-3 mt-1">1</div>
              <div>
                <h3 className="font-semibold text-alto-blue mb-1">Commitment to Excellence</h3>
                <p className="text-alto-dark-gray">We seek team members who take pride in their work and strive for excellence.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-alto-blue text-white rounded-full h-6 w-6 flex items-center justify-center text-sm mr-3 mt-1">2</div>
              <div>
                <h3 className="font-semibold text-alto-blue mb-1">Collaborative Spirit</h3>
                <p className="text-alto-dark-gray">We value professionals who work well in teams and contribute to our positive culture.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-alto-blue text-white rounded-full h-6 w-6 flex items-center justify-center text-sm mr-3 mt-1">3</div>
              <div>
                <h3 className="font-semibold text-alto-blue mb-1">Growth Mindset</h3>
                <p className="text-alto-dark-gray">We encourage continuous learning and professional development.</p>
              </div>
            </div>
          </div>
          <Button asChild className="bg-alto-blue hover:bg-alto-light-blue">
            <Link to="/contact">Contact Us About Careers</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeamHiringSection;
