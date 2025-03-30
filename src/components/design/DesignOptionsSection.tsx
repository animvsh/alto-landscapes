
import { Link } from 'react-router-dom';
import { Home, Book } from 'lucide-react';

const DesignOptionsSection = () => {
  return (
    <div className="bg-alto-light-gray p-8 rounded-lg mb-16">
      <h3 className="text-2xl font-semibold text-alto-blue mb-6 text-center">Pick where you want to Start</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-white p-8 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
          <Home size={48} className="mx-auto mb-4 text-alto-accent" />
          <h4 className="text-xl font-semibold text-alto-blue mb-2">Floor Plans</h4>
          <p className="text-alto-dark-gray mb-4">Looking for ADU floor plans? Explore our standard plan library, or we can create a fully custom design just for you.</p>
          <Link to="/plans" className="text-alto-accent font-medium hover:underline">Floor Plans</Link>
        </div>
        
        <div className="bg-white p-8 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
          <Book size={48} className="mx-auto mb-4 text-alto-accent" />
          <h4 className="text-xl font-semibold text-alto-blue mb-2">Interior Design Packages</h4>
          <p className="text-alto-dark-gray mb-4">Our ADU prices include pre-selected interior design packages, making it easy for you to choose the perfect look for your ADU.</p>
          <Link to="/design/interior" className="text-alto-accent font-medium hover:underline">The Lookbook</Link>
        </div>
        
        <div className="bg-white p-8 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
          <Home size={48} className="mx-auto mb-4 text-alto-accent" />
          <h4 className="text-xl font-semibold text-alto-blue mb-2">Home Features</h4>
          <p className="text-alto-dark-gray mb-4">Discover the features included in our standard proposals and construction bids (yes, we've thought of everything—even the kitchen sink).</p>
          <Link to="/design/features" className="text-alto-accent font-medium hover:underline">Build Features</Link>
        </div>
      </div>
    </div>
  );
};

export default DesignOptionsSection;
