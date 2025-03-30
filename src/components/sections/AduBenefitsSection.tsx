
import { Link } from 'react-router-dom';
import { DollarSign, Home, Map, Building, Ruler, Zap } from 'lucide-react';
import InfoCard from '../InfoCard';

const AduBenefitsSection = () => {
  return (
    <section className="py-20 bg-alto-light-gray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Why Build an ADU?</h2>
          <p className="section-subtitle mx-auto">
            Building an ADU offers numerous benefits for homeowners
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
          <Link to="/adu-benefits" className="btn-secondary">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AduBenefitsSection;
