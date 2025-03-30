
export interface NavLinkProps {
  name: string;
  path: string;
  external?: boolean;
  dropdown?: boolean;
  subItems?: { name: string; path: string }[];
}

export const navLinks: NavLinkProps[] = [
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
