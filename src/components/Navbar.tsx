
import React from 'react';
import Logo from "./Logo";
import { navLinks } from './navbar/types';
import { Link, useLocation } from 'react-router-dom';

const splitLinks = () => {
  // Even number: half to left, half to right; odd: logo stays center
  const left = [];
  const right = [];
  const len = navLinks.length;
  const midIndex = Math.floor(len / 2);
  for (let i = 0; i < len; i++) {
    if (i < midIndex) left.push(navLinks[i]);
    else right.push(navLinks[i]);
  }
  return { left, right };
};

const Navbar = () => {
  const location = useLocation();
  const { left, right } = splitLinks();
  // Helper to render links, including dropdowns if needed, skipped mega-menu for simplicity
  const renderLinks = links =>
    links.map(link =>
      link.external ? (
        <a
          key={link.name}
          href={link.path}
          className="mx-2 px-3 py-2 rounded hover:bg-alto-light-gray transition text-alto-blue font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.name}
        </a>
      ) : (
        <Link
          key={link.name}
          to={link.path}
          className={`mx-2 px-3 py-2 rounded hover:bg-alto-light-gray transition font-medium
            ${location.pathname.startsWith(link.path) ? 'text-alto-accent bg-alto-light-gray' : 'text-alto-blue'}
          `}
        >
          {link.name}
        </Link>
      )
    );
  return (
    <nav className="w-full bg-white/80 py-3 shadow-lg px-1 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left links */}
        <div className="flex-1 flex justify-end">
          <div className="flex gap-1">
            {renderLinks(left)}
          </div>
        </div>
        {/* Logo center */}
        <div className="flex-shrink-0 flex justify-center px-6">
          <Logo className="h-12" />
        </div>
        {/* Right links */}
        <div className="flex-1 flex justify-start">
          <div className="flex gap-1">
            {renderLinks(right)}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
