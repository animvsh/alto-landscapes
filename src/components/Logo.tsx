
import { Link } from 'react-router-dom';

interface LogoProps {
  linkTo?: string;
  className?: string;
}

const Logo = ({ linkTo = "/", className = "" }: LogoProps) => {
  const logoContent = (
    <div className={`text-white flex items-center ${className}`}>
      <div className="flex items-center">
        <span className="text-2xl md:text-3xl font-bold tracking-tighter mr-2">A|B</span>
        <div className="flex flex-col text-xs leading-tight">
          <span className="font-semibold tracking-wider">ALTO</span>
          <span className="tracking-wide">BUILDERS</span>
        </div>
      </div>
    </div>
  );

  if (linkTo) {
    return <Link to={linkTo}>{logoContent}</Link>;
  }

  return logoContent;
};

export default Logo;
