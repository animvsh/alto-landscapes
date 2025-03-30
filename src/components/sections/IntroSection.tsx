
import { IntroSectionProps } from './interfaces';

const IntroSection = ({ 
  title = "Building an ADU has never been easier!",
  subtitle = "Interest in ADU projects has skyrocketed, as homeowners look to maximize their property's potential. ADUs offer versatile solutions—whether it's generating rental income, providing space for family members, or creating flexible living areas. Explore how our clients have transformed their properties with beautifully designed ADUs.",
  className
}: IntroSectionProps) => {
  return (
    <section className={`py-20 bg-white ${className || ''}`}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
