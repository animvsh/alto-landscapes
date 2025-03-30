
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-6 mb-10">
      <div className="flex items-start">
        <div className="text-alto-blue mr-4 mt-1">
          <MapPin size={24} />
        </div>
        <div>
          <h3 className="font-semibold mb-1">Address</h3>
          <p className="text-alto-dark-gray">
            328 S La Brea Ave<br />
            Los Angeles, CA 90038
          </p>
        </div>
      </div>
      
      <div className="flex items-start">
        <div className="text-alto-blue mr-4 mt-1">
          <Phone size={24} />
        </div>
        <div>
          <h3 className="font-semibold mb-1">Phone</h3>
          <p className="text-alto-dark-gray">
            <a href="tel:8188077587" className="hover:text-alto-blue transition-colors">
              818-807-7587
            </a>
          </p>
        </div>
      </div>
      
      <div className="flex items-start">
        <div className="text-alto-blue mr-4 mt-1">
          <Mail size={24} />
        </div>
        <div>
          <h3 className="font-semibold mb-1">Email</h3>
          <p className="text-alto-dark-gray">
            <a href="mailto:info@altobuilds.com" className="hover:text-alto-blue transition-colors">
              info@altobuilds.com
            </a>
          </p>
        </div>
      </div>
      
      <div className="flex items-start">
        <div className="text-alto-blue mr-4 mt-1">
          <Clock size={24} />
        </div>
        <div>
          <h3 className="font-semibold mb-1">Office Hours</h3>
          <p className="text-alto-dark-gray">
            Monday - Friday: 8:30 AM - 5:30 PM<br />
            Saturday: By appointment<br />
            Sunday: Closed
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
