
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";
import { NavLinkProps } from './types';
import { useNavbar } from './NavbarContext';

interface DesktopNavLinkProps {
  link: NavLinkProps;
}

const DesktopNavLink: React.FC<DesktopNavLinkProps> = ({ link }) => {
  const { activeDropdown, toggleDropdown } = useNavbar();

  if (link.dropdown) {
    return (
      <div className="relative group">
        <button
          className="text-white hover:text-alto-accent transition-colors duration-200 font-medium flex items-center gap-1"
          onClick={() => toggleDropdown(link.name)}
        >
          <span>{link.name}</span>
          <svg 
            className="fill-current h-4 w-4 transition-transform duration-200" 
            viewBox="0 0 20 20" 
            style={{ transform: activeDropdown === link.name ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
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
    );
  }

  return (
    <NavLink
      to={link.path}
      className={({ isActive }) =>
        cn(
          "text-white hover:text-alto-accent transition-colors duration-200 font-medium",
          isActive ? "text-alto-accent" : ""
        )
      }
    >
      {link.name}
    </NavLink>
  );
};

export default DesktopNavLink;
