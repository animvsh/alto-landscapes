
import React from 'react';
import { navLinks } from './types';
import DesktopNavLink from './DesktopNavLink';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";

const DesktopNavigation: React.FC = () => {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList className="items-center space-x-6 xl:space-x-10">
        {navLinks.map((link) => (
          <NavigationMenuItem key={link.name}>
            <DesktopNavLink link={link} />
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopNavigation;
