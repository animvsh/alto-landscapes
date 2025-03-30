
export interface TeamMember {
  name: string;
  position: string;
  image: string;
  bio: string;
  fullBio?: string;
  facebook?: string;
  linkedin?: string;
  instagram?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Paul Manfredi",
    position: "Co-Founder & CEO",
    image: "/lovable-uploads/103a79ba-0e63-4e5c-ba60-296a27569ab2.png",
    bio: "With over 30 years of expertise in the building industry, Paul stands as a cornerstone of the Alto team.",
    fullBio: "With over 30 years of expertise in the building industry, Paul stands as a cornerstone of the Alto team. His journey into construction, a path shaped by a deep, familial legacy, began under the guidance of his father. From those formative years, Paul cultivated a profound understanding of building intricacies and a steadfast commitment to excellence, principles that now define Alto Builders. His vision has been instrumental in navigating Alto through significant milestones, establishing it as a distinguished name in the Los Angeles construction landscape.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Simon Manfredi",
    position: "Co-Founder & COO",
    image: "/lovable-uploads/103a79ba-0e63-4e5c-ba60-296a27569ab2.png",
    bio: "Simon's building journey, enriched by a distinguished education from the University of British Columbia's School of Architecture.",
    fullBio: "Simon's building journey, enriched by a distinguished education from the University of British Columbia's School of Architecture and Landscape (SALA) & the Sauder School of Business, mirrors the foundational principles instilled in him by his father. His academic background provides a unique blend of architectural insight and business acumen, enriching Alto's approach to project management and client relationships. Simon's innovative thinking and commitment to sustainable building practices have been instrumental in positioning Alto at the forefront of modern construction methodologies.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Jessica Chen",
    position: "Design Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    bio: "Jessica brings 15 years of architectural design experience to Alto, specializing in sustainable and functional spaces.",
    fullBio: "Jessica brings 15 years of architectural design experience to Alto, specializing in sustainable and functional spaces. With a Master's degree from UCLA's School of Architecture, she leads our design team with innovative vision and attention to detail. Jessica has been recognized with multiple industry awards for her work on residential projects throughout Southern California. Her approach blends aesthetic beauty with practical functionality, ensuring that every Alto project is not just visually stunning but also perfectly aligned with our clients' lifestyle needs.",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
  {
    name: "Michael Rodriguez",
    position: "Project Manager",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    bio: "Michael oversees our construction projects, ensuring they're completed on time, within budget, and to our exacting standards.",
    fullBio: "Michael oversees our construction projects, ensuring they're completed on time, within budget, and to our exacting standards. With a background in civil engineering and over a decade of hands-on construction management experience, Michael brings technical expertise and practical knowledge to every project he supervises. His methodical approach to project planning, combined with his ability to anticipate and address challenges before they arise, has been key to Alto's reputation for smooth project execution. Clients appreciate his clear communication and dedication to making the construction process transparent and stress-free.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Sarah Johnson",
    position: "Interior Design Specialist",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=800&q=80",
    bio: "Sarah helps clients transform their ADUs into beautifully designed, functional living spaces that reflect their personal style.",
    fullBio: "Sarah helps clients transform their ADUs into beautifully designed, functional living spaces that reflect their personal style. With a degree in interior design and certification in sustainable materials, she brings both aesthetic vision and environmental consciousness to each project. Sarah has a particular talent for maximizing space efficiency in ADUs without sacrificing comfort or style. Her collaborative approach involves clients in every step of the design process, ensuring that the final result is a space that feels like home from day one. Sarah's work has been featured in several home design publications for its innovative approach to small-space living.",
    instagram: "https://instagram.com",
  },
  {
    name: "David Park",
    position: "Permitting Specialist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    bio: "David navigates the complex world of permits and regulations, ensuring all Alto projects comply with local building codes.",
    fullBio: "David navigates the complex world of permits and regulations, ensuring all Alto projects comply with local building codes and zoning requirements. His extensive knowledge of building regulations across Los Angeles and Ventura County makes him an invaluable asset to our team and clients. Before joining Alto, David worked in municipal planning departments, giving him insider insight into the approval process. His meticulous attention to detail and proactive approach to potential regulatory challenges has significantly streamlined our permitting process, reducing delays and keeping projects on schedule.",
    linkedin: "https://linkedin.com",
  }
];
