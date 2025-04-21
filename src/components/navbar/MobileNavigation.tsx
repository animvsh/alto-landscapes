
import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from './types';
import MobileNavLink from './MobileNavLink';
import { useNavbar } from './NavbarContext';
import { Button } from "@/components/ui/button";
import { SheetContent, SheetTrigger, Sheet } from '@/components/ui/sheet';

const MobileNavigation: React.FC = () => {
  const { isMenuOpen, setIsMenuOpen } = useNavbar();

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-white">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between py-4 border-b">
              <span className="text-lg font-semibold">Menu</span>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleToggleMenu}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="flex-1 overflow-auto py-6">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name} className="px-2">
                    <MobileNavLink link={link} />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavigation;
