
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import Logo from './Logo';
import { NavbarProvider } from './navbar/NavbarContext';
import DesktopNavigation from './navbar/DesktopNavigation';
import MobileNavigation from './navbar/MobileNavigation';
import { useNavbar } from './navbar/NavbarContext';

const NavbarContent = () => {
  const { isScrolled } = useNavbar();

  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    scrolled: { backgroundColor: 'rgba(26, 53, 94, 0.95)', transition: { duration: 0.3 } },
    top: { backgroundColor: 'transparent' }
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2, ease: "easeOut" } }
  };

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 py-4 px-6 lg:px-12 xl:px-24 flex items-center justify-between transition-colors duration-300",
        isScrolled ? "bg-alto-blue/95 backdrop-blur-sm shadow-md" : "bg-transparent",
        "font-montserrat"
      )}
      variants={navbarVariants}
      initial="hidden"
      animate={isScrolled ? "scrolled" : "visible"}
    >
      <motion.div
        className="text-2xl font-bold text-white"
        variants={logoVariants}
      >
        <Logo />
      </motion.div>

      <DesktopNavigation />
      <MobileNavigation />
    </motion.nav>
  );
};

const Navbar = () => {
  return (
    <NavbarProvider>
      <NavbarContent />
    </NavbarProvider>
  );
};

export default Navbar;
