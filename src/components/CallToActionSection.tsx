
import { Link } from 'react-router-dom';

interface CallToActionSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const CallToActionSection = ({
  title,
  subtitle,
  buttonText,
  buttonLink
}: CallToActionSectionProps) => {
  return (
    <section className="bg-alto-blue py-16 md:py-24">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">{subtitle}</p>
        <Link to={buttonLink} className="btn-accent inline-block">
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default CallToActionSection;
