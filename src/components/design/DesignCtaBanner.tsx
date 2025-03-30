
import { Link } from 'react-router-dom';

const DesignCtaBanner = () => {
  return (
    <section className="bg-alto-blue py-16 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">Want to learn more about your ADU Project?</h3>
          <p className="text-white/80 mb-8 text-lg">
            We'd love to help you understand your options and find the perfect ADU solution for your property.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-accent">Learn More</Link>
            <Link to="/plans" className="bg-transparent hover:bg-white/10 border border-white text-white font-medium py-3 px-6 rounded-full transition-all duration-300">
              Browse Floor Plans
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignCtaBanner;
