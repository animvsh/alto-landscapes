
export interface Project {
  title: string;
  location: string;
  image: string;
  link: string;
  category: string;
}

export const projectCategories = [
  { id: 'all', name: 'All' },
  { id: 'modern', name: 'Modern' },
  { id: 'contemporary', name: 'Contemporary' },
  { id: 'minimalist', name: 'Minimalist' },
  { id: 'traditional', name: 'Traditional' },
];

export const projects: Project[] = [
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
  {
    title: "Mid-Century Glendale ADU",
    location: "Glendale, CA",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=800&q=80",
    link: "/projects/glendale",
    category: "mid-century",
  },
  {
    title: "Urban Loft Silver Lake ADU",
    location: "Silver Lake, CA",
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=800&q=80",
    link: "/projects/silver-lake",
    category: "urban",
  },
  {
    title: "Craftsman Echo Park ADU",
    location: "Echo Park, CA",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=800&q=80",
    link: "/projects/echo-park",
    category: "craftsman",
  },
  {
    title: "Mediterranean Santa Monica ADU",
    location: "Santa Monica, CA",
    image: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&w=800&q=80",
    link: "/projects/santa-monica",
    category: "mediterranean",
  },
];
