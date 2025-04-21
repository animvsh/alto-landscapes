
import React from 'react';
import Logo from "./Logo";
import { navLinks } from './navbar/types';
import { Link, useLocation } from 'react-router-dom';

// Utility to split nav links for side-by-side layout
const splitLinks = () => {
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

  // Render nav links with enhanced underline and hover effects
  const renderLinks = links =>
    links.map(link =>
      link.external ? (
        <a
          key={link.name}
          href={link.path}
          className={`
            px-5 py-2 mx-1 relative rounded-full text-base font-semibold nav-link transition-all duration-250
            hover:bg-white/40 hover:text-alto-accent
          `}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.name}
        </a>
      ) : (
        <Link
          key={link.name}
          to={link.path}
          className={`
            px-5 py-2 mx-1 relative rounded-full text-base font-semibold nav-link transition-all duration-250
            ${location.pathname.startsWith(link.path) ? 'text-alto-accent bg-white/60' : 'text-alto-blue'}
            hover:bg-white/40 hover:text-alto-accent
          `}
        >
          {link.name}
        </Link>
      )
    );

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/60 backdrop-blur-[6px] shadow-lg border-b border-alto-gray/40 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-2 md:px-8 py-4 md:py-5">
        {/* Left links */}
        <div className="flex-1 flex justify-end">
          <div className="flex gap-1">{renderLinks(left)}</div>
        </div>
        {/* Centered Logo with effect */}
        <div className="flex-shrink-0 flex justify-center items-center px-2 md:px-6">
          <div className="rounded-full bg-white/80 shadow-md border border-alto-gray/20 p-2 md:p-3 luxury-card transition-all duration-300">
            <Logo className="h-10 md:h-14" />
          </div>
        </div>
        {/* Right links */}
        <div className="flex-1 flex justify-start">
          <div className="flex gap-1">{renderLinks(right)}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
