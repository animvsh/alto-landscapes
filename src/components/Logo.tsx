
import { Link } from 'react-router-dom';

interface LogoProps {
  linkTo?: string;
  className?: string;
}

const Logo = ({ linkTo = "/", className = "" }: LogoProps) => {
  const logoContent = (
    <div className={`text-white flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/e18ec492-99e6-44f0-942f-5cc979e67cd3.png" 
        alt="Alto Builders Logo"
        className="h-8 sm:h-10 md:h-12" 
      />
    </div>
  );

  if (linkTo) {
    return <Link to={linkTo}>{logoContent}</Link>;
  }

  return logoContent;
};

export default Logo;
