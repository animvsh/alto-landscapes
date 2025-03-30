
import React from 'react';
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from './types';
import MobileNavLink from './MobileNavLink';
import { useNavbar } from './NavbarContext';

const MobileNavigation: React.FC = () => {
  const { isMenuOpen, setIsMenuOpen } = useNavbar();

  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6 text-white" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-sm bg-white text-alto-blue">
        <SheetHeader>
          <SheetTitle className="text-alto-blue">Menu</SheetTitle>
          <SheetDescription className="text-alto-dark-gray">
            Explore our site and discover how we can help with your project.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {navLinks.map((link) => (
            <React.Fragment key={link.name}>
              <MobileNavLink link={link} />
            </React.Fragment>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
