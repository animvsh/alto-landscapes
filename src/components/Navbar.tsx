
import React from 'react';
import { NavbarProvider } from './navbar/NavbarContext';
import DesktopNavigation from './navbar/DesktopNavigation';
import MobileNavigation from './navbar/MobileNavigation';

const Navbar = () => {
  return (
    <NavbarProvider>
      <div className="w-full flex flex-col items-center">
        <div className="hidden lg:flex w-full justify-center">
          <DesktopNavigation />
        </div>
        <div className="flex lg:hidden w-full">
          <MobileNavigation />
        </div>
      </div>
    </NavbarProvider>
  );
};

export default Navbar;
