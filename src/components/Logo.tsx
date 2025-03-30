
import { Link } from 'react-router-dom';

interface LogoProps {
  linkTo?: string;
  className?: string;
}

const Logo = ({ linkTo = "/", className = "" }: LogoProps) => {
  const logoContent = (
    <div className={`text-white flex items-center ${className}`}>
      <div className="flex items-center">
        <span className="text-3xl font-bold">A</span>
        <span className="text-3xl font-light mx-0.5">|</span>
        <span className="text-3xl font-bold">B</span>
      </div>
      <div className="flex flex-col text-xs uppercase ml-2 leading-tight tracking-wide">
        <span className="font-medium">ALTO</span>
        <span className="font-medium">BUILDERS</span>
      </div>
    </div>
  );

  if (linkTo) {
    return <Link to={linkTo}>{logoContent}</Link>;
  }

  return logoContent;
};

export default Logo;
