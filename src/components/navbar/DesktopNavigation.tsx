
import React from 'react';
import { navLinks } from './types';
import DesktopNavLink from './DesktopNavLink';

const DesktopNavigation: React.FC = () => {
  return (
    <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
      {navLinks.map((link) => (
        <DesktopNavLink key={link.name} link={link} />
      ))}
    </div>
  );
};

export default DesktopNavigation;
