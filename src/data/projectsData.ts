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
  { id: 'kitchen', name: 'Kitchen' },
];

export const projects: Project[] = [
  // Kitchen projects - West LA
  {
    title: "Kitchen Project - West LA",
    location: "West LA, CA",
    image: "/lovable-uploads/710f9a5e-cc45-4a96-97ba-81f782a7d783.png",
    link: "/projects/kitchen-west-la",
    category: "kitchen",
    description: "Modern kitchen remodel with custom cabinetry and premium appliances."
  },
  {
    title: "Kitchen Project - West LA",
    location: "West LA, CA",
    image: "/lovable-uploads/5126b630-7372-4a58-9266-fd6e718118df.png",
    link: "/projects/kitchen-west-la",
    category: "kitchen",
    description: "Elegant kitchen design with ample storage solutions and contemporary finishes."
  },
  {
    title: "Kitchen Project - West LA",
    location: "West LA, CA",
    image: "/lovable-uploads/94fc1121-02d7-4c84-9b59-3478af52bca7.png",
    link: "/projects/kitchen-west-la",
    category: "kitchen",
    description: "Spacious kitchen featuring high-end materials and functional workspace."
  },
  {
    title: "Kitchen Project - West LA",
    location: "West LA, CA",
    image: "/lovable-uploads/c1d67c75-2052-49aa-8910-0bc223b2be05.png",
    link: "/projects/kitchen-west-la",
    category: "kitchen",
    description: "Custom kitchen with innovative storage solutions and premium countertops."
  },
  {
    title: "Kitchen Project - West LA",
    location: "West LA, CA",
    image: "/lovable-uploads/acb35287-28e0-4a16-97d5-96f5543d6e78.png",
    link: "/projects/kitchen-west-la",
    category: "kitchen",
    description: "Bright and airy kitchen design with custom island and professional-grade appliances."
  },
  
  // Kitchen projects - Agoura Hills
  {
    title: "Kitchen Project - Agoura Hills",
    location: "Agoura Hills, CA",
    image: "/lovable-uploads/17929c0c-4021-439b-9cf2-e0dedb676b79.png",
    link: "/projects/kitchen-agoura-hills",
    category: "kitchen",
    description: "Luxurious kitchen remodel with custom cabinetry and high-end fixtures."
  },
  {
    title: "Kitchen Project - Agoura Hills",
    location: "Agoura Hills, CA",
    image: "/lovable-uploads/18785187-527a-42a6-86c7-5b163b1ad60b.png",
    link: "/projects/kitchen-agoura-hills",
    category: "kitchen",
    description: "Contemporary kitchen with premium finishes and functional workspace."
  },
  {
    title: "Kitchen Project - Agoura Hills",
    location: "Agoura Hills, CA",
    image: "/lovable-uploads/1e9679c4-31cb-4e6c-ba9d-e19ed0371537.png",
    link: "/projects/kitchen-agoura-hills",
    category: "kitchen",
    description: "Elegant kitchen design featuring custom cabinets and stone countertops."
  },
  {
    title: "Kitchen Project - Agoura Hills",
    location: "Agoura Hills, CA",
    image: "/lovable-uploads/20445a80-7d0c-4d5b-b816-22dd735d5054.png",
    link: "/projects/kitchen-agoura-hills",
    category: "kitchen",
    description: "Modern kitchen remodel with innovative storage solutions and premium appliances."
  },
  {
    title: "Kitchen Project - Agoura Hills",
    location: "Agoura Hills, CA",
    image: "/lovable-uploads/21faa8b0-bc6e-447d-9c61-62a55e9406bb.png",
    link: "/projects/kitchen-agoura-hills",
    category: "kitchen",
    description: "Spacious kitchen featuring high-quality materials and functional design elements."
  },
  
  // Kitchen projects - Pasadena
  {
    title: "Kitchen Project - Pasadena",
    location: "Pasadena, CA",
    image: "/lovable-uploads/582129ba-ae8e-4b70-94ff-bd16281b02d0.png",
    link: "/projects/kitchen-pasadena",
    category: "kitchen",
    description: "Stylish kitchen renovation with custom wooden cabinetry and premium finishes."
  },
  {
    title: "Kitchen Project - Pasadena",
    location: "Pasadena, CA",
    image: "/lovable-uploads/569290b6-02a7-43ec-b6c2-fbca64d22845.png",
    link: "/projects/kitchen-pasadena",
    category: "kitchen",
    description: "Elegant kitchen design with functional layout and high-end appliances."
  },
  {
    title: "Kitchen Project - Pasadena",
    location: "Pasadena, CA",
    image: "/lovable-uploads/2206905e-188a-4731-bd4f-7f3a6f79854d.png",
    link: "/projects/kitchen-pasadena",
    category: "kitchen",
    description: "Modern kitchen featuring custom storage solutions and premium materials."
  },
  {
    title: "Kitchen Project - Pasadena",
    location: "Pasadena, CA",
    image: "/lovable-uploads/e8e7c260-aa22-4db1-92d6-4b1180181083.png",
    link: "/projects/kitchen-pasadena",
    category: "kitchen",
    description: "Spacious kitchen remodel with professional-grade appliances and custom cabinetry."
  },
  {
    title: "Kitchen Project - Pasadena",
    location: "Pasadena, CA",
    image: "/lovable-uploads/a9f018d8-dc43-4cbf-8531-2e2ebfb5af32.png",
    link: "/projects/kitchen-pasadena",
    category: "kitchen",
    description: "Beautifully designed kitchen with premium countertops and functional workspace."
  },
  
  // ADU Projects - Add these below kitchen projects
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
