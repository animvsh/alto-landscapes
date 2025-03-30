
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

interface City {
  name: string;
  link: string;
}

interface ServiceArea {
  region: string;
  cities: City[];
}

interface ServiceAreaGridProps {
  serviceAreas: ServiceArea[];
}

const ServiceAreaGrid = ({ serviceAreas }: ServiceAreaGridProps) => {
  return (
    <section className="py-20 bg-alto-light-gray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Areas We Serve</h2>
          <p className="section-subtitle mx-auto">
            Alto Builders specializes in ADU construction throughout these communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceAreas.map((area, index) => (
            <div key={index} className="bg-white p-6 rounded-lg card-shadow">
              <h3 className="text-xl font-semibold text-alto-blue mb-4">{area.region}</h3>
              <ul className="space-y-2">
                {area.cities.map((city, cityIndex) => (
                  <li key={cityIndex}>
                    <Link 
                      to={city.link} 
                      className="flex items-center text-alto-dark-gray hover:text-alto-blue transition-colors"
                    >
                      <MapPin size={14} className="mr-2" />
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaGrid;
