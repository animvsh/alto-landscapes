
import { Link } from 'react-router-dom';

const ServiceAreaSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">ADU Contractor Serving Greater Los Angeles & Ventura County</h2>
          <p className="section-subtitle mx-auto">
            Alto Builders is your trusted ADU contractor in Los Angeles & Ventura County, offering full design, permit, and build services. Click below to see our proudly served service areas.
          </p>
          <div className="mt-8 flex justify-center gap-6">
            <Link to="/locations" className="btn-primary">
              Our Service Area
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection;
