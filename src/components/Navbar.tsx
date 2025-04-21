
import React from 'react';
import { NavbarProvider } from './navbar/NavbarContext';
import DesktopNavigation from './navbar/DesktopNavigation';
import MobileNavigation from './navbar/MobileNavigation';

const Navbar = () => {
  return (
    <NavbarProvider>
      <div className="w-full flex justify-center">
        <DesktopNavigation />
        <MobileNavigation />
      </div>
    </NavbarProvider>
  );
};

export default Navbar;
