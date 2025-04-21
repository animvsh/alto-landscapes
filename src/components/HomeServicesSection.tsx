
import { Link } from "react-router-dom";

// Service images and content (update these as desired)
const services = [
  {
    title: "Kitchen Remodeling",
    description: "Transform your kitchen with modern designs and premium materials.",
    imageSrc: "/lovable-uploads/17929c0c-4021-439b-9cf2-e0dedb676b79.png",
    link: "/services/kitchen",
  },
  {
    title: "Bathroom Remodeling",
    description: "Create your perfect bathroom with our expert renovation services.",
    imageSrc: "/lovable-uploads/582129ba-ae8e-4b70-94ff-bd16281b02d0.png",
    link: "/services/bathroom",
  },
  {
    title: "ADU Construction",
    description: "Add value to your property with a custom accessory dwelling unit.",
    imageSrc: "/lovable-uploads/d3cf4ce7-3f97-4189-96aa-90b3c9bd790d.png",
    link: "/services/adu",
  },
  {
    title: "Full House Remodeling",
    description: "Revitalize your entire home with our comprehensive remodeling services.",
    imageSrc: "/lovable-uploads/972810d9-7266-4f20-be2c-99f10a4e8746.png",
    link: "/services/remodeling",
  },
  {
    title: "Garage Conversions",
    description: "Unlock the potential of your garage and expand your living space.",
    imageSrc: "/lovable-uploads/674414f0-02ff-440d-9196-b0d8e9d35cb6.png",
    link: "/services/adu", // adjust if you want a dedicated garage conversions page
  },
  {
    title: "Custom New Construction",
    description: "Build the custom home or space you’ve always imagined.",
    imageSrc: "/lovable-uploads/537cc03f-b780-444f-8aba-65e863541e13.png", // Pick/update image as needed
    link: "/services/design", // adjust if needed
  },
];

const HomeServicesSection = () => (
  <section className="bg-alto-light-gray py-20">
    <div className="container-custom">
      <div className="text-center mb-12">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle mx-auto">
          Cutting-edge remodeling and construction services across Los Angeles
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <div
            key={service.title}
            className="luxury-card hover:shadow-alto-accent border border-gray-100 hover:border-alto-accent transition-all duration-300 flex flex-col items-center bg-white"
            style={{
              boxShadow:
                "0 10px 24px 0 rgba(26, 53, 94, 0.08), 0 1.5px 3px 0 rgba(51, 70, 122, 0.07)",
            }}
          >
            <div className="img-hover-zoom w-full h-56 overflow-hidden rounded-xl mb-5">
              <img
                src={service.imageSrc}
                className="w-full h-full object-cover transition-transform duration-700"
                alt={service.title}
              />
            </div>
            <div className="flex-1 flex flex-col items-center px-4 text-center">
              <h3 className="text-2xl font-semibold text-alto-blue mb-3 luxury-gradient bg-clip-text text-transparent">
                {service.title}
              </h3>
              <p className="text-alto-dark-gray mb-6">{service.description}</p>
              <Link to={service.link} className="btn-primary mt-auto w-full">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-14">
        <Link to="/services" className="btn-secondary luxury-border">
          Explore All Services
        </Link>
      </div>
    </div>
  </section>
);

export default HomeServicesSection;
