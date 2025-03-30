
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";
import { NavLinkProps } from './types';
import { useNavbar } from './NavbarContext';

interface MobileNavLinkProps {
  link: NavLinkProps;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ link }) => {
  const { activeDropdown, toggleDropdown } = useNavbar();

  if (link.dropdown) {
    return (
      <div>
        <button
          className="flex items-center justify-between w-full text-left text-alto-blue hover:text-alto-blue transition-colors duration-200 font-medium py-2"
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
    );
  }

  return (
    <NavLink
      to={link.path}
      className={({ isActive }) =>
        cn(
          "block py-2 text-alto-blue hover:text-alto-blue transition-colors duration-200 font-medium",
          isActive ? "text-alto-blue" : ""
        )
      }
    >
      {link.name}
    </NavLink>
  );
};

export default MobileNavLink;
