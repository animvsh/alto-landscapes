
import { Link } from 'react-router-dom';
import { DollarSign, Home, Map, Building, Ruler, Zap } from 'lucide-react';
import InfoCard from '../InfoCard';
import { AduBenefitsSectionProps } from './interfaces';

const AduBenefitsSection = ({
  title = "Why Build an ADU?",
  subtitle = "Building an ADU offers numerous benefits for homeowners",
  buttonText = "Learn More",
  buttonLink = "/adu-benefits",
  className
}: AduBenefitsSectionProps) => {
  return (
    <section className={`py-20 bg-alto-light-gray ${className || ''}`}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InfoCard 
            title="Relaxed Setbacks" 
            description="Makes more of your property available for building."
            icon={<Ruler size={24} />}
          />
          <InfoCard 
            title="No Parking Requirements" 
            description="Enables you to rent your unit with a parking spot."
            icon={<Map size={24} />}
          />
          <InfoCard 
            title="Reduced City Fees" 
            description="Enjoy reduced construction & plan check fees."
            icon={<DollarSign size={24} />}
          />
          <InfoCard 
            title="Multiple ADUs" 
            description="Build up to 8 ADUs on a multifamily lot and up to 3 on a single family lot."
            icon={<Building size={24} />}
          />
          <InfoCard 
            title="Faster Approvals" 
            description="Cities have accelerated their approval process for permits."
            icon={<Zap size={24} />}
          />
          <InfoCard 
            title="Add Square Footage" 
            description="Increase the value of your home through additional square footage."
            icon={<Home size={24} />}
          />
        </div>

        <div className="mt-12 text-center">
          <Link to={buttonLink} className="btn-secondary">
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AduBenefitsSection;
