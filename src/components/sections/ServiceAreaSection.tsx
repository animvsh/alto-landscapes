
import { Link } from 'react-router-dom';
import { ServiceAreaSectionProps } from './interfaces';

const ServiceAreaSection = ({ 
  title = "ADU Contractor Serving Greater Los Angeles & Ventura County",
  subtitle = "Alto Builders is your trusted ADU contractor in Los Angeles & Ventura County, offering full design, permit, and build services. Click below to see our proudly served service areas.",
  primaryButtonText = "Our Service Area",
  primaryButtonLink = "/locations",
  secondaryButtonText = "Contact Us",
  secondaryButtonLink = "/contact",
  className
}: ServiceAreaSectionProps) => {
  return (
    <section className={`py-20 bg-white ${className || ''}`}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle mx-auto">
            {subtitle}
          </p>
          <div className="mt-8 flex justify-center gap-6">
            <Link to={primaryButtonLink} className="btn-primary">
              {primaryButtonText}
            </Link>
            <Link to={secondaryButtonLink} className="btn-secondary">
              {secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection;
