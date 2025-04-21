
import React from 'react';
import { navLinks } from './types';
import { NavLink, Link } from 'react-router-dom';

// Simple mobile horizontal navbar, full width
const MobileNavigation: React.FC = () => (
  <nav className="w-full lg:hidden bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-30">
    <ul className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 px-2 py-1">
      {navLinks.map((link) =>
        link.dropdown ? (
          <li key={link.name}>
            {/* Dropdowns on mobile: just first subitem, or main */}
            <Link
              to={link.subItems?.[0]?.path || link.path}
              className="text-alto-blue font-semibold px-3 py-2 rounded hover:bg-alto-light-gray transition-colors duration-150"
            >
              {link.name}
            </Link>
          </li>
        ) : (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                [
                  "font-semibold px-3 py-2 rounded hover:bg-alto-light-gray transition-colors duration-150",
                  isActive ? "text-alto-blue underline" : "text-alto-blue"
                ].join(" ")
              }
            >
              {link.name}
            </NavLink>
          </li>
        )
      )}
    </ul>
  </nav>
);

export default MobileNavigation;
