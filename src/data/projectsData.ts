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
  { id: 'modern', name: 'Modern' },
  { id: 'contemporary', name: 'Contemporary' },
  { id: 'minimalist', name: 'Minimalist' },
  { id: 'traditional', name: 'Traditional' },
  { id: 'adu', name: 'ADU' },
];

export const projects: Project[] = [
  {
    title: "Weiss Family ADU Project",
    location: "Los Angeles, CA",
    image: "/lovable-uploads/40c3a5c0-9f26-457a-ab09-af03114b9bdd.png",
    link: "/projects/weiss-family",
    category: "adu",
    description: "Bright and airy kitchen with modern white cabinets, stainless steel appliances, and wooden island.",
  },
  {
    title: "Modern Kitchen ADU",
    location: "Silver Lake, CA",
    image: "/lovable-uploads/d4bb8a24-788c-4d41-8f7c-5c6c6050ccda.png",
    link: "/projects/silver-lake-kitchen",
    category: "adu",
    description: "L-shaped kitchen with white cabinets, subway tile backsplash, and stainless steel appliances.",
  },
  {
    title: "Contemporary Kitchen Island",
    location: "Echo Park, CA",
    image: "/lovable-uploads/d13b7955-f9c7-437c-b339-f316079c6a71.png",
    link: "/projects/echo-park-kitchen",
    category: "adu",
    description: "Modern kitchen with wooden island, white countertops, and black faucet fixtures.",
  },
  {
    title: "Galley Kitchen Design",
    location: "Glendale, CA",
    image: "/lovable-uploads/a4558f9a-5a28-41e0-8175-27233100c36c.png",
    link: "/projects/glendale-kitchen",
    category: "adu",
    description: "Compact galley kitchen with white cabinets, gas range, and practical layout.",
  },
  {
    title: "Modern Gray Kitchen",
    location: "Pasadena, CA",
    image: "/lovable-uploads/9c4113c7-9727-48b6-94f4-efad362e9566.png",
    link: "/projects/pasadena-kitchen",
    category: "adu",
    description: "L-shaped kitchen with gray cabinets, white tile backsplash, and modern skylight.",
  },
  {
    title: "Breakfast Bar Studio",
    location: "Studio City, CA",
    image: "/lovable-uploads/f99b2729-0869-4206-afd4-80f95b31370e.png",
    link: "/projects/studio-city-kitchen",
    category: "adu",
    description: "Compact kitchen with breakfast bar, wooden countertop, and minimalist design.",
  },
  {
    title: "Modern Bathroom",
    location: "Santa Monica, CA",
    image: "/lovable-uploads/add22ece-4e0f-4047-810b-35856823141b.png",
    link: "/projects/santa-monica-bathroom",
    category: "adu",
    description: "Space-efficient bathroom with walk-in shower, gray tile, and white vanity.",
  },
  {
    title: "Black and White Kitchen",
    location: "Culver City, CA",
    image: "/lovable-uploads/ca662205-231d-4399-a0ae-a565257d9c96.png",
    link: "/projects/culver-city-kitchen",
    category: "adu",
    description: "U-shaped kitchen with white cabinets, black countertops, and stainless steel appliances.",
  },
  {
    title: "Stacked Laundry Kitchen",
    location: "West Hollywood, CA",
    image: "/lovable-uploads/55f70bef-b2a3-4f0b-855a-74860fffb2be.png",
    link: "/projects/west-hollywood-laundry",
    category: "adu",
    description: "Efficient kitchen with stacked washer/dryer and stainless steel appliances.",
  },
  {
    title: "Modern Dark Wood Kitchen",
    location: "Downtown LA",
    image: "/lovable-uploads/599de313-f7cf-4cee-8893-b1a1e84db7e9.png",
    link: "/projects/downtown-kitchen",
    category: "adu",
    description: "Contemporary kitchen with dark wood cabinets, white countertops, and pendant lighting.",
  },
  {
    title: "Craftsman ADU Exterior",
    location: "Eagle Rock, CA",
    image: "/lovable-uploads/d3cf4ce7-3f97-4189-96aa-90b3c9bd790d.png",
    link: "/projects/eagle-rock-exterior",
    category: "adu",
    description: "Charming exterior with gabled entry, white trim, and craftsman details.",
  },
  {
    title: "Modern Woodland Hills ADU",
    location: "Woodland Hills, CA",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
    link: "/projects/woodland-hills",
    category: "modern",
  },
  {
    title: "Contemporary Venice Beach ADU",
    location: "Venice Beach, CA",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
    link: "/projects/venice-beach",
    category: "contemporary",
  },
  {
    title: "Minimalist Studio City ADU",
    location: "Studio City, CA",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80",
    link: "/projects/studio-city",
    category: "minimalist",
  },
  {
    title: "Traditional Pasadena ADU",
    location: "Pasadena, CA",
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=800&q=80",
    link: "/projects/pasadena",
    category: "traditional",
  },
];
