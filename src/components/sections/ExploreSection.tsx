
import { Link } from 'react-router-dom';
import { BookOpen, DollarSign, FileText, Ruler, Calendar, Home } from 'lucide-react';
import InfoCard from '../InfoCard';

const ExploreSection = () => {
  return (
    <section id="explore-section" className="py-20 bg-alto-light-gray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Begin Your ADU Journey</h2>
          <p className="section-subtitle mx-auto">
            Building an ADU can oftentimes be a stressful and confusing process. We're here to make it as clear, efficient, and on budget as possible. Start exploring our pages below to understand more information around costs, design, and regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/adu-basics" className="block">
            <InfoCard 
              title="ADU Basics" 
              description="Begin here to explore the fundamentals of building your own ADU."
              icon={<BookOpen size={24} />}
            />
          </Link>
          <Link to="/adu-costs" className="block">
            <InfoCard 
              title="ADU Costs" 
              description="Gain insight into the cost breakdown of building an ADU."
              icon={<DollarSign size={24} />}
            />
          </Link>
          <Link to="/city-regulations" className="block">
            <InfoCard 
              title="City Regulations" 
              description="Cities love rules. Check your city's regulations around ADUs here."
              icon={<FileText size={24} />}
            />
          </Link>
          <Link to="/design" className="block">
            <InfoCard 
              title="Design" 
              description="Choose from one of our expertly pre-designed packages."
              icon={<Ruler size={24} />}
            />
          </Link>
          <Link to="/process" className="block">
            <InfoCard 
              title="Our Process" 
              description="Learn about our meticulous construction process powered by BuilderTrend."
              icon={<Calendar size={24} />}
            />
          </Link>
          <Link to="/floor-plans" className="block">
            <InfoCard 
              title="Floor Plans" 
              description="Browse our library of floor plans or meet a design engineer to build yours."
              icon={<Home size={24} />}
            />
          </Link>
        </div>

        <div className="mt-12 text-center">
          <Link to="/contact" className="btn-primary">
            Request Discovery Call
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
