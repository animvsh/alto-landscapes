
export interface Project {
  title: string;
  location: string;
  image: string;
  link: string;
  category: string;
  description?: string;
}

export const projectCategories = [
  { id: 'all', name: 'All' },
  { id: 'adu', name: 'ADU' },
];

export const projects: Project[] = [
  {
    title: "Weiss Family ADU - Living Room",
    location: "Los Angeles, CA",
    image: "/lovable-uploads/40c3a5c0-9f26-457a-ab09-af03114b9bdd.png",
    link: "/projects/weiss-family",
    category: "adu",
    description: "Bright and airy living space with modern white finishes and wooden accents.",
  },
  {
    title: "Weiss Family ADU - Modern Kitchen",
    location: "Los Angeles, CA",
    image: "/lovable-uploads/d4bb8a24-788c-4d41-8f7c-5c6c6050ccda.png",
    link: "/projects/weiss-family",
    category: "adu",
    description: "L-shaped kitchen with white cabinets, subway tile backsplash, and stainless steel appliances.",
  },
  {
    title: "Weiss Family ADU - Kitchen Island",
    location: "Los Angeles, CA",
    image: "/lovable-uploads/d13b7955-f9c7-437c-b339-f316079c6a71.png",
    link: "/projects/weiss-family",
    category: "adu",
    description: "Modern kitchen with wooden island, white countertops, and black faucet fixtures.",
  },
  {
    title: "Weiss Family ADU - Galley Kitchen",
    location: "Los Angeles, CA",
    image: "/lovable-uploads/a4558f9a-5a28-41e0-8175-27233100c36c.png",
    link: "/projects/weiss-family",
    category: "adu",
    description: "Compact galley kitchen with white cabinets, gas range, and practical layout.",
  },
  {
    title: "Weiss Family ADU - Gray Kitchen",
    location: "Los Angeles, CA",
    image: "/lovable-uploads/9c4113c7-9727-48b6-94f4-efad362e9566.png",
    link: "/projects/weiss-family",
    category: "adu",
    description: "L-shaped kitchen with gray cabinets, white tile backsplash, and modern skylight.",
  },
  {
    title: "Weiss Family ADU - Breakfast Bar",
    location: "Los Angeles, CA",
    image: "/lovable-uploads/f99b2729-0869-4206-afd4-80f95b31370e.png",
    link: "/projects/weiss-family",
    category: "adu",
    description: "Compact kitchen with breakfast bar, wooden countertop, and minimalist design.",
  },
  {
    title: "Weiss Family ADU - Bathroom",
    location: "Los Angeles, CA",
    image: "/lovable-uploads/add22ece-4e0f-4047-810b-35856823141b.png",
    link: "/projects/weiss-family",
    category: "adu",
    description: "Space-efficient bathroom with walk-in shower, gray tile, and white vanity.",
  },
  {
    title: "Weiss Family ADU - Kitchen Design",
    location: "Los Angeles, CA",
    image: "/lovable-uploads/ca662205-231d-4399-a0ae-a565257d9c96.png",
    link: "/projects/weiss-family",
    category: "adu",
    description: "U-shaped kitchen with white cabinets, black countertops, and stainless steel appliances.",
  },
  {
    title: "Weiss Family ADU - Laundry Area",
    location: "Los Angeles, CA",
    image: "/lovable-uploads/55f70bef-b2a3-4f0b-855a-74860fffb2be.png",
    link: "/projects/weiss-family",
    category: "adu",
    description: "Efficient kitchen with stacked washer/dryer and stainless steel appliances.",
  },
  {
    title: "Weiss Family ADU - Wood Kitchen",
    location: "Los Angeles, CA",
    image: "/lovable-uploads/599de313-f7cf-4cee-8893-b1a1e84db7e9.png",
    link: "/projects/weiss-family",
    category: "adu",
    description: "Contemporary kitchen with dark wood cabinets, white countertops, and pendant lighting.",
  },
  {
    title: "Weiss Family ADU - Exterior",
    location: "Los Angeles, CA",
    image: "/lovable-uploads/d3cf4ce7-3f97-4189-96aa-90b3c9bd790d.png",
    link: "/projects/weiss-family",
    category: "adu",
    description: "Charming exterior with gabled entry, white trim, and craftsman details.",
  }
];
