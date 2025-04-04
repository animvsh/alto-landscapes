
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
      { name: 'Kitchen Remodeling', path: '/services/kitchen' },
      { name: 'Bathroom Remodeling', path: '/services/bathroom' },
      { name: 'Backyard Projects', path: '/services/backyard' },
      { name: 'New Construction', path: '/services/new-construction' },
    ] 
  },
  { name: 'ADUs', path: '/adu', dropdown: true, 
    subItems: [
      { name: 'ADU Construction', path: '/services/adu' },
      { name: 'ADU Plans', path: '/plans' },
    ] 
  },
  { name: 'Projects', path: '/projects' },
  { name: 'Locations', path: '/locations' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
  { name: 'Other Services', path: 'https://www.altobuilds.com/services', external: true }
];
