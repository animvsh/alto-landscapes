
export interface NavLinkProps {
  name: string;
  path: string;
  external?: boolean;
  dropdown?: boolean;
  subItems?: { name: string; path: string }[];
}

export const navLinks: NavLinkProps[] = [
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services', dropdown: true, 
    subItems: [
      { name: 'Kitchen Remodeling', path: '/services/kitchen' },
      { name: 'Bathroom Remodeling', path: '/services/bathroom' },
      { name: 'Backyard Projects', path: '/services/backyard' },
      { name: 'New Construction', path: '/services/new-construction' },
    ] 
  },
  { name: 'Projects', path: '/projects', dropdown: true, 
    subItems: [
      { name: 'Kitchen Projects', path: '/projects#kitchen-projects' },
      { name: 'Bathroom Projects', path: '/projects#bathroom-projects' },
      { name: 'ADU Projects', path: '/projects#adu-projects' },
    ] 
  },
  { name: 'ADUs', path: '/adu', dropdown: false },
  { name: 'Locations', path: '/locations' },
  { name: 'Contact', path: '/contact' },
];
