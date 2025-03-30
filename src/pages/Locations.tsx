
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CallToActionSection from '../components/CallToActionSection';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const Locations = () => {
  const serviceAreas = [
    {
      region: "San Fernando Valley",
      cities: [
        { name: "Woodland Hills", link: "/locations/woodland-hills" },
        { name: "Sherman Oaks", link: "/locations/sherman-oaks" },
        { name: "Studio City", link: "/locations/studio-city" },
        { name: "Encino", link: "/locations/encino" },
        { name: "Tarzana", link: "/locations/tarzana" },
        { name: "Northridge", link: "/locations/northridge" },
        { name: "Reseda", link: "/locations/reseda" },
      ]
    },
    {
      region: "West Los Angeles",
      cities: [
        { name: "Santa Monica", link: "/locations/santa-monica" },
        { name: "Venice", link: "/locations/venice" },
        { name: "Brentwood", link: "/locations/brentwood" },
        { name: "Pacific Palisades", link: "/locations/pacific-palisades" },
        { name: "Westwood", link: "/locations/westwood" },
        { name: "Century City", link: "/locations/century-city" },
        { name: "Mar Vista", link: "/locations/mar-vista" },
      ]
    },
    {
      region: "Central Los Angeles",
      cities: [
        { name: "Hollywood", link: "/locations/hollywood" },
        { name: "Silver Lake", link: "/locations/silver-lake" },
        { name: "Echo Park", link: "/locations/echo-park" },
        { name: "Los Feliz", link: "/locations/los-feliz" },
        { name: "Koreatown", link: "/locations/koreatown" },
        { name: "Downtown LA", link: "/locations/downtown-la" },
      ]
    },
    {
      region: "Ventura County",
      cities: [
        { name: "Thousand Oaks", link: "/locations/thousand-oaks" },
        { name: "Simi Valley", link: "/locations/simi-valley" },
        { name: "Camarillo", link: "/locations/camarillo" },
        { name: "Oxnard", link: "/locations/oxnard" },
        { name: "Ventura", link: "/locations/ventura" },
      ]
    },
  ];

  const featuredLocations = [
    {
      city: "Woodland Hills",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
      description: "Woodland Hills offers excellent opportunities for ADU development with its spacious lots and supportive zoning regulations. Our ADUs in this area often feature indoor-outdoor living spaces that take advantage of the beautiful climate.",
      link: "/locations/woodland-hills",
    },
    {
      city: "Santa Monica",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
      description: "Santa Monica's coastal living inspires our ADU designs with bright, airy spaces and eco-friendly features. The city's progressive ADU policies make it an excellent location for homeowners looking to maximize property value.",
      link: "/locations/santa-monica",
    },
    {
      city: "Silver Lake",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80",
      description: "Silver Lake's creative community and hillside terrain present unique design opportunities. Our ADUs in this neighborhood combine modern aesthetics with practical solutions for challenging topography.",
      link: "/locations/silver-lake",
    },
  ];

  return (
    <>
      <Navbar />
      <HeroSection 
        title="OUR SERVICE AREAS"
        subtitle="Alto Builders proudly serves Greater Los Angeles and Ventura County"
        backgroundImage="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Featured Locations</h2>
            <p className="section-subtitle mx-auto">
              Explore our work in these popular areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredLocations.map((location, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden card-shadow group">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={location.image} 
                    alt={`ADU in ${location.city}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-center mb-2">
                      <MapPin size={18} className="mr-2" />
                      <h3 className="text-xl font-semibold">{location.city}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-alto-dark-gray mb-4">{location.description}</p>
                  <Link 
                    to={location.link} 
                    className="inline-block text-alto-accent font-medium hover:underline"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="section-title">Local Expertise Matters</h2>
              <p className="text-alto-dark-gray mb-6">
                Building an ADU requires navigating local regulations, zoning requirements, and building codes that vary significantly from city to city. Alto Builders brings in-depth knowledge of these local regulations across Greater Los Angeles and Ventura County.
              </p>
              <p className="text-alto-dark-gray mb-6">
                Our team stays up-to-date with the latest policy changes and maintains relationships with local building departments, ensuring a smooth permitting process for your project.
              </p>
              <p className="text-alto-dark-gray">
                Beyond regulations, we understand the unique architectural styles, climate considerations, and property characteristics of each neighborhood we serve, allowing us to design ADUs that complement existing structures and maximize property value.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1589308902200-4f5f269dfb4f?auto=format&fit=crop&w=800&q=80" 
                alt="Los Angeles cityscape" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-alto-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Planning Regulations by Area</h2>
            <p className="section-subtitle mx-auto">
              Understanding the key ADU regulations in different regions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg card-shadow">
              <h3 className="text-xl font-semibold text-alto-blue mb-4">City of Los Angeles</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Maximum Size:</p>
                    <p className="text-sm text-alto-dark-gray">Up to 1,200 sq ft or 50% of the primary dwelling (whichever is less)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Parking:</p>
                    <p className="text-sm text-alto-dark-gray">No additional parking required if within 1/2 mile of public transit</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Owner Occupancy:</p>
                    <p className="text-sm text-alto-dark-gray">Not required for new ADUs until 2025</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg card-shadow">
              <h3 className="text-xl font-semibold text-alto-blue mb-4">Santa Monica</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Maximum Size:</p>
                    <p className="text-sm text-alto-dark-gray">Up to 1,000 sq ft, regardless of lot size</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Parking:</p>
                    <p className="text-sm text-alto-dark-gray">One parking space required, with several exemptions available</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Design Requirements:</p>
                    <p className="text-sm text-alto-dark-gray">Must complement the architectural style of the primary dwelling</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg card-shadow">
              <h3 className="text-xl font-semibold text-alto-blue mb-4">Ventura County</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Maximum Size:</p>
                    <p className="text-sm text-alto-dark-gray">Up to 1,200 sq ft for detached ADUs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Minimum Lot Size:</p>
                    <p className="text-sm text-alto-dark-gray">No minimum lot size requirement</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Setbacks:</p>
                    <p className="text-sm text-alto-dark-gray">4 ft from side and rear property lines</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg card-shadow">
              <h3 className="text-xl font-semibold text-alto-blue mb-4">San Fernando Valley</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Notable Benefits:</p>
                    <p className="text-sm text-alto-dark-gray">Larger lot sizes often allow for maximum ADU square footage</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Special Considerations:</p>
                    <p className="text-sm text-alto-dark-gray">Hillside regulations may apply in certain neighborhoods</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Common Styles:</p>
                    <p className="text-sm text-alto-dark-gray">Modern, ranch, and mid-century designs are popular in this region</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-alto-dark-gray mb-6">
              Regulations can change and vary by specific location. Contact us for the most up-to-date information for your property.
            </p>
            <Link to="/contact" className="btn-primary">
              Get Location-Specific Information
            </Link>
          </div>
        </div>
      </section>

      <CallToActionSection 
        title="Serving Your Neighborhood"
        subtitle="Schedule a consultation to discuss ADU opportunities in your specific location"
        buttonText="Contact Us Today"
        buttonLink="/contact"
      />

      <Footer />
    </>
  );
};

export default Locations;

function CheckCircle(props: { size: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={props.size} 
      height={props.size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
}
