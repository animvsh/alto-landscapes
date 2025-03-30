
import { Link } from 'react-router-dom';

const DesignInfoBox = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md mb-16">
      <p className="text-alto-dark-gray mb-4">
        Alto ADU is here to help you create the ideal accessory dwelling unit for your property. Whether you're looking to design a custom floor plan to match your vision or add multiple units by attaching or stacking them, we've got you covered. Contact us today to discuss your ideas and bring your dream project to life. Our talented in-house drafting team is ready and excited to work on your custom ADU design.
      </p>
      <p className="text-alto-dark-gray">
        For inspiration, check out our plans for 1 Bedroom, 2 Bedroom, 3 Bedroom, 4 Bedroom, and Two-Story ADUs.
      </p>
      <div className="mt-6 text-center">
        <Link to="/contact" className="btn-primary">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default DesignInfoBox;
