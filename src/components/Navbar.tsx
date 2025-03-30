
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Logo from './Logo';

interface NavLinkProps {
  name: string;
  path: string;
  external?: boolean;
  dropdown?: boolean;
  subItems?: { name: string; path: string }[];
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Update the navigation links array to include Team
const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Team', path: '/team' },
  { name: 'Services', path: '/services', dropdown: true, 
    subItems: [
      { name: 'ADU Construction', path: '/services/adu' },
      { name: 'Remodeling', path: '/services/remodeling' },
    ] 
  },
  { name: 'Projects', path: '/projects' },
  { name: 'Plans', path: '/plans' },
  { name: 'Locations', path: '/locations' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
  { name: 'Other Services', path: 'https://www.altobuilds.com/services', external: true }
];

  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    scrolled: { backgroundColor: 'rgba(255, 255, 255, 0.95)', transition: { duration: 0.3 } },
    top: { backgroundColor: 'transparent' }
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2, ease: "easeOut" } }
  };

  const sheetVariants = {
    hidden: { x: '-100%' },
    open: { x: '0%', transition: { type: 'spring', stiffness: 80, damping: 20 } },
    closed: { x: '-100%', transition: { duration: 0.3 } },
  };

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 py-4 px-6 lg:px-12 xl:px-24 flex items-center justify-between transition-colors duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent",
        "font-montserrat"
      )}
      variants={navbarVariants}
      initial="hidden"
      animate={isScrolled ? "scrolled" : "visible"}
    >
      <motion.div
        className="text-2xl font-bold text-alto-blue"
        variants={logoVariants}
      >
        <Logo />
      </motion.div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
        {navLinks.map((link) => (
          link.dropdown ? (
            <div key={link.name} className="relative group">
              <button
                className="text-alto-blue hover:text-alto-light-blue transition-colors duration-200 font-medium flex items-center gap-1"
                onClick={() => toggleDropdown(link.name)}
              >
                <span>{link.name}</span>
                <svg className="fill-current h-4 w-4 transition-transform duration-200" viewBox="0 0 20 20" style={{ transform: activeDropdown === link.name ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              <AnimatePresence>
                {activeDropdown === link.name && (
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.subItems?.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-2 text-alto-blue hover:bg-alto-light-gray transition-colors duration-200"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "text-alto-blue hover:text-alto-light-blue transition-colors duration-200 font-medium",
                  isActive ? "text-alto-light-blue" : ""
                )
              }
            >
              {link.name}
            </NavLink>
          )
        ))}
      </div>

      {/* Mobile Navigation */}
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6 text-alto-blue" />
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
                {link.dropdown ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full text-left text-alto-blue hover:text-alto-light-blue transition-colors duration-200 font-medium py-2"
                      onClick={() => toggleDropdown(link.name)}
                    >
                      <span>{link.name}</span>
                      <svg className="fill-current h-4 w-4 transition-transform duration-200" viewBox="0 0 20 20" style={{ transform: activeDropdown === link.name ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          className="ml-4 mt-2 overflow-hidden"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {link.subItems?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-4 py-2 text-alto-blue hover:bg-alto-light-gray transition-colors duration-200"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      cn(
                        "block py-2 text-alto-blue hover:text-alto-light-blue transition-colors duration-200 font-medium",
                        isActive ? "text-alto-light-blue" : ""
                      )
                    }
                  >
                    {link.name}
                  </NavLink>
                )}
              </React.Fragment>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </motion.nav>
  );
};

export default Navbar;
